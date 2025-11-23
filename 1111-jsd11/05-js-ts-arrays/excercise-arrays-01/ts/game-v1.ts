// board.ts

type BoardCell = string;
type Board = BoardCell[][];

const board: Board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves: BoardCell[] = [];

// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;

// Record starting position
moves.push(board[row][col]); // "A"

// Define movement functions
function moveRight(): void {
	col++;
	moves.push(board[row][col]);
}

function moveLeft(): void {
	col--;
	moves.push(board[row][col]);
}

function moveUp(): void {
	row--;
	moves.push(board[row][col]);
}

function moveDown(): void {
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
