export default class ComputerAi {
    constructor(gameboardSize) {
        this.gameboardSize = gameboardSize;
        this.usedCords = new Set();
    }

    getRandomCords() {
        let cordX; 
        let cordY;
        do {
             cordX = getRandomInt(this.gameboardSize);
             cordY = getRandomInt(this.gameboardSize);
        } while (!cordX > 0 && !cordY <= this.gameboardSize && 
                !this.usedCords.has(`${cordX},${cordY}`))
        
        this.usedCords.add(`${cordX},${cordY}`);
        return [cordX, cordY];
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}