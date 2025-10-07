"use strict";
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
	}

	print() {
		clear();
		const displayMap = this.field.map((row) => row.join("")).join("\n");
		console.log(displayMap);
	}

	moveRight() {
		this.positionCol += 1;
	}

	moveLeft() {
		this.positionCol -= 1;
	}

	moveUp() {
		this.positionRow -= 1;
	}

	moveDown() {
		this.positionRow += 1;
	}

	isInBounds() {
		return (
			this.positionRow >= 0 &&
			this.positionCol >= 0 &&
			this.positionRow < this.field.length &&
			this.positionCol < this.field[0].length
		);
	}

	isHat() {
		return this.field[this.positionRow][this.positionCol] === hat;
	}

	isHole() {
		return this.field[this.positionRow][this.positionCol] === hole;
	}

	askPlayer() {
		const answer = prompt(
			"Which direction do you want to move (U/D/L/R)? "
		).toLowerCase();

		switch (answer) {
			case "u":
				this.moveUp();
				break;
			case "d":
				this.moveDown();
				break;
			case "l":
				this.moveLeft();
				break;
			case "r":
				this.moveRight();
				break;
			default:
				console.log("Invalid input. Please enter U, D, L, or R.");
				return this.askPlayer();
		}
	}

	play() {
		let playing = true;

		while (playing) {
			this.print();
			this.askPlayer();

			if (!this.isInBounds()) {
				console.log("😅 Oops! You moved out of bounds!");
				playing = false;
			} else if (this.isHole()) {
				console.log("😭 You fell down a hole!");
				playing = false;
			} else if (this.isHat()) {
				console.log(`🤩 Congratulations! You've found your hat! 🎉`);
				playing = false;
			} else {
				this.field[this.positionRow][this.positionCol] = pathCharacter;
			}
		}
	}
}

// Hardcoded field setup (5x5 grid)
const hardcodedField = [
	[pathCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter],
	[fieldCharacter, hole, fieldCharacter, fieldCharacter, fieldCharacter],
	[fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole],
	[hole, fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter],
	[fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hat],
];

// Game Mode ON
const newGame = new Field(hardcodedField);
newGame.play();
