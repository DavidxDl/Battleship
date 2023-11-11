"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
var Ship = /** @class */ (function () {
    function Ship(length) {
        this.hits = 0;
        this.length = length;
    }
    Ship.prototype.hit = function () {
        this.hits++;
    };
    Ship.prototype.isSunk = function () {
        return this.hits >= this.length;
    };
    return Ship;
}());
exports.Ship = Ship;
var ship = new Ship(5);
