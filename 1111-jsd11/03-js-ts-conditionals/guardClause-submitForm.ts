// Define the shape of input data
interface FormValues {
	name: string;
	email: string;
}

function submitForm(formData: FormValues) {
	const { name, email } = formData;

	if (!name || !email) {
		console.log("Name and email are required.");
		return;
	}

	if (!isValidEmail(email)) {
		console.log("Invalid email format.");
		return;
	}

	console.log("Form submitted successfully!");
}

function isValidEmail(email: string): boolean {
	return /\S+@\S+\.\S+/.test(email);
}

// examples:

submitForm({
	name: "Alice",
	email: "alice@example.com",
});

// submitForm({ name: "Alice" });

// submitForm({ name: 123, email: false });
