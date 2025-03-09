"use strict";
// Function to handle DOM events
function handleFormSubmit() {
	const form = document.getElementById("emailForm");
	const emailInput = document.getElementById("email");

	form.addEventListener("submit", function (event) {
		event.preventDefault();

		if (validateEmail(emailInput)) {
			alert("Form submitted successfully!");
		} else {
			alert("Please enter a valid email address.");
		}
	});
}

// Function to validate email format
function validateEmail(emailInput) {
	const email = emailInput.value;
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (emailRegex.test(email)) {
		emailInput.setCustomValidity("");
		return true;
	} else {
		emailInput.setCustomValidity("Please enter a valid email address 😉");
		return false;
	}
}

// Initialize the event listener after the DOM is loaded
document.addEventListener("DOMContentLoaded", handleFormSubmit);
