interface ProductPublic {
	publicName: string; // exposed public field
	price: number; // accessed via getter/setter
}

class Product implements ProductPublic {
	public publicName: string;
	#price: number;

	constructor(name: string, price: number) {
		this.publicName = name;
		this.#price = price;
	}

	get price() {
		return this.#price;
	}

	set price(value: number) {
		if (value < 0) throw new Error("Price cannot be negative");
		this.#price = value;
	}
}

const p2 = new Product("Laptop", 1500);
console.log(p2.publicName); // ✅ "Laptop"
p2.publicName = "Gaming Laptop"; // ✅ update public field
console.log(p2.publicName); // ✅ "Gaming Laptop"
console.log(p2.price); // ✅ 1500 via getter
p2.price = 2000; // ✅ update private field via setter
console.log(p2.price); // ✅ 2000 via getter
// p2.#price = 9999; // ❌ cannot access directly (SyntaxError)
