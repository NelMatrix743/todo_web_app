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

function createTaskItem(taskText){
    const taskItem = document.createElement("li");
    taskItem.innerHTML = taskText;
    return taskItem;
}

