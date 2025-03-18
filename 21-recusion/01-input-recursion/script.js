"use strict";
let attempts = 0;
const maxAttempts = 3;

function askUser() {
	if (attempts >= maxAttempts) {
		document.getElementById("result").textContent =
			"😅 Sorry! You've reached the maximum attempt.";
		document.getElementById("askButton").disabled = true;
		return;
	}

	attempts++;

	let input = prompt(
		`Attempt ${attempts}/${maxAttempts}: Enter a number greater than 10:`
	);

	if (input === null) {
		document.getElementById("result").textContent =
			"❌ You canceled the input.";
		return;
	}

	if (parseInt(input) > 10) {
		document.getElementById(
			"result"
		).textContent = `😃 Thank you! You entered: ${input}`;
	} else {
		askUser(); // Recursively Call for User Input
	}
}

function reset() {
	attempts = 0;
	document.getElementById("askButton").disabled = false;
	document.getElementById("result").textContent = "";
}
