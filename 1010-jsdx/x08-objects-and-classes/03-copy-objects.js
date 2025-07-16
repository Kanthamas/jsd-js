"use strict";

// Spread Operator: Shallow copy or merge objects.
const product = { name: "Laptop", price: 1200 };
const updated = { ...product, price: 999, stock: true };
console.log(updated);
// { name: 'Laptop', price: 999, stock: true }

// structuredClone(): Creates a deep clone (nested objects are also copied).
const cart = {
	items: [
		{
			id: 1,
			qty: 2,
			details: {
				name: "Laptop",
				specs: { cpu: "i7", ram: "16GB" },
			},
		},
	],
	customer: {
		name: "Alice",
		address: { city: "Bangkok", zip: "10110" },
	},
};

// 🟡 Shallow copy using spread
const shallowCopy = { ...cart };

// 🟢 Deep copy using structuredClone
const deepCopy = structuredClone(cart);

// Log fully expanded
console.log("===== ORIGINAL =====");
console.log(JSON.stringify(cart, null, 2));

console.log("===== SHALLOW COPY =====");
console.log(JSON.stringify(shallowCopy, null, 2));

console.log("===== DEEP COPY =====");
console.log(JSON.stringify(deepCopy, null, 2));

// 🔎 Optional: show reference difference
console.log(
	"cart/shallowCopy items[0] same reference?",
	cart.items[0] === shallowCopy.items[0]
); // true
console.log(
	"cart/deepCopy items[0] same reference?",
	cart.items[0] === deepCopy.items[0]
); // false

// Object Destructuring: Extract values from objects.
const product2 = {
	name: "Phone",
	price: 799,
	details: { brands: "SoundX" },
};

// Basic destructuring
const { name, price } = product2;
console.log(name, price); // Phone 799

// Nested destructuring with default & alias
const {
	details: { brand: company = "brandName" },
	color = "Black",
} = product2;

console.log(company, color); // SoundX Black
