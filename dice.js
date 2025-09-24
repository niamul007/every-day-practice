let rollDice = document.querySelector(".rollDice");
let diceResult = document.querySelector(".diceResult");

// function roller() {
//   let random = Math.floor(Math.random() * 6) + 1;
//   if (random == 1) {
//     diceResult.innerText = "\u2680";
//   } else if (random == 2) {
//     diceResult.innerText = "\u2681";
//   } else if (random == 3) {
//     diceResult.innerText = "\u2682";
//   } else if (random == 4) {
//     diceResult.innerText = "\u2683";
//   } else if (random == 5) {
//     diceResult.innerText = "\u2684";
//   } else if (random == 6) {
//     diceResult.innerText = "\u2685";
//   } else {
//     console.log("Try again");
//   }
// }
function roller() {
  let diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
  let random = Math.floor(Math.random() * 6);
  diceResult.innerText = diceFaces[random];
}

rollDice.addEventListener("click", () => roller());
