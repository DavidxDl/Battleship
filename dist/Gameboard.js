"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gameboard = void 0;
var Ship_1 = require("./Ship");
var Gameboard = /** @class */ (function () {
    function Gameboard(size) {
        this._boardSize = 5;
        this.boardGraph = new Map();
        this._boardSize = size;
        this.buildBoard();
    }
    Gameboard.prototype.buildBoard = function () {
        for (var x = 0; x < this._boardSize; x++) {
            for (var y = 0; y < this._boardSize; y++) {
                this.boardGraph.set([x, y], null);
            }
        }
    };
    Gameboard.prototype.placeShip = function (cords) {
        var ship = new Ship_1.Ship(3);
        if (this.boardGraph.get(cords) === null) {
            this.boardGraph.set(cords, ship);
        }
    };
    Object.defineProperty(Gameboard.prototype, "size", {
        get: function () { return this._boardSize; },
        enumerable: false,
        configurable: true
    });
    return Gameboard;
}());
exports.Gameboard = Gameboard;
