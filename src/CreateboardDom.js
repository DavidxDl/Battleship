import { Gameboard } from "./Gameboard";

export function createGameboardDom(boardSize) {
    const gameboard = new Gameboard(boardSize);
    const domBoard = document.getElementById('board');

    for (let i = 0; i < gameboard.boardSize; i++) {
        for(let j = 0; j < this.boardSize; j++) {
            domBoard.append(createBoardSquare(`${i},${j}`));
        }
    }

}

function createBoardSquare(id) {
    const square = document.createElement('div');
    square.classList.add('boardSquare');
    square.id = id;

    return square;
}