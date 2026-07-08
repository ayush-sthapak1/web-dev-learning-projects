import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar"
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("local_todo_tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
});

  useEffect(() => {
    localStorage.setItem(
        "local_todo_tasks",
        JSON.stringify(tasks)
    );
  }, [tasks]);

  function handleDeleteTask(id) {
    setTasks(prevTasks =>
        prevTasks.filter(task => task.id !== id)
    );
  }

  function handleToggleTask(id) {
    setTasks(prevTasks =>
        prevTasks.map(task =>
            task.id === id
                ? { ...task, completed: !task.completed }
                : task
        )
    );
  }

  function handleEditTask(id, newText) {
    if (newText.trim() === "") return;

    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id 
          ? { ...task, text: newText.trim() }
          : task
      )
    );
  }


    return (
        <>
          <Navbar/>
          <TaskForm setTasks={setTasks} />
          <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask = {handleToggleTask} onEditTask={handleEditTask}/>
        </>
    );
}

export default App;