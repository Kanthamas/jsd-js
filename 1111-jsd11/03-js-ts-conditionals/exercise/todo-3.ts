// 3️⃣
// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass123";
const len = password.length;

// Solution 3️⃣
if (len < 6) {
	console.log("Too short");
} else if (len <= 10) {
	console.log("Moderate");
} else {
	console.log("Strong");
}
