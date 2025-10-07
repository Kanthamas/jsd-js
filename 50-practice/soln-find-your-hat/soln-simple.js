"use strict";
// JS Assessment: Find Your Hat //
import promptSync from "prompt-sync";
import clear from "clear-screen";

const prompt = promptSync({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionRow][this.positionCol] = pathCharacter;
		this.gameStatus = true;
	}

	// Print field //
	print() {
		clear();
		for (let i = 0; i < this.field.length; i++) {
			let rowString = "";
			for (let j = 0; j < this.field[i].length; j++) {
				rowString += this.field[i][j];
			}
			console.log(rowString);
		}
	}
	moveLeft() {
		this.positionCol = this.positionCol - 1;
	}
	moveRight() {
		this.positionCol = this.positionCol + 1;
	}
	moveUp() {
		this.positionRow = this.positionRow - 1;
	}
	moveDown() {
		this.positionRow = this.positionRow + 1;
	}
	checkCondition(positionRow, positionCol) {
		if (this.field[positionRow][positionCol] === hole) {
			return "hat";
		}
		return "safe";
	}

	move(direction) {
		if (direction === "l") {
			this.moveLeft();
		} else if (direction === "r") {
			this.moveRight();
		} else if (direction === "u") {
			this.moveUp();
		} else if (direction === "d") {
			this.moveDown();
		}
	}

	check() {
		const row = this.positionRow;
		const col = this.positionCol;

		if (
			row < 0 ||
			row >= this.field.length ||
			col < 0 ||
			col >= this.field[0].length
		) {
			console.log("💀 Out of bounds! Game over.");
			this.gameStatus = false;
			return;
		} else if (this.field[row][col] === hole) {
			console.log("💀 You fell into a hole! Game over.");
			this.gameStatus = false;
			return;
		} else if (this.field[row][col] === hat) {
			console.log("🎉 You found your hat! You win!");
			this.gameStatus = false;
			return;
		} else {
			this.field[row][col] = pathCharacter;
		}
	}

	play() {
		while (this.gameStatus) {
			this.print();
			const direction = prompt("Which way?");
			this.move(direction);
			this.check();
		}
	}
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["░", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

newGame.play();
