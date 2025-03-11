"use strict";

// Filtering, Mapping, and Sorting
/* const numbers = [5, 10, 3, 8, 2, 15, 6];

const result = numbers
  .filter(num => num >= 5)  // Filter out numbers less than 5
  .map(num => num * 2)      // Double each remaining number
  .sort((a, b) => b - a);   // Sort in descending order

console.log(result); // Output: [30, 20, 16, 10, 6] */

// Find the Maximum Value in an Array After Filtering and Mapping
/* const numbers = [5, 10, 3, 8, 2, 15, 6];

const max = numbers
  .filter(num => num % 2 !== 0)  // Keep only odd numbers
  .map(num => num * 2)           // Double each odd number
  .reduce((acc, num) => (num > acc ? num : acc), -Infinity);  // Find max value

console.log(max); // Output: 30 (because 15 * 2 = 30) */

// Chaining with find(), map(), filter(), and sort()
const products = [
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
const sortedFruitProducts = products
	.filter((product) => product.category === "Fruit") 
	.map((product) => ({ name: product.name, price: product.price })) 
	.filter((product) => product.price > 1.0) 
	.sort((a, b) => b.price - a.price); 

console.log(sortedFruitProducts);


