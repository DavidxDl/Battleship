import style from './style/style.css'
import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";
import { createGameboardDom, createBoardSquare } from "./CreateboardDom.js";
import ComputerAi from './ComputerAi.js';

const body = document.querySelector('body');
const domBoard = document.getElementById('board');
const nodes = document.querySelectorAll('.boardSquare');
const h1 = document.querySelector('h1');
const h3 = document.querySelector('#shipsLeft');

const player = { isPlayersTurn: true };
const playerBoard = createGameboardDom(7);
playerBoard.placeShip([0,0], 3);
playerBoard.placeShip([3,3], 5);

const computer = new ComputerAi(playerBoard.boardSize);



h3.innerText = 'Ships left: ' + playerBoard.shipsLeft

domBoard.addEventListener('click', (e) => {
    if (player.isPlayersTurn) {
        const cordX = e.target.id[1];
        const cordY = e.target.id[3];

        if(playerBoard.recieveAttack([cordX, cordY]) ===  true) {          // hit the shot
            e.target.id = 'hit';
            player.isPlayersTurn = false;
            h3.innerText = 'Ships left: ' + playerBoard.shipsLeft;
            if (playerBoard.shipsLeft === 0) {
                h1.innerText = 'Game Over!';
            }
        } else if (playerBoard.recieveAttack([cordX, cordY]) ===  false) { // missed the shot
            e.target.id = 'missed';
            player.isPlayersTurn = false;
        }
    }
})


setInterval(() => {
    if(!player.isPlayersTurn) {
        const randomCords = computer.getRandomCords();
        if (playerBoard.recieveAttack(randomCords) === true) {
            document.getElementById(`x${randomCords[0]}y${randomCords[1]}`).id = 'hit';
            player.isPlayersTurn = true;
            h3.innerText = 'Ships left: ' + playerBoard.shipsLeft;
            if (playerBoard.shipsLeft === 0) {
                h1.innerText = 'Game Over!';
            } 
        } else if (playerBoard.recieveAttack(randomCords) ===  false) { // missed the shot
            document.getElementById(`x${randomCords[0]}y${randomCords[1]}`).id = 'missed';
            player.isPlayersTurn = true;
        }
    }
}, 1000);





