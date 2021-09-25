window.onload=function(){
    displayTask();
}

//Variables

const input = document.querySelector("input"),
btn = document.querySelector("button"),
todoList = document.querySelector(".todo-list"),
clear = document.querySelector(".clear");
let tasks;

btn.addEventListener("click",addTask);

//Get tasks from local storage
function getTasks() {
    
    if(localStorage.getItem("tasks")===null){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    return tasks;
}

function addTask(){
    if(input.value!=="") {
       addTaskToLS();
        displayTask();
    }
    else {
    alert("Please enter a task");
    }
}

//Save task to local storage

function addTaskToLS() {
    getTasks();
    tasks.push(input.value);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    input.value="";
}


//Display tasks on the page
function displayTask(){
    todoList.innerHTML = "";
    getTasks();
    tasks.forEach((task, index)=> {
        const newLi = document.createElement("li");
        const delBtn = document.createElement("button");
        delBtn.innerHTML = `<i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`; 
        
        

        newLi.appendChild(document.createTextNode(task));
        newLi.appendChild(delBtn);

        todoList.appendChild(newLi);
    });
}


//Delete Tasks
function deleteTask(index){
    const del = confirm("You are about to delete this task");
    if(del==true){
        getTasks();

    }

    tasks.splice(index, 1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTask();
}

//Clear Tasks
clear.addEventListener("click",clearTasks);

function clearTasks() {
    const delTasks = confirm("You are about to delete all tasks");

    if(delTasks) {
        localStorage.clear();
        
        displayTask();
    }
}