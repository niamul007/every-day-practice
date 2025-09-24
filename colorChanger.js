let body = document.querySelector("body");
let btn = document.querySelector(".color");
let btn2 = document.querySelector(".copyColor");
let span = document.querySelector(".colorText");

function getRandomHexColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return (
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0")
  );
}
btn.addEventListener("click", () => {
  body.style.background = getRandomHexColor();
  span.innerText = getRandomHexColor();
});

btn2.addEventListener("click", () => {
  navigator.clipboard
    .writeText(span.innerText)
    .then(() => alert(`Copied: ${colorText.innerText}`))
    .catch((err) => console.log("Failed to copy!", err));
});
