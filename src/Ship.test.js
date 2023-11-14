import { Ship } from "./Ship";

test('Ship can get hit', () => {
    const ship = new Ship(4);
    ship.hit();
    expect(ship.hits).toBe(1)
})
test('Ship return true when is Sunk', () => {
    const ship = new Ship(4);
    for (let index = 0; index < 4; index++) {
        ship.hit();
    }
    expect(ship.isSunk()).toBeTruthy()
})
test('ship isSunk doesnt always return true', () => {
    const ship = new Ship(4);
    for (let index = 0; index < 3; index++) {
        ship.hit();
    }
    expect(ship.isSunk()).toBeFalsy()
})