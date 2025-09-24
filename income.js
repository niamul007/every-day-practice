let amount = document.querySelector(".amount");
let description = document.querySelector(".description");
let addIncome = document.querySelector(".add-income");
let totalExpan = document.querySelector(".total-expanses");
let totalBalance = document.querySelector(".balance");
let incomeList = document.querySelector(".income-list");
let expanseList = document.querySelector(".expanse-list");

let allItems = JSON.parse(localStorage.getItem("allData")) || [];

// Set idCount to the max existing id
let idCount = allItems.length ? Math.max(...allItems.map(i => i.id)) : 0;

// On page load, render saved data
allItems.forEach(item => showData(item));
showAmount();

// Add transaction
addIncome.addEventListener("click", () => {
  let userAmount = amount.value.trim();
  let userText = description.value.trim();
  if (!userAmount || !userText) return;

  idCount++;
  let arrObj = {
    id: idCount,
    text: userText,
    amount: Number(userAmount),
  };

  allItems.push(arrObj);
  localStorage.setItem("allData", JSON.stringify(allItems));

  showData(arrObj);
  showAmount();

  amount.value = "";
  description.value = "";
});

// Render a transaction
function showData(item) {
  let li = document.createElement("li");
  li.innerHTML = `${item.text}: ${item.amount} <button class="delete-btn">Delete</button>`;
  li.style.color = item.amount > 0 ? "green" : "red";

  let delBtn = li.querySelector(".delete-btn");

  // Append to correct list
  if (item.amount > 0) {
    incomeList.appendChild(li);
  } else {
    expanseList.appendChild(li);
  }

  // Delete logic
  delBtn.addEventListener("click", () => {
    allItems = allItems.filter(t => t.id !== item.id);
    localStorage.setItem("allData", JSON.stringify(allItems));
    li.remove();
    showAmount();
  });
}

// Calculate totals
function showAmount() {
  let incomeSum = 0;
  let expenseSum = 0;

  allItems.forEach(item => {
    if (item.amount > 0) incomeSum += item.amount;
    else expenseSum += item.amount;
  });

  totalExpan.innerText = expenseSum;
  totalBalance.innerText = incomeSum + expenseSum;
}
