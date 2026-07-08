import TaskItem from "./TaskItem";

function TaskList({tasks,onDeleteTask,onToggleTask, onEditTask}) {
    if(tasks.length === 0) return <p>No tasks yet</p>
    return <>
    {tasks.map(task => (
        <TaskItem 
        key ={task.id}
        task={task} 
        onDeleteTask={onDeleteTask}
        onToggleTask={onToggleTask}
        onEditTask={onEditTask}/>
    ))}
    </>;
}

export default TaskList;