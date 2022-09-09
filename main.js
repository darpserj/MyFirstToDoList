// Query Selectors

const taskForm = document.querySelector("form");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");

// Event Listeners

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (taskInput.value === "" || taskInput.value === null) {
        return;
    }
    createNewTask(taskInput.value);
});

// Check & save to local storage

// Functions for saving, deleting, modifying

const createNewTask = (task) => {
    const taskTemplate = document.querySelector("#taskTemplate");
    const clonedList = document.importNode(taskTemplate.content, true);
    const taskTxt = clonedList.querySelector("#task");
    taskTxt.innerText = task;
    taskList.appendChild(clonedList);
};
