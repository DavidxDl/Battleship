import style from "./style/style.css";
import { createGameboardDom } from "./CreateboardDom.js";
import ComputerAi from "./ComputerAi.js";
import { displayGameOver, updateScore } from "./domModule.js";

const player = { isPlayersTurn: true };
const playerBoard = createGameboardDom(7, "playerBoard");
const computer = new ComputerAi(playerBoard.boardSize);
const cpuBoard = createGameboardDom(playerBoard.boardSize, "cpuBoard");
const domCpuBoard = document.getElementById("cpuBoard");
playerBoard.placeAllShips(3);
cpuBoard.placeAllShips(3);
let gameOver = false;

updateScore("player", playerBoard.shipsLeft);
updateScore("Cpu", cpuBoard.shipsLeft);
domCpuBoard.addEventListener("click", (e) => {
  if (player.isPlayersTurn && !gameOver) {
    const cordX = e.target.dataset.x;
    const cordY = e.target.dataset.y;

    if (cpuBoard.recieveAttack([cordX, cordY]) === true) {
      // hit the shot
      e.target.dataset.state = "hit";
      player.isPlayersTurn = false;
      updateScore("Cpu", cpuBoard.shipsLeft);
      if (cpuBoard.shipsLeft === 0) {
        gameOver = true;
        displayGameOver("Player");
      }
    } else if (cpuBoard.recieveAttack([cordX, cordY]) === false) {
      // missed the shot
      e.target.dataset.state = "missed";
      player.isPlayersTurn = false;
    }
  }
});

// the AI will attack with this interval every second will check if is his turn or not
setInterval(() => {
  if (!player.isPlayersTurn && !gameOver) {
    const randomCords = computer.getRandomCords();
    if (playerBoard.recieveAttack(randomCords) === true) {
      document.getElementById(
        `playerBoardx${randomCords[0]}y${randomCords[1]}`
      ).dataset.state = "hit";

      player.isPlayersTurn = true;
      updateScore("player", playerBoard.shipsLeft);
      if (playerBoard.shipsLeft === 0) {
        gameOver = true;
        displayGameOver("Cpu");
      }
    } else if (playerBoard.recieveAttack(randomCords) === false) {
      // missed the shot
      document.getElementById(
        `playerBoardx${randomCords[0]}y${randomCords[1]}`
      ).dataset.state = "missed";
      player.isPlayersTurn = true;
    }
  }
}, 1000);
