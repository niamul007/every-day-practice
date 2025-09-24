// let inTxt = document.querySelector(".taskInput");
// let addBtn = document.querySelector(".addTask");
// let list = document.querySelector(".taskList");

// // Load tasks from localStorage or start with empty array
// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// let count = tasks.length; // continue count from saved tasks

// // Render tasks (so if you reload, you still see them)
// renderTasks();

// addBtn.addEventListener("click", () => {
//   let taskTxt = inTxt.value.trim();
//   if (!taskTxt) return;

//   count++;

//   // make a new task object
//   let newTask = {
//     id: count,
//     text: taskTxt
//   };

//   // push into array
//   tasks.push(newTask);

//   // save to localStorage
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   // render it
//   addTaskToUI(newTask);

//   inTxt.value = "";
// });

// // Function to add one task to UI
// function addTaskToUI(task) {
//   let li = document.createElement("li");
//   li.textContent = `${task.id}. ${task.text}`;
//   list.appendChild(li);
// }

// // Function to render all tasks
// function renderTasks() {
//   list.innerHTML = ""; // clear first
//   tasks.forEach(task => addTaskToUI(task));
// }


let tasks = [
  { id: 1, text: "Learn JavaScript" },
  { id: 2, text: "Practice CSS" },
  { id: 3, text: "Build a To-Do App" },
  { id: 4, text: "Review Git and GitHub" }
];

for(let i =0; i< tasks.length; i++){
    console.log(tasks[i].id);
}

tasks.filter()