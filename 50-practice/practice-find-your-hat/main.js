"use strict";
// JS Assessment: Find Your Hat //
const prompt = require("prompt-sync")({ sigint: true }); 
const clear = require("clear-screen"); 
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionX = 0;
		this.positionY = 0;
		// Set the home position at (0, 0) before the game starts
		this.field[0][0] = pathCharacter;
	}

	// Print field method to make it eaier
	print() {
		clear();
		// Your print map code here
		// YOUR CODE
		console.log(this.field); // Please REMOVE this line before you start your code!
	}

	// The rest of your code starts here
	// YOUR CODE
}

// Game Mode ON
// Remark: Code example below should be deleted and use your own code.
const newGame = new Field([
	["*", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);
newGame.print();
