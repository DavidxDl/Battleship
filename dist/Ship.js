"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    constructor(length) {
        this.hits = 0;
        this.length = length;
    }
    hit() {
        this.hits++;
    }
    isSunk() {
        return this.hits >= this.length;
    }
}
exports.Ship = Ship;
//# sourceMappingURL=Ship.js.map