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
		this.field[this.positionRow][this.positionCol] = pathCharacter;
	}

	static generateField(rows, cols, percentage = 0.2) {
		// Place field //
		let field = Array.from({ length: rows }, () =>
			Array(cols).fill(fieldCharacter)
		);

		// Map 2D array //
		let availablePositions = [];

		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < cols; col++) {
				if (
					!(row === 0 && col === 0) &&
					!(row === 0 && col === 1) &&
					!(row === 1 && col === 0)
				) {
					availablePositions.push({ row, col });
				}
			}
		}

		// console.log(availablePositions);

		// Fisher-Yates (Durstenfeld) shuffle algorithm //
		const shuffleArray = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		};

		shuffleArray(availablePositions);

		// console.log("-".repeat(30));
		// console.log(availablePositions);

		// Place holes //
		let holeCount = Math.floor(rows * cols * percentage);

		for (let i = 0; i < holeCount && i < availablePositions.length; i++) {
			let { row, col } = availablePositions[i];
			field[row][col] = hole;
			// console.log([row, col]);
		}

		// Place hat //
		let hatRow, hatCol;
		do {
			let hatIndex = Math.floor(Math.random() * availablePositions.length);
			({ row: hatRow, col: hatCol } = availablePositions[hatIndex]);
		} while (
			hatRow === 0 ||
			hatRow === rows - 1 ||
			hatCol === 0 ||
			hatCol === cols - 1 ||
			field[hatRow][hatCol] === hole
		);

		field[hatRow][hatCol] = hat;
		// console.log("hat", [hatRow, hatCol]);
		return field;
	}

	print() {
		clear();
		console.log(this.field.map((row) => row.join("")).join("\n"));
	}

	moveUp() {
		this.positionRow--;
	}

	moveDown() {
		this.positionRow++;
	}

	moveLeft() {
		this.positionCol--;
	}

	moveRight() {
		this.positionCol++;
	}

	move(direction) {
		switch (direction) {
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
				console.log("Invalid input. Use U, D, L, or R.");
		}
	}

	instructions() {
		console.log(`\nFind your ${hat}!
Type: U, D, L, R (Up, Down, Left, Right)
Press ENTER to move. Ctrl+C to exit.\n`);
	}

	askPlayer() {
		let answer = prompt("Which direction do you want to move ▶ ").toLowerCase();
		this.move(answer);
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
				this.field[this.positionRow][this.positionCol] = pathCharacter;
			}
		}
	}
}

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
