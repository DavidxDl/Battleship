import { Gameboard } from "./Gameboard.js";

export function createGameboardDom(boardSize, id) {
  const gameboard = new Gameboard(boardSize);
  const wrapper = document.createElement("div");
  wrapper.id = id;
  const domBoard = document.getElementById("board");
  for (let x = 0; x < gameboard.boardSize; x++) {
    for (let y = 0; y < gameboard.boardSize; y++) {
      wrapper.append(createBoardSquare(`${id}x${x}y${y}`));
    }
  }
  document.getElementById("boards").append(wrapper);
  return gameboard;
}

export function createBoardSquare(id) {
  const square = document.createElement("div");
  square.classList.add("boardSquare");
  square.id = id;

  return square;
}
