// Chaining: Find fruit products, map to get name and price, filter by price > 1, and sort by price (DESC)
type Product = {
	id: number;
	name: string;
	price: number;
	category:string;
}

const products: Product[] = [
	{ id: 1, name: "Apple", price: 1.5, category: "Fruit" },
	{ id: 2, name: "Banana", price: 0.5, category: "Fruit" },
	{ id: 3, name: "Carrot", price: 0.8, category: "Vegetable" },
	{ id: 4, name: "Spinach", price: 1.2, category: "Vegetable" },
	{ id: 5, name: "Mango", price: 2.5, category: "Fruit" },
	{ id: 6, name: "Lettuce", price: 1.0, category: "Vegetable" },
];


// Chaining: Find fruit products, map to get name and price, filter by price > 1, and sort by price

// Step 1: Filter products with category "Fruit"
// Step 2: Map to only get name and price
// Step 3: Filter products with price greater than 1
// Step 4: Sort by price in descending order

// Solution → Next slide 😆

const sortedFruitProducts = products
	.filter((product) => product.category === "Fruit") 
	.map((product) => ({ name: product.name, price: product.price })) 
	.filter((product) => product.price > 1.0) 
	.sort((a, b) => b.price - a.price); 

console.log(sortedFruitProducts); 
// [ { name: 'Mango', price: 2.5 }, { name: 'Apple', price: 1.5 } ]
