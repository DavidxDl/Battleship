import { Gameboard } from "./Gameboard.js";

export function createGameboardDom(boardSize) {
    const gameboard = new Gameboard(boardSize);
    const domBoard = document.getElementById('board');
    for (let x = 0; x < gameboard.boardSize; x++) {
        for (let y = 0; y < gameboard.boardSize; y++) {
            domBoard.append(createBoardSquare(`x${x}y${y}`));
        }
    }
    return gameboard

}

export function createBoardSquare(id) {
    const square = document.createElement('div');
    square.classList.add('boardSquare');
    square.id = id;

    return square;
}