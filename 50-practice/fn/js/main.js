"use strict";
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });
const hat = "^";
const hole = "o";
const fieldCharacter = "░";
const pathCharacter = "*";

// --- Game state ---
/* let field = [];
let positionRow = 0;
let positionCol = 0; */

// Board tiles
const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^";

// Hardcoded board
const board = [
	[PLAYER, EMPTY, HOLE],
	[EMPTY, HOLE, EMPTY],
	[EMPTY, HAT, EMPTY],
];

let playerRow = 0;
let playerCol = 0;
let playing = true;

// Print board
function printBoard(board) {
	console.clear();
	board.forEach((row) => console.log(row.join(" ")));
}

// Read direction
function readDirection(input) {
	const direction = input?.trim().toLowerCase();
	const allowDirections = ["w", "a", "s", "d"];
	if (allowDirections.includes(direction)) {
		return direction;
	} else {
		console.log(
			"Invalid input! Please enter a direction. Use w(up), a(left), s(down), d(right)"
		);
		return null;
	}
}

// Update position
function updatePosition(direction) {
	switch (direction) {
		case "w":
			playerRow--;
			break;
		case "s":
			playerRow++;
			break;
		case "a":
			playerCol--;
			break;
		case "d":
			playerCol++;
			break;
	}
}

function checkGameState() {
	if (
		playerRow < 0 ||
		playerRow >= board.length ||
		playerCol < 0 ||
		playerCol >= board[0].length
	) {
		console.log("Out of bounds! Game over.");
		playing = false;
		return;
	}

	const currentTile = board[playerRow][playerCol];

	if (currentTile === HOLE) {
		console.log("Fell into a hole! Game over.");
		playing = false;
		return;
	} else if (currentTile === HAT) {
		console.log("You found the hat! You win!");
		playing = false;
		return;
	} else {
		board[playerRow][playerCol] = PLAYER;
	}
}

// --- Game loop ---
printBoard(board);

while (playing) {
	const input = prompt("Which way? (w/a/s/d): ");
	const direction = readDirection(input);

	if (direction) {
		updatePosition(direction);
		checkGameState();
		if (playing) printBoard(board);
	}
}
