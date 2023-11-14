"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(length) {
        this._length = 0;
        this._hits = 0;
        this._length = length;
    }
    hit() {
        this._hits++;
    }
    isSunk() {
        return this._hits >= this._length;
    }
}
exports.Ship = Ship;
//# sourceMappingURL=Ship.js.map