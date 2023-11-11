"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gameboard = void 0;
var Gameboard = /** @class */ (function () {
    function Gameboard(bordSize) {
        this._boardGraph = new Map();
        this._boardSize = bordSize;
        this.buildBoard();
    }
    Gameboard.prototype.recieveAttack = function (_a) {
        var cordX = _a[0], cordY = _a[1];
    };
    Gameboard.prototype.buildBoard = function () {
        for (var x = 0; x < this._boardSize; x++) {
            for (var y = 0; y < this._boardSize; y++) {
                this._boardGraph.set([x, y], null);
            }
        }
        console.log(this._boardGraph);
    };
    Object.defineProperty(Gameboard.prototype, "size", {
        get: function () { return this._boardSize; },
        enumerable: false,
        configurable: true
    });
    return Gameboard;
}());
exports.Gameboard = Gameboard;
