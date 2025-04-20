document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-buttons">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">clear</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";


        li.querySelector(".delete-btn").addEventListener("click", function() {
            li.remove();
        });

        li.querySelector(".edit-btn").addEventListener("click", function() {
            const taskTextElement = li.querySelector(".task-text");
            const newTaskText = prompt("Edit your task:", taskTextElement.textContent);
            if (newTaskText !== null && newTaskText.trim() !== "") {
                taskTextElement.textContent = newTaskText.trim();
            }
        });
    }
});