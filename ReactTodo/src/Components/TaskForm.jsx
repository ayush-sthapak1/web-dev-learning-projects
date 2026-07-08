import { useState } from "react";

function TaskForm({setTasks}) {
    const [task, setTask] = useState("");

    function handleTaskChange
(e) {
        setTask(e.target.value);
    }

    function handleAddTask() {
        if(task.trim() === "") return;
        setTasks(prevTasks => [
    ...prevTasks,
    {
        id: Date.now(),
        text: task.trim(),
        completed: false
    }
    ]);
        setTask("");
    }

    return (
        <>
            <input
                placeholder="Enter Task"
                value={task}
                onChange={handleTaskChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </>
    );
}

export default TaskForm;