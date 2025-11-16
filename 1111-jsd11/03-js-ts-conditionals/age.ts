let age = 16;

if (age >= 18) {
	console.log("You can vote.");
} else {
	console.log("You are too young to vote.");
}
// Output: "You are too young to vote."

let message = age >= 18 ? "You can vote." : "You are too young to vote.";

console.log(message);
// Output: "You are too young to vote."

console.log(
	`Status: ${age >= 18 ? "You can vote." : "You are too young to vote."}`
);


// Checking if a user has enough balance for a purchase
let balance = 50;
let price = 100;

if (balance >= price) {
    console.log("Purchase successful!");
} else {
    console.log("Insufficient balance.");
}
// Output: "Insufficient balance."