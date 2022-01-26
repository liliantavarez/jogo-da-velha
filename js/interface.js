document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let position = square.id;

  if (handleMove(position)) {
    setTimeout(() => {
      let playerName1 = document.getElementById("player01").value;
      let playerName2 = document.getElementById("player02").value;
      let vencedor = document.getElementById("vencedor");
      let resultado = document.getElementsByClassName("resultado")[0];
      resultado.style.display = "flex";

      if (playerTime == 0) {
        vencedor.innerHTML = `${playerName1} Venceu!`;
      } else if (board[8] != "") {
        console.log("empate");
        vencedor.innerHTML = `EMPATE!`;
      } else {
        vencedor.innerHTML = `${playerName2} venceu!`;
      }
    }, 10);
  }

  updateSquare();
}

function updateSquare() {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    let position = square.id;
    let symbol = board[position];

    if (symbol != "") {
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });
}

function reset() {
  location.reload()
}
