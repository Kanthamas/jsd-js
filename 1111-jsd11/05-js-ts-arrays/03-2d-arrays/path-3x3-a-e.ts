// @ts-nocheck
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let row = 0;
let col = 0; // Start at A (0,0) -> [row][col]

const moves = [];
moves.push(board[row][col]); // A

// Right to B
col++;
moves.push(board[row][col]); // B

// Right to C
col++;
moves.push(board[row][col]); // C

// Down to F
row++;
moves.push(board[row][col]); // F

// Move left to E
col--;
moves.push(board[row][col]); // E

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
