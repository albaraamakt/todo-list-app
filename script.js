const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <div>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
                <button class="unchecked" onclick="checkTask(this)">Check</button>
            </div>
        `;
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    taskList.removeChild(listItem);
}

function clearTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function checkTask(button) {
    if(button.classList.contains("unchecked")) {
        button.classList.add("checked");
        button.classList.remove("unchecked");
    } else {
        button.classList.add("unchecked");
        button.classList.remove("checked");
    }
}
