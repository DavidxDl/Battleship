export class Ship {
    private _length:number = 0;
    private _hits:number = 0;

    constructor(length:number) {
        this._length = length;
    }
    
    hit():void {
        this._hits++;
    }

    isSunk():boolean {
        return this._hits >= this._length; 
    }
}