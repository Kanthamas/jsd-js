// Function Declaration
function greetUser(name: string) {
	return `Hello, ${name}!`;
}
// Function Expression
const greetUserExpression = function (name:string) {
	return `Hello, ${name}!`;
};

// Arrow Function
const greetUserArrow = (name:string) => `Hello, ${name}!`;

console.log(greetUser("John")); // "Hello, John!"
console.log(greetUserExpression("John")); // "Hello, John!"
console.log(greetUserArrow("John")); // "Hello, John!"
