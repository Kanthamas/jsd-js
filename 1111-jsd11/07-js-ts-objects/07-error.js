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
