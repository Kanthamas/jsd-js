"use strict";
const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

let x = 0;
let y = 0; // Start at A (0,0) -> [row][col]

const moves = [];
moves.push(board[x][y]); // A

y++; // Right to B
moves.push(board[x][y]); // B

y++; // Right to C
moves.push(board[x][y]); // C

x++; // Down to F
moves.push(board[x][y]); // F

y--; // Move left to E
moves.push(board[x][y]); // E

console.log("Path:", moves.join(" → "));
// Output: Path: A → B → C → F → E
console.log("Total Moves (Start from 'A'):", moves.length - 1);
// Output: Total Moves (Start from 'A'): 4
