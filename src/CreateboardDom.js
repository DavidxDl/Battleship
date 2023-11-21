import { Gameboard } from "./Gameboard.js";

export function createGameboardDom(boardSize, id) {
  const gameboard = new Gameboard(boardSize);
  const wrapper = document.createElement("div");
  wrapper.id = id;
  wrapper.style = `display:grid; grid-template-columns: repeat(${boardSize}, 1fr)`;
  const domBoard = document.getElementById("board");
  for (let x = 0; x < gameboard.boardSize; x++) {
    for (let y = 0; y < gameboard.boardSize; y++) {
      wrapper.append(createBoardSquare(`${id}x${x}y${y}`, [x, y]));
    }
  }
  document.getElementById("boards").append(wrapper);
  return gameboard;
}

export function createBoardSquare(id, [datasetX, datasetY]) {
  const square = document.createElement("div");
  square.classList.add("boardSquare");
  square.id = id;
  square.dataset.x = datasetX;
  square.dataset.y = datasetY;

  return square;
}
