# TaskFlows — Personal Productivity Dashboard

TaskFlows is a lightweight task-management web application built with HTML, CSS, and vanilla JavaScript. It helps users organize tasks, track completion, and manage everyday work through a clean, responsive interface.

**Project status:** In development
**Developer:** [Ruchi Kumari]
**Live demo:** Add your deployed URL here
**Repository:** Add your GitHub repository URL here

## Features

- **Task management:** Add, edit, and delete tasks.
- **Task completion:** Mark tasks as completed or active.
- **Search:** Find tasks by their title.
- **Filtering:** Filter tasks by completion status and category.
- **Task categories:** Organize tasks into Work, Personal, and Shopping.
- **Local persistence:** Save task data using the browser's `localStorage`.
- **Progress tracking:** Display task completion statistics and progress.
- **Responsive interface:** Designed to adapt to desktop and smaller screens.

> Features should be marked as complete only after they have been tested. Interactive analytics and charts are still being developed until their data updates correctly.

## Tech Stack

- HTML5 — semantic structure
- CSS3 — layout, responsive design, transitions, and visual styling
- JavaScript (ES6+) — DOM manipulation, event handling, filtering, and task state
- Web Storage API — local persistence with `localStorage`
- Git and GitHub — version control and project hosting

## Getting Started

### Prerequisites

- A modern web browser
- A code editor such as Visual Studio Code
- Git, if you want to work with the repository locally

### Run locally

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder:

   ```bash
   cd TaskFlows
   ```

3. Open `index.html` in your browser, or run it with the VS Code Live Server extension.

No package installation or build step is required for the current vanilla JavaScript version.

## How Data Is Stored

TaskFlows currently uses browser `localStorage` to persist task data. Tasks are stored locally in the browser and are not synchronized between devices or users.

Clearing the browser's site data may remove saved tasks. This version does not include a backend, user authentication, or cloud synchronization.

## Testing Checklist

- [ ] Add a task with each available category.
- [ ] Edit a task and verify the updated title persists.
- [ ] Delete a task and verify it stays deleted after refreshing.
- [ ] Toggle completion and verify progress updates immediately.
- [ ] Test search together with status and category filters.
- [ ] Refresh the browser and verify saved tasks load correctly.
- [ ] Test empty task lists and zero-task progress.
- [ ] Check the layout on desktop and mobile.
- [ ] Verify analytics reflect actual task data, once implemented.

## Current Limitations

- Data is stored per browser and device.
- No accounts, backend API, or cloud synchronization.
- No multi-user collaboration.
- Analytics must be validated against live task data before being considered complete.

## Roadmap

- [ ] Complete and test live progress analytics.
- [ ] Finish interactive task-status and category charts.
- [ ] Improve accessibility and keyboard navigation.
- [ ] Add automated tests for core task operations.
- [ ] Deploy a public demo.
- [ ] Evaluate backend persistence and authentication as a future extension.

## What I Learned

This project is an opportunity to practice DOM manipulation, event-driven programming, array methods, filtering logic, state management, browser storage, responsive CSS, debugging, and version control.

## Feedback

Suggestions, bug reports, and improvement ideas are welcome through GitHub Issues.

---

Built as a hands-on project to strengthen frontend development skills and learn how to turn a simple idea into a usable web application.
