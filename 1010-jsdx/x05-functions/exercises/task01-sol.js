"use strict";

/* 
Task 01: Greet a Person Using Different Function Declaration Methods

📝 Instructions
- Create a function that accepts one parameter: name
- The function should return a string in this format: "Hello, <name>!"
    For example: Fn("John Doe") returns "Hello, John Doe!"
    
- Implement this using all three function declaration types:
  - Function Declaration
  - Function Expression
  - Arrow Function

❌ Do not print inside the function (no console.log).
✅ Only return the greeting string. 
*/

// 👨‍💻 TODO-01: Function Declaration: greetWithDeclaration(name)
function greetWithDeclaration(name) {
	return `Hello, ${name}!`;
}

// 👨‍💻 TODO-02: Function Expression: greetWithExpression(name)
const greetWithExpression = function (name) {
	return `Hello, ${name}!`;
};

// 👨‍💻 TODO-03: Arrow Function: greetWithArrow(name)
const greetWithArrow = (name) => {
	return `Hello, ${name}!`;
};

// Example Test Cases
console.log(greetWithDeclaration("John Doe")); // "Hello, John Doe!"
console.log(greetWithExpression("John Doe")); // "Hello, John Doe!"
console.log(greetWithArrow("John Doe")); // "Hello, John Doe!"

const username = "mean"
const message = greetWithArrow(username)
console.log(message)