"use strict";

try {
	// code that may fail
	throw new Error("Something went wrong!");
} catch (err) {
	console.error(err.name); // "Error"
	console.error(err.message); // "Something went wrong!"
} finally {
	console.log("Cleanup if needed");
}


function createCat(name, age) {
	if (age < 0) {
		throw new Error("Age cannot be negative");
	}
	return { name, age };
}

try {
	createCat("Kitty", -2);
} catch (err) {
	console.error(`Cat creation failed: ${err.message}`);
}

class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "CustomError";
	}
}

class ValidationError extends Error {
	constructor(message) {
		super(message);
		this.name = "ValidationError";
	}
}

function registerUser(username) {
	if (!username) {
		throw new ValidationError("Username is required");
	}
	console.log("User registered:", username);
}

try {
	registerUser("");
} catch (err) {
	if (err instanceof ValidationError) {
		console.error(`Validation failed: ${err.message}`);
	}
}

