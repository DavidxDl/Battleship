import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

test('build the board', () => {
    const gameboard = new Gameboard(5);
    gameboard.placeShip([0,0], 3)
    gameboard.recieveAttack([0, 0]);
    console.log(typeof gameboard.boardGraph.get(`${0},${0}`))
    expect(gameboard.boardGraph.get(`${0},${0}`).hits).toBe(1);
    
})