"use strict";

function generateRandomNumber(max) {
	if (!isNumber(max) || max < 1) {
		return `Invalid input`;
	}
	return Math.floor(Math.random() * max) + 1;
}

function isNumber(value) {
	return typeof value === "number" && !isNaN(value);
}

// Example usage:
const max = 10;
const randomNumber = generateRandomNumber(max);
console.log(randomNumber); // Outputs a random number between 1 and 10

// Capitalize the first letter of a given string
// function capitalize(str) {
//   if (typeof str !== 'string') {
//     throw new Error('Input must be a string');
//   }
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// Example usage:
// const capitalized = capitalize('hello');
// console.log(capitalized);  // Outputs: "Hello"
