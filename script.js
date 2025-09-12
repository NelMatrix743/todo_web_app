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
    const taskItem = document.createElement("li");
    taskItem.innerHTML = taskText;
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


// event listener for enter button

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        addTask();
    }
});