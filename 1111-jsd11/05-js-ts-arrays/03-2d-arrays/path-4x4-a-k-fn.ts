// // @ts-nocheck
// const board = [
// 	["A", "B", "C", "D"],
// 	["E", "X", "G", "H"],
// 	["I", "X", "K", "L"],
// 	["M", "N", "O", "P"],
// ];

// let row = 0;
// let col = 0; // Start at A (0,0) -> [row][col]
// const moves = [];

// // Function to move right
// function moveRight() {
// 	col++;
// 	moves.push(board[row][col]);
// }

// // Function to move down
// function moveDown() {
// 	row++;
// 	moves.push(board[row][col]);
// }

// // Start at A
// moves.push(board[row][col]); // A

// // Move right to B
// moveRight();

// // Move right to C
// moveRight();

// // Move down to G
// moveDown();

// // Move down to K
// moveDown();

// // Log path so far before final output
// console.log("Path:", moves.join(" → "));
// console.log("Total Moves (Start from 'A'):", moves.length - 1);
