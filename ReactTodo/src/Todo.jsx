import { useEffect, useState } from "react";
import "./Todo.css";

function Todo (){
    const [tasks,setTasks] = useState([]);
    const [taskInput,setTaskInput] = useState("");
    
    const[loaded,setLoaded] = useState(false);

    useEffect(()=>{
        const savedTasks = localStorage.getItem("tasks");
        if(savedTasks){
            setTasks(JSON.parse(savedTasks));
        }
        setLoaded(true);
    },[]);

    useEffect(() => {
        if(!loaded) return;
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks));
    },[tasks,loaded]);


    function addTask(){
        if(taskInput.trim() === "" || tasks.some(task => task.text.trim().toLowerCase() === taskInput.trim().toLowerCase())) return;
        setTasks([
            ...tasks,
            {
                id:Date.now(),
                text:taskInput.trim()
            }
        ]);

        setTaskInput("");
    }

    function deleteTask(id){
        setTasks(
            tasks.filter(task => task.id !== id)
        );
    }
    

return(
    <div className="todo-container">
        <h1 className="todo-title">Todo App</h1>
        <div className="todo-input-container">
            <input 
                className="todo-input" 
                placeholder="Enter task..." 
                value={taskInput} 
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button className="todo-add-btn" onClick={addTask}>Add</button>
        </div>
        {tasks.length === 0 ? (
            <p className="todo-empty">No tasks yet</p>
        ) : (
            <ul className="todo-list">
                {tasks.map(task => (
                    <li className="todo-item" key={task.id}>
                        <span className="todo-text">{task.text}</span>
                        <button className="todo-delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
)
}

export default Todo;