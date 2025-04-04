const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

function createListItem(){
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    return listItem
}

function addTask(){
    const taskText = taskInput.ariaValueMax.trim();

    if(taskText !== ""){
        const listItem = createListItem(taskText);
        taskList.append(listItem);
        taskInput.value = "";
    }
}
addTaskButton.addEventListener("click",addTask);