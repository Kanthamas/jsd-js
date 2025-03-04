// Log a message in the console
console.log("JavaScript file loaded successfully!");

// Function to show an alert and log a message
function showMessage() {
	alert("Button clicked! JavaScript is working.");
	console.log("CTA button was clicked!");
}

// Get the button element by ID and add an event listener
const ctaButton = document.getElementById("cta-btn");
ctaButton.onclick = showMessage;

// let counter = 0;

// function showCounter() {
// 	counter++;
// 	console.log(`Counter: ${counter}`);
// }

// const secondaryBtn = document.getElementById("btn-secondary");
// secondaryBtn.onmouseover = showCounter;
