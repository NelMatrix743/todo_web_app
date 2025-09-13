/**
 *  SOURCE CODE VERSION: 1.0.0
 *  PROGRAMMER: NELSON CHIDI (NELMATRIX)
 *  DATE-TIME WRITTEN: SEPT 12, 2025; 8:20PM
 */


// mapped elements

const inputBox = document.getElementById("input-box");
const taskListContainer = document.getElementById("task-list-container");
const taskInsertBtn = document.getElementById("insert-task-button");


// event callback functions

function clearInput(){
    inputBox.value = "";
}

function createTaskItem(taskText){
    let taskItem = document.createElement("li");
    taskItem.innerHTML = taskText;
    let deleteTask = document.createElement("span");
    deleteTask.innerHTML = "\u00d7";
    taskItem.appendChild(deleteTask);
    return taskItem;
}

function addTask(){
    if(inputBox.value === ""){
        alert("ERROR! YOU HAVE TO ENTER A TASK!");
    } else {
        const taskListItem = createTaskItem(inputBox.value);
        taskListContainer.appendChild(taskListItem);
        clearInput();
    }
}


// map elements to callback functions

taskInsertBtn.addEventListener("click", addTask);

taskListContainer.addEventListener("click", function(event){
    switch(event.target.tagName){
        case "LI":
            event.target.classList.toggle("checked");
            break;
        case "SPAN":
            event.target.parentElement.remove();
            break;
    }
}, false);


// event listener for enter button

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        addTask();
    }
});