class Product {
	publicName = "Unnamed product"; // public field
	#price = 0; // private field

	constructor(name, price) {
		this.publicName = name; // set public field
		if (price < 0) throw new Error("Price cannot be negative");
		this.#price = price; // set private field
	}

	get price() {
		return this.#price;
	}
	set price(value) {
		if (value < 0) throw new Error("Price cannot be negative");
		this.#price = value;
	}
}

const p1 = new Product("Laptop", 1500);
console.log(p1.publicName); // ✅ "Laptop"
p1.publicName = "Gaming Laptop"; // ✅ update public field
console.log(p1.publicName); // ✅ "Gaming Laptop"
console.log(p1.price); // ✅ 1500 via getter
p1.price = 2000; // ✅ update private field via setter
console.log(p1.price); // ✅ 2000 via getter
// p1.#price = 9999; // ❌ cannot access directly (SyntaxError)
