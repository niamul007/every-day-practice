let hoursEl = document.querySelector("#hours");
let minutesEl = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");
let ampmEl = document.querySelector("#ampm");
let dateEl = document.querySelector("#fullDate"); // single element for date

function myClcok() {
  const date = new Date();

  // 12-hour format
  let h = date.getHours() % 12 || 12;
  let m = date.getMinutes();
  let s = date.getSeconds();
  let ampmStr = date.getHours() >= 12 ? "PM" : "AM";

  // Add leading zeros
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Update clock
  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s + " " + ampmStr;

  // Update date
  const day = date.getDate();
  const month = date.getMonth() + 1; // months 0-11
  const year = date.getFullYear();
  dateEl.innerText = `${day < 10 ? "0" + day : day}/ ${
    month < 10 ? "0" + month : month
  }/ ${year}`;
}

myClcok();
setInterval(myClcok,1000);