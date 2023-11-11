import { Ship } from "./Ship";

export class Gameboard {
    private _boardSize;
    private _boardGraph = new Map();
    constructor(bordSize: number) { 
        this._boardSize = bordSize;
        this.buildBoard();
    }

    recieveAttack([cordX, cordY]) { }

    private buildBoard() {
        for (let x = 0; x < this._boardSize; x++) {
            for (let y = 0; y < this._boardSize; y++) {
                this._boardGraph.set([x, y], null);
            }
        }
        console.log(this._boardGraph);
    }

    placeShip([cordX, cordY], length:number) {
        if (!this._boardGraph.get([cordX, cordY])) {
             this._boardGraph.set([cordX, cordY], new Ship(length));
        } else throw new Error('theres a ship there already!');

        console.log(this._boardGraph);
    }

    get size() {return this._boardSize;}
}