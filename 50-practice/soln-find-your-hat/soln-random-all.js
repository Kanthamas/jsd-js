"use strict";
const prompt = require("prompt-sync")({ sigint: true });
const clear = require("clear-screen");

const hat = "🍣";
const hole = "🥦";
const fieldCharacter = "⬛";
const pathCharacter = "🥢";

class Field {
	constructor({ field, pathCharacterRow, pathCharacterCol }) {
		this.field = field;
		this.positionRow = pathCharacterRow;
		this.positionCol = pathCharacterCol;
		this.field[this.positionCol][this.positionRow] = pathCharacter;
	}

	static generateField(rows, cols, percentage = 0.2) {
		let field = new Array(rows);

		for (let row = 0; row < rows; row++) {
			field[row] = new Array(cols).fill(fieldCharacter);
		}

		let availablePositions = [];

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				availablePositions.push({ row, col });
			}
		}

		/* 	console.log(
			"Available positions BEFORE shuffle:",
			availablePositions.length,
			availablePositions.slice(0, 5)
		); */

		for (let i = availablePositions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[availablePositions[i], availablePositions[j]] = [
				availablePositions[j],
				availablePositions[i],
			];
		}

		/* 	console.log(
			"Available positions AFTER shuffle:",
			availablePositions.length,
			availablePositions.slice(0, 5)
		); */

		const holeCount = Math.floor(rows * cols * percentage);

		for (let i = 0; i < holeCount && i < availablePositions.length; i++) {
			const { row, col } = availablePositions[i];
			field[row][col] = hole;
		}

		let hatRow, hatCol;
		do {
			const hatIndex = Math.floor(Math.random() * availablePositions.length);
			hatRow = availablePositions[hatIndex].row;
			hatCol = availablePositions[hatIndex].col;
		} while (field[hatRow][hatCol] === hole);

		field[hatRow][hatCol] = hat;

		let pathCharacterRow, pathCharacterCol;
		do {
			const pathCharacterIndex = Math.floor(
				Math.random() * availablePositions.length
			);
			pathCharacterRow = availablePositions[pathCharacterIndex].row;
			pathCharacterCol = availablePositions[pathCharacterIndex].col;
		} while (
			field[pathCharacterRow][pathCharacterCol] === hole ||
			field[pathCharacterRow][pathCharacterCol] === hat
		);

		return { field, pathCharacterRow, pathCharacterCol };
	}

	print() {
		clear();
		const displayMap = this.field
			.map((row) => {
				return row.join("");
			})
			.join("\n");
		console.log(displayMap);
	}

	moveRight() {
		this.positionRow += 1;
	}

	moveLeft() {
		this.positionRow -= 1;
	}

	moveUp() {
		this.positionCol -= 1;
	}

	moveDown() {
		this.positionCol += 1;
	}

	instructions() {
		console.log(
			`\nLet's find your ${hat}!
      \nINSTRUCTIONS:
      \nType: U, D, L, R\n(Up, Down, Left, Right)
      \nThen press ENTER to find the ${hat}\nOr press Ctrl + C to exit.
      \nEnjoy Your Journey!`
		);
	}

	askPlayer() {
		const answer = prompt(
			`Which direction do you want to move ▶ `
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
				return this.askPlayer(); // Recursively call if invalid input
		}
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
		return this.field[this.positionCol][this.positionRow] === hat;
	}

	isHole() {
		return this.field[this.positionCol][this.positionRow] === hole;
	}

	play() {
		let playing = true;

		while (playing) {
			this.print();
			this.instructions();
			this.askPlayer();

			if (!this.isInBounds()) {
				console.log(`😅 Oops! Out of bounds!`);
				playing = false;
			} else if (this.isHole()) {
				console.log(`😭 You fell down a ${hole}!`);
				playing = false;
			} else if (this.isHat()) {
				console.log(`🤩 Congratulations! 🎉\nYou've found your ${hat} ✅`);
				playing = false;
			} else {
				this.field[this.positionCol][this.positionRow] = pathCharacter;
			}
		}
	}
}

// Game Mode ON
const { field, pathCharacterRow, pathCharacterCol } = Field.generateField(
	20,
	20
);
const newGame = new Field({ field, pathCharacterRow, pathCharacterCol });
newGame.play();
