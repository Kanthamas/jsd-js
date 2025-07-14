"use strict";

/*
Task 03: FizzBuzz Checker

📝 Instructions
- Create a function named fizzBuzz
- It should accept one parameter: a number
- Use conditional statements to return the correct output
- Return "FizzBuzz" if divisible by both 3 and 5
- Return "Fizz" if divisible only by 3
- Return "Buzz" if divisible only by 5
- Otherwise, return "Not divisible by 3 or 5"

❌ Do not print inside the function.
✅ Only return the result.
*/

// 👨‍💻 TODO-01: Write your code below to complete the task as described above.
function fizzBuzz(num) {
	if (num % 3 === 0 && num % 5 === 0) {
		return "FizzBuzz";
	} else if (num % 3 === 0) {
		return "Fizz";
	} else if (num % 5 === 0) {
		return "Buzz";
	} else {
		return "Not divisible by 3 or 5";
	}
}

// Example Test Cases
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(9)); // "Fizz"
console.log(fizzBuzz(10)); // "Buzz"
console.log(fizzBuzz(7)); // "Not divisible by 3 or 5"
