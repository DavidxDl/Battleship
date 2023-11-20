import style from "./style/style.css";
import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";
import { createGameboardDom, createBoardSquare } from "./CreateboardDom.js";
import ComputerAi from "./ComputerAi.js";

const h1 = document.querySelector("h1");
const domPlayerShipsLeft = document.querySelector("#playerShipsLeft");
const domCpuShipsLeft = document.querySelector("#cpuShipsLeft");

const player = { isPlayersTurn: true };
const playerBoard = createGameboardDom(7, "playerBoard");
const computer = new ComputerAi(playerBoard.boardSize);
const cpuBoard = createGameboardDom(playerBoard.boardSize, "cpuBoard");
playerBoard.placeShip([0, 0], 3);
playerBoard.placeShip([3, 3], 5);
cpuBoard.placeShip(computer.getRandomCords(), 3);
cpuBoard.placeShip(computer.getRandomCords(), 2);
cpuBoard.placeShip(computer.getRandomCords(), 1);

const domCpuBoard = document.getElementById("cpuBoard");
const domPlayerBoard = document.getElementById("playerBoard");
let gameOver = false;

domPlayerShipsLeft.innerText = "Player Ships left: " + playerBoard.shipsLeft;
domCpuShipsLeft.innerText = "Cpu Ships left: " + cpuBoard.shipsLeft;

domCpuBoard.addEventListener("click", (e) => {
  if (player.isPlayersTurn && !gameOver) {
    const cordX = e.target.dataset.x;
    const cordY = e.target.dataset.y;

    if (cpuBoard.recieveAttack([cordX, cordY]) === true) {
      // hit the shot
      e.target.dataset.state = "hit";
      player.isPlayersTurn = false;
      domCpuShipsLeft.innerText = "Cpu Ships left: " + cpuBoard.shipsLeft;
      if (cpuBoard.shipsLeft === 0) {
        h1.innerText = "Game Over! Player Wins!";
        gameOver = true;
      }
    } else if (cpuBoard.recieveAttack([cordX, cordY]) === false) {
      // missed the shot
      e.target.dataset.state = "missed";
      player.isPlayersTurn = false;
    }
  }
});

setInterval(() => {
  if (!player.isPlayersTurn && !gameOver) {
    const randomCords = computer.getRandomCords();
    if (playerBoard.recieveAttack(randomCords) === true) {
      document.getElementById(
        `playerBoardx${randomCords[0]}y${randomCords[1]}`
      ).dataset.state = "hit";

      player.isPlayersTurn = true;
      domPlayerShipsLeft.innerText =
        "Player Ships left: " + playerBoard.shipsLeft;
      if (playerBoard.shipsLeft === 0) {
        h1.innerText = "Game Over! Cpu Wins!";
        gameOver = true;
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
