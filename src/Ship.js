"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
var Ship = /** @class */ (function () {
    function Ship(length) {
        this._length = 0;
        this._hits = 0;
        this._length = length;
    }
    Ship.prototype.hit = function () {
        this._hits++;
    };
    Ship.prototype.isSunk = function () {
        return this._hits >= this._length;
    };
    return Ship;
}());
exports.Ship = Ship;
