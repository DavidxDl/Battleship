import style from './style/style.css'
import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";
import { createGameboardDom, createBoardSquare } from "./CreateboardDom.js";

const body = document.querySelector('body');
const domBoard = document.getElementById('board');
let index = 0;
while (index < 10) {
    domBoard.append(createBoardSquare(`${index}`))
}






