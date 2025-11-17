// 3️⃣
// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

/* const password = "pass123";
console.log(password.length); */

// Solution 3️⃣
/* if (password.length < 6) {
	console.log("Too short");
} else if (password.length <= 10) {
	console.log("Moderate");
} else {
	console.log("Strong");
} */

/* Function */

const checkPasswordLength = (password: string) => {
	if (password.length < 6) {
		console.log("Too short");
	} else if (password.length <= 10) {
		console.log("Moderate");
	} else {
		console.log("Strong");
	}
};

checkPasswordLength("pass123");
