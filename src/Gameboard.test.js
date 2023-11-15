import { Gameboard } from "./Gameboard";
import { Ship } from "./Ship";

test('build the board', () => {
    const gameboard = new Gameboard(5);
    gameboard.placeShip([0,0], 3)
    expect(gameboard.boardGraph.get(`${0},${0}`)).toBe(Ship);
    expect(gameboard.boardGraph.get(`${1},${0}`)).toBe(Ship);
    expect(gameboard.boardGraph.get(`${2},${0}`)).toBe(Ship);
    
})