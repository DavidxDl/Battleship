export class Ship {
    constructor(length) {
        this._length = length;
        this._hits = 0;
    }

    hit() {
        this._hits++;
    }

    isSunk() {
        return this._hits >= this._length;
    }

    get hits() { return this._hits }
}