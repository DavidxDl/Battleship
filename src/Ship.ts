export class Ship {
    private length: number
    private hits: number = 0
    constructor(length: number) {
        this.length = length
    }

    hit() {
        this.hits++
    }

    isSunk() {
        return this.hits >= this.length
    }
}

const ship: Ship = new Ship(5)


