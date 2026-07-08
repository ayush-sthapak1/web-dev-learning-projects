# React Todo App 📝

A component-based, interactive Todo application built with **React** and **Vite**.

## ✨ Features
- **Component-Based Architecture**: Modular design separating concern into `Navbar`, `TaskForm`, `TaskList`, and `TaskItem`.
- **Inline Task Editing**: Click the Edit button to modify the text of a task in-place and save/cancel changes.
- **Task Persistence**: Automatically saves and loads your tasks using browser `localStorage` (key: `local_todo_tasks`).
- **Complete Task Actions**: Add, Edit, Delete, and Toggle task completion status.

## 📁 Project Structure
- `src/Components/Navbar.jsx` - Header component.
- `src/Components/TaskForm.jsx` - Component to enter and add new tasks.
- `src/Components/TaskList.jsx` - Component to iterate and render the list of tasks.
- `src/Components/TaskItem.jsx` - Individual task item managing edit state and toggle/delete handlers.
- `src/App.jsx` - Primary state manager handling CRUD actions and local storage sync.

## 🛠️ Tech Stack
- **React.js** (Functional components, hooks like `useState`, `useEffect`)
- **Vite** (Next-generation frontend tooling)
- **CSS3** (Styling for task status state transitions)

