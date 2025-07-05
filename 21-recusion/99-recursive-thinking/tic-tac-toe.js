const SIZE = 3;

// Helper to create an empty 3x3 board
function createEmptyBoard() {
	return Array.from({ length: SIZE }, () => Array(SIZE).fill(null));
}

// Check if the board is full (base case)
function boardIsFull(board) {
	for (let row of board) {
		if (row.includes(null)) return false;
	}
	return true;
}

// Helper to flip turn
function flipTurn(turn) {
	return turn === "X" ? "O" : "X";
}

// Recursive function to generate all board combinations
function generateOneBoard(board, turn) {
	if (boardIsFull(board)) {
		printBoard(board);
		return;
	}

	for (let i = 0; i < SIZE; i++) {
		for (let j = 0; j < SIZE; j++) {
			if (board[i][j] === null) {
				board[i][j] = turn; // Place move
				generateOneBoard(board, flipTurn(turn)); // Recursive call
				board[i][j] = null; // Backtrack
			}
		}
	}
}

// Utility to print the board
function printBoard(board) {
	console.log("Generated Board:");
	for (let row of board) {
		console.log(row.map((cell) => cell || "_").join(" "));
	}
	console.log("\n");
}

// Start generating from an empty board
const board = createEmptyBoard();
generateOneBoard(board, "X");
