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
                this.boardGraph.set(`${x},${y}`, null);
            }
        }
    }

    placeShip([x, y], length) {
        const ship = new Ship(length);
        if(this.boardGraph.get(`${x},${y}`) === null) {
            this.boardGraph.set(`${x},${y}`, ship);
            let index = 0;
            let offset = 1;
            const initialPostition = [x, y];
            while (index < length) {
                let targetNode = `${x},${y + offset}`;
                if (this.boardGraph.get(targetNode) === null) {
                    this.boardGraph.set(targetNode, ship);
                    index++;
                    offset = offset > 0 ? offset++ : offset--;
                } else {
                    offset = -1;
                    if(this.boardGraph.get(`${x}, ${y + offset}`) !== null) {
                        throw new Error('no enough Space');
                    }
                }
            }
        } else throw new Error('Wrong Coordinates');
    }
}