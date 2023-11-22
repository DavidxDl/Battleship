export function displayGameOver(winner) {
  const gameOverScreen = document.querySelector(".gameOver");
  const winnerText = document.getElementById("winner");
  winnerText.innerText = `${winner} Wins!`;
  gameOverScreen.style.display = "flex";
}

export function updateScore(player, score) {
  if (player === "player") {
    const playerScore = document.getElementById("playerShipsLeft");
    playerScore.innerText = `Player ships left: ${score}`;
  } else {
    const cpuScore = document.getElementById("cpuShipsLeft");
    cpuScore.innerText = `Cpu ships left: ${score}`;
  }
}

export function changeTurnsIndicator() {
  const turnIndicator = document.getElementById("turnIndicator");
  turnIndicator.innerText = turnIndicator.innerText === "<" ? ">" : "<";
}
