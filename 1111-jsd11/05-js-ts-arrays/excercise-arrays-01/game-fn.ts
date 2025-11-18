// @ts-nocheck
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
// Move right (increase column index)
function moveRight() {
	col++;
	moves.push(board[row][col]);
}

// Move left (decrease column index)
function moveLeft() {
	col--;
	moves.push(board[row][col]);
}

// Move up (decrease row index)
function moveUp() {
	row--;
	moves.push(board[row][col]);
}

// Move down (increase row index)
function moveDown() {
	row++;
	moves.push(board[row][col]);
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
