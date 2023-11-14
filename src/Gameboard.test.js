import { Gameboard } from "./Gameboard";

test('build the board', () => {
    const gameboard = new Gameboard(5);
    gameboard.placeShip([3,2], 2)
    console.log(gameboard.boardGraph)
})