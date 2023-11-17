import { Ship } from "./Ship.js";

export class Gameboard {
    constructor(boardSize) {
        this.missedShots = new Set();
        this.hitShots = new Set()
        this.boardSize = boardSize;
        this.shipsLeft = 0;
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

    isValidPosition([x, y]) {
        return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;
    }

    placeShip([x, y], length) {
        const ship = new Ship(length);
        this.shipsLeft++;

        if(this.isValidPosition([x, y]) && this.boardGraph.get(`${x},${y}`) === null) {
            let index = 0;
            let currentX = x;
            let currentY = y;
            let horizontalPlacement = true;

            while (index < length) {
                const position = `${currentX},${currentY}`;

                if (this.isValidPosition([currentX, currentY]) && this.boardGraph.get(position) === null) {
                    this.boardGraph.set(position, ship);
                    index++;
                    if (horizontalPlacement) {
                        if (currentX + 1 < this.boardSize) {
                            currentX++;
                        } else {
                            horizontalPlacement = true;
                            currentY++;
                        }
                    } else {
                        if (currentY + 1 < this.boardSize) {
                            currentY++;
                        } else {
                            throw new Error('no enought Space');
                        }
                    }
                } else {
                    throw new Error('not enough space or invalid position');
                    this.shipsLeft--;
                }
            }

        } else { 
            throw new Error('invalid coordinate');
            this.shipsLeft--;
        }
    }

    recieveAttack([x, y]) {
        if (this.isValidPosition([x, y]) && this.boardGraph.get(`${x},${y}`) !== null) {
            if (!this.hitShots.has(`${x},${y}`)){
                const ship = this.boardGraph.get(`${x},${y}`);
                ship.hit();
                if(ship.isSunk()) this.shipsLeft--;
                this.hitShots.add(`${x},${y}`);
                return true;
            }
        } else if (this.isValidPosition([x,y]) && this.boardGraph.get(`${x},${y}`) === null) {
            console.log('You Missed The Shot!')
            this.missedShots.add(`${x},${y}`);
            return false;
        }
    }

    
}