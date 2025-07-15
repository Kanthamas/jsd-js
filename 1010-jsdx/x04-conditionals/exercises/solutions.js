// 1️⃣
// TODO: Use if/else to print "Even" or "Odd"

const number = 15;

// Solution 1️⃣
if (number % 2 === 0) {
	console.log("Even");
} else {
	console.log("Odd");
}

// Solution 1️⃣ Ternary
const output = number % 2 === 0 ? "Even" : "Odd";
console.log(output);

// 2️⃣
// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN

// Solution 2️⃣
if (typeof userInput === "number" && !isNaN(userInput)) {
	console.log("It is a number.");
} else {
	console.log("It is NOT a number.");
}

// Make it a helper function
function isNumeric(value) {
	return typeof value === "number" && !isNaN(value);
}
console.log(isNumeric(userInput));

// 3️⃣
// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";
console.log(password.length)

// Solution 3️⃣
if (password.length < 6) {
	console.log("Too short");
} else if (password.length <= 10) {
	console.log("Moderate");
} else {
	console.log("Strong");
}

// 4️⃣
// TODO: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"
// TODO BONUS: Rewrite with if

const num = 15;

// Solution 4️⃣
if (num % 3 === 0 && num % 5 === 0) {
	console.log("FizzBuzz");
} else if (num % 3 === 0) {
	console.log("Fizz");
} else if (num % 5 === 0) {
	console.log("Buzz");
} else {
	console.log("Not divisible by 3 or 5");
}

// Solution BONUS 4️⃣
let result = "";

if (num % 3 === 0) {
	result += "Fizz";
}
if (num % 5 === 0) {
	result += "Buzz";
}
if (result === "") {
	result = "Not divisible by 3 or 5";
}

console.log(result);

// 5️⃣
// TODO: Convert this if to switch/case (You can add more options.)

const fruit = "banana";

if (fruit === "apple") {
	console.log("An apple a day keeps the doctor away.");
} else if (fruit === "banana") {
	console.log("Banana is good for potassium.");
} else if (fruit === "orange") {
	console.log("Oranges are full of vitamin C.");
} else {
	console.log("Unknown fruit.");
}

// Solution 5️⃣
switch (fruit) {
	case "apple":
		console.log("An apple a day keeps the doctor away.");
		break;
	case "banana":
		console.log("Banana is good for potassium.");
		break;
	case "orange":
		console.log("Oranges are full of vitamin C.");
		break;
	default:
		console.log("Unknown fruit.");
}
