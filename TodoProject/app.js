let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let inp = document.querySelector("#taskInput");
let btn = document.querySelector("#addbtn");
let list = document.querySelector(".mainList");

function renderTask(task){
    let newTask = document.createElement("li");
    newTask.innerHTML = 
    `<input type = "checkbox" class="checkbox"> 
    <span class = "task-text">${task.text}</span>
    <button class ="delbtn">delete task</button>`;
    if(task.completed == true){
        newTask.querySelector(".checkbox").checked = true;
        newTask.classList.add("completed")
    }
    list.appendChild(newTask);
}

tasks.forEach(task => renderTask(task));



function addTask(){
    if(inp.value.trim() === "") return;
    let newTask = document.createElement("li");
    newTask.innerHTML = 
    `<input type = "checkbox" class="checkbox"> 
    <span class = "task-text">${inp.value}</span>
    <button class ="delbtn">delete task</button>`;
    list.appendChild(newTask);

    tasks.push({ text: inp.value,
    completed: false
    });

    localStorage.setItem("tasks",JSON.stringify(tasks));
    inp.value = "";
}


btn.addEventListener("click",addTask);

inp.addEventListener("keydown",(e) =>{
    if(e.key === "Enter"){
        addTask();
    }
});

list.addEventListener("change", (e) => {
  if (e.target.classList.contains("checkbox")) {
    const li = e.target.closest("li");
    const index = [...list.children].indexOf(li);

    tasks[index].completed = e.target.checked;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    li.classList.toggle("completed", e.target.checked);
  }
});


list.addEventListener("click", e => {
    if (e.target.classList.contains("delbtn")) {
        const delLi = e.target.closest("li");

        const index = [...list.children].indexOf(delLi);
        tasks.splice(index,1);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        delLi.remove();
    }
});