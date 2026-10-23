const defaultTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false }
];

const savedTasks = localStorage.getItem('taskflowsTasks');

let tasks = savedTasks
    ? JSON.parse(savedTasks)
    : defaultTasks;

const filterAll = document.getElementById('filterAll');
const filterActive = document.getElementById('filterActive');
const filterCompleted = document.getElementById('filterCompleted');

const searchTask = document.getElementById('SearchTask');

const categoryFilter = document.getElementById('categoryFilter');


const taskInput = document.getElementById('taskInput');
taskInput.focus();


const addTaskBtn = document.getElementById('addTaskBtn');

const taskList = document.getElementById('taskList');

const taskCategory = document.getElementById('taskCategory');

let currentFilter = 'all';





function getFilteredTasks(tasks, filter) {
    switch (filter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
}





function getVisibleTasks() {
    const filteredTasks = getFilteredTasks(tasks, currentFilter);
    const searchText = searchTask.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    return filteredTasks.filter(task => {
        const matchesSearch = task.title
        .toLowerCase()
        .includes(searchText);

        const matchesCategory = selectedCategory === 'all' || 
        task.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
        
    });
}





function renderTasks(tasksToRender) {
    taskList.innerHTML = '';

    tasksToRender.forEach(task => {
        const taskElement = document.createElement('div');
        

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `task-${task.id}`;
        checkbox.checked = task.completed;


      checkbox.addEventListener('change', () => {
           task.completed = checkbox.checked;

           localStorage.setItem('taskflowsTasks', JSON.stringify(tasks));

           updateProgress();
           renderTasks(getVisibleTasks());

        });


        const label = document.createElement('label');
        label.textContent = task.title;
        label.htmlFor = checkbox.id;




        const categoryBadge = document.createElement('span');

        const category = task.category || 'personal';

        categoryBadge.className = `category-badge ${category}`;
        categoryBadge.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);




        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        



       editBtn.addEventListener('click', () => {

           const updatedTitle = prompt('Edit your task:', task.title);

            if (updatedTitle === null) {
              return;
            }

           if (updatedTitle.trim() === '') {
              return;
            }

           task.title = updatedTitle.trim();

          localStorage.setItem('taskflowsTasks', JSON.stringify(tasks));

          renderTasks(getVisibleTasks());

       });



        
       deleteBtn.addEventListener('click', () => {

           tasks= tasks.filter(item => item.id !== task.id );
       
           localStorage.setItem('taskflowsTasks', JSON.stringify(tasks));

           renderTasks(getVisibleTasks());

        });


        taskElement.appendChild(checkbox);
        taskElement.appendChild(label);
        taskElement.appendChild(deleteBtn);
        taskElement.appendChild(editBtn);
        taskElement.appendChild(categoryBadge);
        taskList.appendChild(taskElement);
    });
}



updateProgress();

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;

    const percentage = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    document.getElementById('progressText').textContent =
        `${completed} of ${total} tasks completed`;

    document.getElementById('progressPercent').textContent =
        `${percentage}%`;

    document.getElementById('progressFill').style.width =
        `${percentage}%`;

    const remaining = total - completed;

    document.getElementById('remainingText').textContent =
        remaining === 0
            ? 'All tasks completed!'
            : `${remaining} tasks remaining`;
}





  function changeFilter(filter) {
      currentFilter = filter;
    
      //const filteredTasks = getFilteredTasks(tasks, currentFilter);
      //renderTasks(filteredTasks);
      renderTasks(getVisibleTasks());
    }





    searchTask.addEventListener('input', () => {

        renderTasks(getVisibleTasks());
        
    });




    
    categoryFilter.addEventListener('change', () => {

        renderTasks(getVisibleTasks());

    });






    filterAll.addEventListener('click', () => {
        changeFilter('all');
    });

    filterActive.addEventListener('click', () => {
        changeFilter('active');

    });
    filterCompleted.addEventListener('click', () => {
        changeFilter('completed');
    });



    addTaskBtn.addEventListener('click', () => {
       const title = taskInput.value.trim();

       if(title === '') {
        return;
       }

         const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
            category: taskCategory.value
         };

        tasks.push(newTask);

        localStorage.setItem('taskflowsTasks', JSON.stringify(tasks));

        taskInput.value = '';
        taskInput.focus();


        renderTasks(getVisibleTasks());
        
    });


   taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {

           addTaskBtn.click();

        }
    });


 renderTasks(tasks);
