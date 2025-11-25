"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";

const prompt = promptSync({ sigint: true });

/* const PLAYER = "*";
const EMPTY = "░";
const HOLE = "O";
const HAT = "^"; */

const hat = "^";
const hole = "o";
const fieldCharacter = "░";
const pathCharacter = "*";

// --- Game state ---
let field = [];
let positionRow = 0;
let positionCol = 0;

// --- Game functions ---

function generateField(height, width, percentage = 0.2) {
	const newField = Array.from({ length: height }, () =>
		Array.from({ length: width }, () =>
			Math.random() > percentage ? fieldCharacter : hole
		)
	);

	// Place hat
	const hatY = Math.floor(Math.random() * height);
	const hatX = Math.floor(Math.random() * width);
	newField[hatY][hatX] = hat;

	// Place player
	let startRow, startCol;
	do {
		startRow = Math.floor(Math.random() * height);
		startCol = Math.floor(Math.random() * width);
	} while (
		newField[startRow][startCol] === hole ||
		newField[startRow][startCol] === hat
	);
	newField[startRow][startCol] = pathCharacter;

	positionRow = startRow;
	positionCol = startCol;

	return newField;
}

function printField() {
	console.clear();
	console.log(field.map((row) => row.join("")).join("\n"));
}

function isInBounds(row, col) {
	return row >= 0 && col >= 0 && row < field.length && col < field[0].length;
}

function askMove() {
	let move;
	do {
		move = prompt(
			"Which way? (left(A), right(D), up(W), down(S)): "
		).toLowerCase();
		if (!["a", "d", "w", "s"].includes(move)) {
			console.log("Invalid key. Please use A, D, W, or S.");
			move = null;
		}
	} while (!move);
	return move;
}

function updatePosition(move) {
	switch (move) {
		case "a":
			positionCol -= 1;
			break;
		case "d":
			positionCol += 1;
			break;
		case "w":
			positionRow -= 1;
			break;
		case "s":
			positionRow += 1;
			break;
	}
}

function playGame() {
	let playing = true;
	while (playing) {
		printField();
		const move = askMove();
		updatePosition(move);

		if (!isInBounds(positionRow, positionCol)) {
			console.log("You moved out of bounds! Game over.");
			break;
		}

		const currentTile = field[positionRow][positionCol];
		if (currentTile === hole) {
			console.log("Oops! You fell into a hole. Game over.");
			playing = false;
		} else if (currentTile === hat) {
			console.log("Hooray! You found your hat! You win!");
			playing = false;
		} else {
			field[positionRow][positionCol] = pathCharacter;
		}
	}
}

// --- Start the game ---
field = generateField(3, 4, 0.3);
playGame();
