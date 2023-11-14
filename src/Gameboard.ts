import { Ship } from "./Ship";
import { Coordinates } from "./types";



export class Gameboard {
    private _boardSize:number = 5;
    private _boardGraph : Map<Coordinates, null | Ship> = new Map();
    constructor(size:number) {
        this._boardSize = size;

    }
    private buildBoard() {
        for (let x = 0; x < this._boardSize; x++) {
            for (let y = 0; y < this._boardSize; y++) {
                this._boardGraph.set([x, y], null);
            }
        }
    }

    placeShip(cords:Coordinates) {
        
    }

    get size() { return this._boardSize }

}