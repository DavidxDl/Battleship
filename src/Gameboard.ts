import { Ship } from "./Ship";
import { Coordinates } from "./types";



export class Gameboard {
    private _boardSize:number = 5;
    public boardGraph : Map<Coordinates, null | Ship> = new Map();
    constructor(size:number) {
        this._boardSize = size;
        this.buildBoard();

    }
    private buildBoard() {
        for (let x = 0; x < this._boardSize; x++) {
            for (let y = 0; y < this._boardSize; y++) {
                this.boardGraph.set([x, y], null);
            }
        }
    }

    placeShip(cords:Coordinates) {
        const ship: Ship = new Ship(3)
        if (this.boardGraph.get(cords) == null) {
            this.boardGraph.set(cords, ship);
        }
    }

    get size() { return this._boardSize }

}