"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
var AI = /** @class */ (function () {
    function AI() {
        this.missedShots = new Set();
    }
    AI.prototype.getRandomCords = function () {
        var cordX = Math.floor(Math.random() * 10);
        var cordY = Math.floor(Math.random() * 10);
        while (this.missedShots.has([cordX, cordY])) {
            var cordX_1 = Math.floor(Math.random() * 10);
            var cordY_1 = Math.floor(Math.random() * 10);
        }
        return [cordX, cordY];
    };
    return AI;
}());
exports.AI = AI;
var ai = new AI();
console.log(ai.getRandomCords());
