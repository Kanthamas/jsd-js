// Custom error class
class ValidationError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ValidationError";
		// Object.setPrototypeOf(this, ValidationError.prototype); // fix prototype chain
	}
}

// Main function using `never` for throwing
function registerUser(username: string): void | never {
	if (!username) {
		throw new ValidationError("Username is required"); // never returns normally
	}
	console.log("User registered:", username);
}

// Usage
try {
	registerUser(""); // invalid input
} catch (err) {
	if (err instanceof ValidationError) {
		console.error(`Validation failed: ${err.message}`);
	} else {
		console.error("Unexpected error:", err);
	}
}
