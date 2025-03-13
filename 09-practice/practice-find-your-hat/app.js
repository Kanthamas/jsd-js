//--- Please copy and paste your GitHub Repo on line 2 (optional) ---//
// <GitHub Repo>

// JavaScript Assessment Rubric: https://generation.instructure.com/courses/2342/assignments/143783

// Codecademy: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-javascript-syntax-part-iii/modules/fecp-challenge-project-find-your-hat/projects/find-your-hat

// Please break down your thinking process step-by-step (mandatory)
// step 1 :
// step 2 :
// step 3 :
// step 4 :
// step 5 :
// ...
// step n :

// JS Assessment: Find Your Hat //

const prompt = require("prompt-sync")({ sigint: true }); // This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program by press Crtl+c
const clear = require("clear-screen"); //every turn clear the screen that meant you will not get new field in time you choose the direction
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field = [[]]) {
		this.field = field;
		this.positionX = 0;
		this.positionY = 0;
		// Set the "home" position before the game starts
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
