"use strict";
let attempts = 0;
const maxAttempts = 3;

function askUser() {
	if (attempts >= maxAttempts) {
		document.getElementById("result").textContent = "Max attempts reached!";
		document.getElementById("askButton").disabled = true;
		return;
	}

	let input = prompt(
		`Attempt ${attempts}/${maxAttempts}: Enter a number greater than 10:`
	);

	attempts++;

	if (input === null) return;

	if (parseInt(input) > 10) {
		document.getElementById(
			"result"
		).textContent = `Thank you! You entered: ${input}`;
	} else {
		askUser(); // Recursively Call
	}
}

function reset() {
	attempts = 0;
	document.getElementById("askButton").disabled = false;
	document.getElementById("result").textContent = "";
}
