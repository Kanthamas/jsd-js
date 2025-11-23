// Define types for nested objects
interface Specs {
	cpu: string;
	ram: string;
}

interface ItemDetails {
	name: string;
	specs: Specs;
}

interface CartItem {
	id: number;
	qty: number;
	details: ItemDetails;
}

interface Address {
	city: string;
	postalCode: string;
}

interface Customer {
	name: string;
	address: Address;
}

interface Cart {
	items: CartItem[];
	customer: Customer;
}

// Create the cart object
const cart: Cart = {
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
		address: { city: "Bangkok", postalCode: "10110" },
	},
};

// console.log(cart);

// 🟡 Shallow copy using spread
const shallowCopy = { ...cart };

// 🟢 Deep copy using structuredClone
const deepCopy = structuredClone(cart);
/* 
console.log("===== ORIGINAL =====");
console.log(cart);

console.log("===== SHALLOW COPY (spread) =====");
console.log(shallowCopy);

console.log("===== DEEP COPY (structuredClone) =====");
console.log(deepCopy); */

// Log fully expanded
/* console.log("===== ORIGINAL =====");
console.log(JSON.stringify(cart, null, 2));

console.log("===== SHALLOW COPY =====");
console.log(JSON.stringify(shallowCopy, null, 2));

console.log("===== DEEP COPY =====");
console.log(JSON.stringify(deepCopy, null, 2)); */

// 🔎 Optional: show reference difference
// console.log("cart/shallowCopy items[0] same reference?", cart.items[0] === shallowCopy.items[0]); // true
// console.log("cart/deepCopy items[0] same reference?", cart.items[0] === deepCopy.items[0]);
// false
