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
