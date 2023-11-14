import { Gameboard } from "./Gameboard";

test('build the board', () => {
    const gameboard = new Gameboard(4);
    gameboard.placeShip([1,1], 3)
    console.log(gameboard.boardGraph)
})