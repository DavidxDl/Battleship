import { Gameboard } from "./Gameboard.js";

export function createGameboardDom(boardSize) {
    const gameboard = new Gameboard(boardSize);
    const domBoard = document.getElementById('board');

    for (let i = 0; i < gameboard.boardSize; i++) {
        for(let j = 0; j < this.boardSize; j++) {
            const square = createBoardSquare(`${i},${j}`)
            domBoard.append(square);
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