"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AI = void 0;
class AI {
    constructor() {
        this.missedShots = new Set();
    }
    getRandomCords() {
        let cordX = Math.floor(Math.random() * 10);
        let cordY = Math.floor(Math.random() * 10);
        while (this.missedShots.has([cordX, cordY])) {
            let cordX = Math.floor(Math.random() * 10);
            let cordY = Math.floor(Math.random() * 10);
        }
        this.missedShots.add([cordX, cordY]);
        return [cordX, cordY];
    }
}
exports.AI = AI;
//# sourceMappingURL=AI.js.map