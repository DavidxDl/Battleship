import style from "./style/style.css";
import { createGameboardDom } from "./CreateboardDom.js";
import ComputerAi from "./ComputerAi.js";
import {
  changeTurnsIndicator,
  displayGameOver,
  displayPlayerShips,
  updateScore,
} from "./domModule.js";

const restartBtn = document.querySelector(".restartBtn");
const player = { isPlayersTurn: true };
let playerBoard = createGameboardDom(7, "playerBoard");
const computer = new ComputerAi(playerBoard.boardSize);
let cpuBoard = createGameboardDom(playerBoard.boardSize, "cpuBoard");
let domCpuBoard = document.getElementById("cpuBoard");
let gameOver = false;
playerBoard.placeAllShips(3);
displayPlayerShips(playerBoard, "playerBoard");
cpuBoard.placeAllShips(3);

updateScore("player", playerBoard.shipsLeft);
updateScore("Cpu", cpuBoard.shipsLeft);

domCpuBoard.addEventListener("click", attack);

// the AI will attack with this interval every second will check if is his turn or not
setInterval(() => {
  if (!player.isPlayersTurn && !gameOver) {
    const randomCords = computer.getRandomCords();
    if (playerBoard.recieveAttack(randomCords) === true) {
      const hitLocation = document.getElementById(
        `playerBoardx${randomCords[0]}y${randomCords[1]}`
      );
      hitLocation.dataset.state = "hit";
      hitLocation.dataset.ship = null;

      player.isPlayersTurn = true;
      changeTurnsIndicator();
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
      changeTurnsIndicator();
    }
  }
}, 1000);

restartBtn.addEventListener("click", restartGame);

function restartGame() {
  gameOver = false;
  document.querySelector(".boards").innerHTML = " ";
  document.querySelector(".gameOver").style.display = "none";
  playerBoard = createGameboardDom(playerBoard.boardSize, "playerBoard");
  cpuBoard = createGameboardDom(cpuBoard.boardSize, "cpuBoard");
  playerBoard.placeAllShips(3);
  displayPlayerShips(playerBoard, "playerBoard");
  cpuBoard.placeAllShips(3);
  updateScore("player", playerBoard.shipsLeft);
  updateScore("cpu", cpuBoard.shipsLeft);
  domCpuBoard = document.getElementById("cpuBoard");
  domCpuBoard.addEventListener("click", attack);
}

function attack(e) {
  if (player.isPlayersTurn && !gameOver) {
    const cordX = e.target.dataset.x;
    const cordY = e.target.dataset.y;
    if (
      cpuBoard.missedShots.has(`${cordX},${cordY}`) ||
      cpuBoard.hitShots.has(`${cordX},${cordY}`)
    ) {
      return;
    }

    const currentAttack = cpuBoard.recieveAttack([cordX, cordY]);
    if (currentAttack === true) {
      // hit the shot
      e.target.dataset.state = "hit";
      player.isPlayersTurn = false;
      changeTurnsIndicator();
      updateScore("Cpu", cpuBoard.shipsLeft);
      if (cpuBoard.shipsLeft === 0) {
        gameOver = true;
        displayGameOver("Player");
      }
    } else if (currentAttack === false) {
      // missed the shot
      e.target.dataset.state = "missed";
      player.isPlayersTurn = false;
      changeTurnsIndicator();
    }
  }
}
