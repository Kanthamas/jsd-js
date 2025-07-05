"use strict";
// JS Assessment: Find Your Hat //
const prompt = require("prompt-sync")({ sigint: true });
const clear = require("clear-screen");
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";
const hat = "^";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionRow = 0;
		this.positionCol = 0;
		this.field[this.positionCol][this.positionRow] = pathCharacter;
	}

	//  แล้ว clear () เม็ดตอล เอาไปใช้ยังไง?
	print() {
		let fieldString = "";
		for (let i = 0; i < this.field.length; i++) {
			fieldString += this.field[i].join("");
			fieldString += "\n";
		}
		console.log(fieldString);
	}

	validateInput(row, col) {
		try {
			if (this.field[row][col] === hat) {
				return 1;
			} else if (this.field[row][col] === hole) {
				return 2;
			} else {
				return 3;
			}
		} catch (e) {
			console.log("แอบมองเธออยู่นะจ๊ะ");
			return 0;
		}
	}
	updateFieldArray(row, col) {
		if (this.field[row][col] !== hat && this.field[row][col] !== hole) {
			this.field[row][col] = pathCharacter;
		}
	}
	playGame() {
		let rowIndex = 0;
		let columnIndex = 0;

		let gameOver = false;
		while (!gameOver) {
			newGame.print();

			const userInput = prompt("อยากไปไหนเลือกเลย (l/r/u/d): ");

			// Handle ได้เวลาmove on
			if (userInput === "l") {
				columnIndex -= 1;
			} else if (userInput === "r") {
				columnIndex += 1;
			} else if (userInput === "u") {
				rowIndex -= 1;
			} else if (userInput === "d") {
				rowIndex += 1;
			}

			// วาลิเดท
			const validation = this.validateInput(rowIndex, columnIndex);

			if (validation === 0) {
				console.log("คุณออกนอกขอบเขต แต่เต้ยเป็นผู้ชายที่มีขอบเขต!");
				break;
			} else if (validation === 1) {
				console.log("ตื่นเต้นมากๆครับเจอหมวกแล้ว!");
				break;
			} else if (validation === 2) {
				console.log("ตกหลุมรักขึ้นไม่ไหวใครผลัก!");
				break;
			} else {
				this.updateFieldArray(rowIndex, columnIndex);
			}
		}
	}
}
const newGame = new Field([
	["*", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

newGame.playGame();
