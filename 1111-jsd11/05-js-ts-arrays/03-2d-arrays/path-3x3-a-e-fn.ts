// // @ts-nocheck
// const board = [
// 	["A", "B", "C"],
// 	["D", "E", "F"],
// 	["G", "H", "I"],
// ];

// let row = 0; // Starting row index
// let col = 0; // Starting column index

// const moves = [];
// moves.push(board[row][col]); // Start at A

// // Define movement functions
// function moveRight() {
// 	col++; // Move right (increase column index)
// 	moves.push(board[row][col]);
// }

// function moveLeft() {
// 	col--; // Move left (decrease column index)
// 	moves.push(board[row][col]);
// }

// function moveUp() {
// 	row--; // Move up (decrease row index)
// 	moves.push(board[row][col]);
// }

// function moveDown() {
// 	row++; // Move down (increase row index)
// 	moves.push(board[row][col]);
// }

// // Call the movement functions
// moveRight(); // Move from A to B
// moveRight(); // Move from B to C
// moveDown(); // Move from C to F
// moveLeft(); // Move from F to E

// console.log("Path:", moves.join(" → "));
// console.log("Total Moves (Start from 'A'):", moves.length - 1);
