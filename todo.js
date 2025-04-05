const taskInput = document.querySelector("#taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");

function createListItem(taskText){
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    return listItem;
}

function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText !== ""){
        const listItem = createListItem(taskText);
        taskList.append(listItem);
        taskInput.value = "";
    }
}
addTaskButton.addEventListener("click",addTask);

//Add toggle with greenbackground and crossoutfunction when task is completed
function taskComplete() {
   const btn = document.querySelector("li")
    btn.classList.toggle("complete"); // Toggles glow effect
}