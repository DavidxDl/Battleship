import { Ship } from "./Ship";

export class Gameboard {
    constructor(boardSize) {
        this.boardSize = boardSize;
        this.boardGraph = new Map();
        this.buildBoard();
    }

    buildBoard() {
        for (let x = 0; x < this.boardSize; x++) {
            for (let y = 0; y < this.boardSize; y++) {
                this.boardGraph.set([x, y], null);
            }
        }
    }

    placeShip([x, y], length) {
        this.boardGraph.set([x, y], new Ship(length));
    }
}