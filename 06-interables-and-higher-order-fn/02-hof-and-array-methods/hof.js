"use strict"
// Higher-Order Function (HOF)

// HOF That Takes a Function as an Argument
/* function higherOrderFunction(callback) {
	return callback(); // Calls the function passed as an argument
}

function greet() {
  return "Hello!";
}

console.log(higherOrderFunction(greet)); // "Hello!" */

// HOF That Returns a Function
// function createMultiplier(multiplier) {
// 	return function (number) {
// 		return number * multiplier; 
// 	};
// }

// const double = createMultiplier(2);
// console.log(double(5)); // 10
