//@ts-nocheck
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

// Move Right to B
col++;
moves.push(board[row][col]); // B

// Move Right to C
col++;
moves.push(board[row][col]);

// Move Down to F
row++;
moves.push(board[row][col]);

// Move left to E
col--;
moves.push(board[row][col]);

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
