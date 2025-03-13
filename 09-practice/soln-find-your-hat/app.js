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
		this.positionX = 0;
		this.positionY = 0;
		// Set the "home" position before the game starts
		this.field[0][0] = pathCharacter;
	}

	static generateField(rows, cols, percentage = 0.2) {
		let field = new Array(rows);

		// Loop to create 2D array using 1D array
		for (let row = 0; row < field.length; row++) {
			field[row] = new Array(cols);
		}

		// Loop to initialize 2D array elements
		for (let row = 0; row < field.length; row++) {
			for (let col = 0; col < field[row].length; col++) {
				const rand = Math.random();
				field[row][col] = rand > percentage ? fieldCharacter : hole;
			}
		}

		let hatRow, hatCol;
		do {
			hatRow = Math.floor(Math.random() * rows);
			hatCol = Math.floor(Math.random() * cols);
		} while ((hatRow === 0 && hatCol === 0) || field[hatRow][hatCol] === hole);

		field[hatRow][hatCol] = hat;

		return field;
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
				console.log("😭, you fell down a hole!");
				playing = false;
			} else if (this.isHat()) {
				console.log(`congratulations! 🎉, you found your ${hat} ✅`);
				playing = false;
			} else {
				// Update the current position on the map
				this.field[this.positionY][this.positionX] = pathCharacter;
			}
		}
	}

	instructions() {
		console.log(
			`\nLet's find your ${hat}!
			\nINSTRUCTIONS:
			\nType: U, D, L, R, (Up, Down, Left, Right)
			\nThen press ENTER to find the ${hat}\nPress Ctrl + C to exit.
			\nEnjoy Your Journey!`
		);
	}

	askPlayer() {
		const answer = prompt(
			`Which direction do you want to move ▶ `
		).toLowerCase();

		if (answer === "u") {
			this.positionY -= 1;
		} else if (answer === "d") {
			this.positionY += 1;
		} else if (answer === "l") {
			this.positionX -= 1;
		} else if (answer === "r") {
			this.positionX += 1;
		} else {
			console.log("Invalid. Enter U, D, L or R.");
			this.askPlayer();
		}
	}

	isInBounds() {
		return (
			this.positionY >= 0 &&
			this.positionX >= 0 &&
			this.positionY < this.field.length &&
			this.positionX < this.field[0].length
		);
	}

	isHat() {
		return this.field[this.positionY][this.positionX] === hat;
	}

	isHole() {
		return this.field[this.positionY][this.positionX] === hole;
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
}

// Game Mode ON
const newGame = new Field(Field.generateField(10, 10));
newGame.play();
