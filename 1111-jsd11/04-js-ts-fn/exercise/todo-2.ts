// 2️⃣
// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

// const userInput = "42";
// Try changing to "hello", 10, null, NaN

// Solution 2️⃣
/* if (typeof userInput === "number" && !isNaN(userInput)) {
	console.log("It is a number.");
} else {
	console.log("It is NOT a number.");
} */

// Make it a helper function
/* function isNumeric(value:any) {
	return typeof value === "number" && !isNaN(value);
}
console.log(isNumeric(userInput)); */

/* Function */
const checkNumber = (userInput: any) => {
	if (typeof userInput === "number" && !isNaN(userInput)) {
		console.log("It is a number.");
	} else {
		console.log("It is NOT a number.");
	}
};

checkNumber("42")
checkNumber(42)
checkNumber("")
checkNumber(null)
checkNumber(NaN)