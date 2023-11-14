import { Gameboard } from "../Gameboard";
import { Ship } from "../Ship";

test('Is placing ships correctly', () => {
    const gameboard: Gameboard = new Gameboard(5);
    gameboard.placeShip([3,3]);
    console.log(gameboard)
    expect(gameboard.boardGraph.get([3,3])).toBe(Ship)
})