import { Gameboard } from "../Gameboard";

test('Is placing ships correctly', () => {
    const gameboard: Gameboard = new Gameboard(5);
    expect(gameboard.placeShip([3,3]))
})