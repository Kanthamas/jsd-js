"use strict";
const prompt = require("prompt-sync")({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+c
const clear = require("clear-screen"); //every turn clear the screen that meant you will not get new field in time you choose the direction
// const hat = "^";
// const hole = "O";
// const fieldCharacter = "░";
// const pathCharacter = "*";
const hat = "👒";
const hole = "💥";
const fieldCharacter = "🟩";
const pathCharacter = "👩";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionRow = 0;
		this.positionCol = 0;
		// Set the "home" position before the game starts
		this.field[0][0] = pathCharacter;
	}

	static generateField(rows, cols, percentage = 0.2) {
		let field = new Array(rows);

		for (let row = 0; row < rows; row++) {
			field[row] = new Array(cols).fill(fieldCharacter);
		}

		let availablePositions = [];

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				if (
					!(
						(row === 0 && col === 0) ||
						(row === 0 && col === 1) ||
						(row === 1 && col === 0)
					)
				) {
					availablePositions.push({ row, col });
				}
			}
		}

		for (let row = availablePositions.length - 1; row > 0; row--) {
			const col = Math.floor(Math.random() * (row + 1));
			[availablePositions[row], availablePositions[col]] = [
				availablePositions[col],
				availablePositions[row],
			];
		}

		const holeCount = Math.floor(rows * cols * percentage);
		for (
			let index = 0;
			index < holeCount && index < availablePositions.length;
			index++
		) {
			const { row, col } = availablePositions[index];
			field[row][col] = hole;
		}

		let hatRow, hatCol;
		do {
			const hatIndex = Math.floor(Math.random() * availablePositions.length);
			hatRow = availablePositions[hatIndex].row;
			hatCol = availablePositions[hatIndex].col;
		} while (
			hatRow === 0 ||
			hatRow === rows - 1 ||
			hatCol === 0 ||
			hatCol === cols - 1 ||
			field[hatRow][hatCol] === hole ||
			(hatRow === 0 && hatCol === 0)
		);

		field[hatRow][hatCol] = hat;

		return field;
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
				console.log("😅 Oops! Out of bounds!");
				playing = false;
			} else if (this.isHole()) {
				console.log("😭 You fell down a hole!");
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
const newGame = new Field(Field.generateField(10, 10));
newGame.play();

// Hardcoded field setup (5x5 grid)
/* const hardcodedField = [
	[pathCharacter, fieldCharacter, fieldCharacter, hole, fieldCharacter],
	[fieldCharacter, hole, fieldCharacter, hole, fieldCharacter],
	[fieldCharacter, fieldCharacter, fieldCharacter, fieldCharacter, hole],
	[hole, fieldCharacter, hole, fieldCharacter, fieldCharacter],
	[fieldCharacter, hole, fieldCharacter, fieldCharacter, hat],
];
const newGame2 = new Field(hardcodedField);
newGame2.play(); */
