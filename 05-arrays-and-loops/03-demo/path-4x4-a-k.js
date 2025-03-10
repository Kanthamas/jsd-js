"use strict";
const board = [
	["A", "B", "C", "D"],
	["E", "X", "G", "H"],
	["I", "X", "K", "L"],
	["M", "N", "O", "P"],
];

let x = 0;
let y = 0; // Start at A (0,0) -> [row][col]
const moves = [];

// Start at A
moves.push(board[x][y]); // A

// Move right to B
y++;
moves.push(board[x][y]); // B

// Move right to C
y++;
moves.push(board[x][y]); // C

// Move down to G
x++;
moves.push(board[x][y]); // G

// Move down to K
x++;
moves.push(board[x][y]); // K

// Log path so far before final output
console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
