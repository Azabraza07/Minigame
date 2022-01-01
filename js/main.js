const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const colors = getRandomcolor();
  element.style.backgroundColor = colors;
  element.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px  #000`
}

function getRandomcolor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
