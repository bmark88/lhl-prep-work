let generateBoard = (whiteQueen, blackQueen) => {
  const WQ = whiteQueen;
  const BQ = blackQueen;
  let board = [];

  for (let i = 0; i < 8; i++) {
    board.push([]);

    for (let j = 0; j < 8; j++) {
      board[i].push(0);
    }
  }

board[WQ[0]][WQ[1]] = 1;
board[BQ[0]][BQ[1]] = 1;

return board;
}

let queenThreat = (generatedBoard) => {
  const board = generatedBoard;
  const WQ = whiteQueen;
  const BQ = blackQueen;
  const a = board.length - WQ[0];
  const b = board.length - WQ[1];
  const c = board.length - BQ[0];
  const d = board.length - BQ[1];
  let upDownLeftRightThreat = [];
  let upDownLeftRightCounter = 0;
  let threat = false;

  // Detect horizontal or vertical threats
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        upDownLeftRightThreat.push(board[i]);
        upDownLeftRightCounter += upDownLeftRightThreat[0][j];
      }
    }
  }
  
  if (upDownLeftRightCounter === 2) {
    threat = true;
  }
  
  // Detect diagonal threats
  if (a === b && c == d) {
    threat = true;
  } else if (a === d && b == c) {
    threat = true;
  }
  return threat;
}


// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];

 let whiteQueen = [0, 0];
 let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));