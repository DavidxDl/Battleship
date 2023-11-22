import { Ship } from "./Ship.js";

export class Gameboard {
  constructor(boardSize) {
    this.missedShots = new Set();
    this.hitShots = new Set();
    this.boardSize = boardSize;
    this.shipsLeft = 0;
    this.boardGraph = new Map();
    this.buildBoard();
  }

  buildBoard() {
    for (let x = 0; x < this.boardSize; x++) {
      for (let y = 0; y < this.boardSize; y++) {
        this.boardGraph.set(`${x},${y}`, null);
      }
    }
  }

  isValidPosition([x, y]) {
    return x >= 0 && x < this.boardSize && y >= 0 && y < this.boardSize;
  }

  placeShip([x, y], length, direction = "vertical") {
    const ship = new Ship(length);
    if (
      direction === "vertical" &&
      this.isValidPosition([x, y]) &&
      this.isValidPosition([x + length, y]) &&
      this.canPlaceShip([x, y], length, direction)
    ) {
      let index = 0;
      let currentX = x;
      while (index < length) {
        let position = `${currentX},${y}`;
        this.boardGraph.set(position, ship);
        index++;
        currentX++;
      }
      this.shipsLeft++;
      return true;
    } else if (
      direction === "horizontal" &&
      this.isValidPosition([x, y]) &&
      this.isValidPosition([x, y + length]) &&
      this.canPlaceShip([x, y], length, direction)
    ) {
      let index = 0;
      let currentY = y;
      while (index < length) {
        let position = `${x},${currentY}`;
        this.boardGraph.set(position, ship);
        index++;
        currentY++;
      }
      this.shipsLeft++;
      return true;
    }
    return false;
  }

  placeAllShips(amount) {
    for (let i = 1; i < amount + 1; i++) {
      let isPlace = false;
      while (!isPlace) {
        const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
        if (this.placeShip(getRandomCords(this.boardSize), i, direction)) {
          isPlace = true;
        }
      }
    }
  }

  canPlaceShip([x, y], length, direction) {
    const positionsToVisit = [];
    if (direction === "vertical")
      for (let i = x; i < x + length; i++) {
        positionsToVisit.push(`${i},${y}`);
      }
    else if (direction === "horizontal") {
      for (let i = y; i < y + length; i++) {
        positionsToVisit.push(`${x},${i}`);
      }
    }
    return positionsToVisit.every(
      (position) => this.boardGraph.get(position) === null
    );
  }

  recieveAttack([x, y]) {
    if (
      this.isValidPosition([x, y]) &&
      this.boardGraph.get(`${x},${y}`) !== null
    ) {
      if (!this.hitShots.has(`${x},${y}`)) {
        const ship = this.boardGraph.get(`${x},${y}`);
        ship.hit();
        if (ship.isSunk()) this.shipsLeft--;
        this.hitShots.add(`${x},${y}`);
        return true;
      }
    } else if (
      this.isValidPosition([x, y]) &&
      this.boardGraph.get(`${x},${y}`) === null
    ) {
      console.log("You Missed The Shot!");
      this.missedShots.add(`${x},${y}`);
      return false;
    }
  }

  clearBoard() {
    this.shipsLeft = 0;
    this.boardGraph = this.buildBoard();
  }
}

function getRandomCords(boardSize) {
  return [
    Math.floor(Math.random() * boardSize),
    Math.floor(Math.random() * boardSize),
  ];
}
