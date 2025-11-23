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

// // Start at A
// moves.push(board[row][col]); // A

// // Move right to B
// col++;
// moves.push(board[row][col]); // B

// // Move right to C
// col++;
// moves.push(board[row][col]); // C

// // Move down to G
// row++;
// moves.push(board[row][col]); // G

// // Move down to K
// row++;
// moves.push(board[row][col]); // K

// // Log path so far before final output
// console.log("Path:", moves.join(" → "));
// console.log("Total Moves (Start from 'A'):", moves.length - 1);
