// boardRefactor.ts

type BoardCell = string;
type Board = BoardCell[][];
type Direction = "up" | "down" | "left" | "right";

const board: Board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves: BoardCell[] = [];

// Current position
let row = 0;
let col = 0;

// Record the current cell
function recordMove(): void {
	moves.push(board[row][col]);
}

// Check if a position is inside the board
function isInBounds(r: number, c: number): boolean {
	const rowInBounds = r >= 0 && r < board.length; // not above top / below bottom
	const colInBounds = c >= 0 && c < board[0].length; // not left of first / right of last
	return rowInBounds && colInBounds;
}

// Generic move function
function move(direction: Direction): void {
	let nextRow = row;
	let nextCol = col;

	switch (direction) {
		case "up":
			nextRow--;
			break;
		case "down":
			nextRow++;
			break;
		case "left":
			nextCol--;
			break;
		case "right":
			nextCol++;
			break;
	}

	if (isInBounds(nextRow, nextCol)) {
		row = nextRow;
		col = nextCol;
		recordMove();
	} else {
		console.warn(
			`Cannot move ${direction} from current position (${row},${col})`
		);
	}
}

// Separate functions for readability
function moveRight() {
	move("right");
}
function moveLeft() {
	move("left");
}
function moveUp() {
	move("up");
}
function moveDown() {
	move("down");
}

// Record starting position
recordMove(); // "A"

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
