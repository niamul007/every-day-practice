let inputText = document.querySelector(".taskInput");
let title = document.querySelector(".title");
let btn = document.querySelector(".addTask");
let list = document.querySelector(".taskList");

// Load saved tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => renderTask(task));

// Add task
btn.addEventListener("click", () => {
    const taskText = inputText.value.trim();

    // Check input field
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Add to array and save to localStorage
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Render task in DOM
    renderTask(taskText);

    // Clear input
    inputText.value = "";
});

// Add task on Enter key
inputText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        btn.click();
    }
});

// Function to render a task
function renderTask(taskText) {
    let li = document.createElement("li");
    let inTxtVal = document.createElement("span");
    let btnDone = document.createElement("button");
    let btnDelete = document.createElement("button");

    // Set text and attributes
    inTxtVal.innerText = taskText;
    inTxtVal.setAttribute("class", "list-item-txt");

    btnDone.innerText = "Done";
    btnDone.setAttribute("class", "done-btn");

    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("class", "delete-btn");

    li.setAttribute("class", "list-item");
    li.appendChild(inTxtVal);
    li.appendChild(btnDone);
    li.appendChild(btnDelete);
    list.appendChild(li);

    // Done button functionality
    btnDone.addEventListener("click", () => {
        inTxtVal.classList.toggle("done");
    });

    // Delete button functionality
    btnDelete.addEventListener("click", () => {
        list.removeChild(li);
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
}
