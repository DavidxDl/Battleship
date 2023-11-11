import {describe, expect, test} from '@jest/globals';
import { Gameboard } from '../src/Gameboard';

const gameboard:Gameboard = new Gameboard(4);
test('Gameboard building', () => {
    console.log(gameboard);
    gameboard.placeShip([3,3], 3);
})
