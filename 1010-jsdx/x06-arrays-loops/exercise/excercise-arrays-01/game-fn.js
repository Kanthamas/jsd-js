"use strict";
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let x = 0; // Starting row index
let y = 0; // Starting column index

const moves = [];
moves.push(board[x][y]); // Start at A

// Define movement functions
// Move right (increase column index)
function moveRight() {
	y++; 
	moves.push(board[x][y]);
}

// Move left (decrease column index)
function moveLeft() {
	y--; 
	moves.push(board[x][y]);
}

// Move up (decrease row index)
function moveUp() {
	x--; 
	moves.push(board[x][y]);
}

// Move down (increase row index)
function moveDown() {
	x++; 
	moves.push(board[x][y]);
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
