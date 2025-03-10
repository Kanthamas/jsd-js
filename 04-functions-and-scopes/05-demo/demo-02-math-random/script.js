"use strict";

// Requirement: Random Number Function
// Create a function that accepts one number and generates a random number from 1 to that number.

function generateRandomNumber(max) {
	if (typeof max === "number" && max > 1) {
		return Math.floor(Math.random() * max) + 1;
	}
	return `Invalid input.`;
}

console.log(generateRandomNumber(5)); // 1 -> 5
console.log(generateRandomNumber(0));
console.log(generateRandomNumber("3"));
console.log(generateRandomNumber(NaN));
console.log(generateRandomNumber());
