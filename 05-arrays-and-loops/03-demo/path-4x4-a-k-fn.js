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

// Function to move right
function moveRight() {
	y++;
	moves.push(board[x][y]);
}

// Function to move down
function moveDown() {
	x++;
	moves.push(board[x][y]);
}

// Start at A
moves.push(board[x][y]); // A

// Move right to B
moveRight();

// Move right to C
moveRight();

// Move down to G
moveDown();

// Move down to K
moveDown();

// Log path so far before final output
console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
