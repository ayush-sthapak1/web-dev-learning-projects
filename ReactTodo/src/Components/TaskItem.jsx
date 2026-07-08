import { useState } from "react";

function TaskItem({ task,onDeleteTask,onToggleTask,onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.text);

    function handleSave() {
        onEditTask(task.id, editText);
        setIsEditing(false);
    }

    function handleCancel() {
        setEditText(task.text);
        setIsEditing(false);
    }

    function handleEditClick() {
        setEditText(task.text);
        setIsEditing(true);
    }

    return (
        <li>{
    isEditing ? (
        <>
            <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
            />

            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </>
    ) : (
        <>{" "}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
            />

            <span className={task.completed ? "completed" : ""}>
                {task.text}
            </span>{" "}

            <button onClick={handleEditClick}>
                Edit
            </button>{" "}

            <button onClick={() => onDeleteTask(task.id)}>
                Delete
            </button>
        </>
    )

    }
    </li>
    );
}

export default TaskItem;