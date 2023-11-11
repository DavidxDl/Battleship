export class AI {
    private missedShots: Set<[cordX: number, cordY: number]> = new Set()

    constructor() { }

    getRandomCords() {
        let cordX: number = Math.floor(Math.random() * 10)
        let cordY: number = Math.floor(Math.random() * 10)

        while (this.missedShots.has([cordX, cordY])) {
            let cordX: number = Math.floor(Math.random() * 10)
            let cordY: number = Math.floor(Math.random() * 10)
        }
        this.missedShots.add([cordX, cordY]);
        return [cordX, cordY]
    }
}
