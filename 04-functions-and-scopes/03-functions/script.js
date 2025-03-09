"use strict";

// Function: Callback Functions
/* function fetchData(callback) {
	setTimeout(() => {
		console.log("Data fetched!");
		callback();
	}, 2000);
}

fetchData(() => {
	console.log("Callback executed after data is fetched.");
}); */

// Function: Anonymous Functions
/* setTimeout(function () {
	console.log("This is an anonymous function! 😎");
}, 1000);

setTimeout(() => {
	console.log("This is another anonymous function! 😄");
}, 3000); */

// Function: IIFE
/* (function () {
	let message = "I am local ⚡";
	console.log(message);
})(); */

// Function: Higher-Order Functions
/* const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 
 */
// Function: Function Factory
/* function multiplier(factor) {
	return function (number) {
		return number * factor;
	};
}

const multiplyBy2 = multiplier(2);
console.log(multiplyBy2(10)); 

const multiplyBy99Point99 = multiplier(99.99);
console.log(multiplyBy99Point99(10));  */

// Generator Functions
/* function* numberGenerator(limit = Infinity) {
	let num = 1;
	while (num <= limit) {
		yield num++;
	}
}

const globalNumbers = numberGenerator();
console.log(`Global Counter: ${globalNumbers.next().value}`);
console.log(`Global Counter: ${globalNumbers.next().value}`);
console.log(`Global Counter: ${globalNumbers.next().value}`);
console.log(`Global Counter: ${globalNumbers.next().value}`);
console.log(`Global Counter: ${globalNumbers.next().value}`);

const counter1 = numberGenerator();
console.log(`counter1: ${counter1.next().value}`);
console.log(`counter1: ${counter1.next().value}`);
console.log(`counter1: ${counter1.next().value}`);

console.log(`Global Counter: ${globalNumbers.next().value}`);
console.log(`Global Counter: ${globalNumbers.next().value}`);

const limitedNumbers = numberGenerator(5);
for (let num of limitedNumbers) {
	console.log(num);
} */
