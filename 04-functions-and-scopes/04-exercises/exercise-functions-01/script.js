"use strict";
// Function Declaration
function greetUser(name) {
	return `Hello, ${name}!`;
}

console.log(greetUser("John")); // "Hello, John!"

// Function Expression
const greetUserExpression = function (name) {
	return `Hello, ${name}!`;
};

console.log(greetUserExpression("John")); // "Hello, John!"

// Arrow Function
const greetUserArrow = (name) => `Hello, ${name}!`;

console.log(greetUserArrow("John")); // "Hello, John!"
