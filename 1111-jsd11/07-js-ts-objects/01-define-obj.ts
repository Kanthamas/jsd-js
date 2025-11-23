// Define types for nested objects
interface Address {
	street: string;
	city: string;
	country?: string; // optional
}

interface Person {
	name: string;
	age: number;
	drinks: string[];
	luckyNumber: number;
	address: Address;
	greet: () => void;
	drink: () => void;
	arrowFnThis: () => void;
}

const person: Person = {
	name: "John",
	age: 30,
	drinks: ["☕ coffee", "🍋 lemonade"],
	luckyNumber: 555,
	address: {
		street: "123 Main Road",
		city: "Chiang Mai",
	},
	greet: function () {
		console.log(`Hi, I'm ${this.name}!`);
	},
	drink() {
		console.log(`I drink ${this.drinks[0]}.`);
	},
	arrowFnThis: () => console.log(this, this.name),
};

// Accessing properties
console.log(person.name); // John
console.log(person.drinks[1]); // 🍋 lemonade
console.log(person.address.street); // 123 Main Road
console.log(person["address"]["street"]); // 123 Main Road

// Methods
person.greet(); // Hi, I'm John!
person.drink(); // I drink ☕ coffee.

// Optional chaining with default value
console.log(person.address?.country ?? "Thailand"); // Thailand

// Arrow function `this` behavior
person.arrowFnThis(); // {} undefined
