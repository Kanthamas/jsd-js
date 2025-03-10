"use strict";
// Function Declaration
function greetUser(name) {
	return `Hello, ${name}!`;
}

// Function Expression
const greetUserExpression = function (name) {
	return `Hello, ${name}!`;
};

// Arrow Function
const greetUserArrow = (name) => `Hello, ${name}!`;

console.log(greetUser("John")); // "Hello, John!"
console.log(greetUserExpression("John")); // "Hello, John!"
console.log(greetUserArrow("John")); // "Hello, John!"
