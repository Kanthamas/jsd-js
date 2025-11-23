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

// Movement functions with inline bounds check
function moveRight(): void {
	if (col + 1 < board[0].length) {
		col++;
		moves.push(board[row][col]);
	} else {
		console.warn("Cannot move right from current position");
	}
}

function moveLeft(): void {
	if (col - 1 >= 0) {
		col--;
		moves.push(board[row][col]);
	} else {
		console.warn("Cannot move left from current position");
	}
}

function moveUp(): void {
	if (row - 1 >= 0) {
		row--;
		moves.push(board[row][col]);
	} else {
		console.warn("Cannot move up from current position");
	}
}

function moveDown(): void {
	if (row + 1 < board.length) {
		row++;
		moves.push(board[row][col]);
	} else {
		console.warn("Cannot move down from current position");
	}
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E

console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);
