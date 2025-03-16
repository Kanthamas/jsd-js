"use strict";

const products = [
	{ id: 1, name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
	{
		id: 2,
		name: "Smartphone",
		price: 700,
		category: "Electronics",
		rating: 4.2,
	},
	{ id: 3, name: "Tablet", price: 300, category: "Electronics", rating: 3.8 },
	{
		id: 4,
		name: "Headphones",
		price: 150,
		category: "Accessories",
		rating: 4.0,
	},
	{
		id: 5,
		name: "Smartwatch",
		price: 250,
		category: "Electronics",
		rating: 4.8,
	},
	{
		id: 6,
		name: "Wireless Charger",
		price: 50,
		category: "Accessories",
		rating: 4.3,
	},
	{ id: 7, name: "Keyboard", price: 80, category: "Accessories", rating: 3.9 },
	{ id: 8, name: "Camera", price: 500, category: "Electronics", rating: 4.1 },
];

// Chaining:
// Filter by Electronics category
// Filter by rating >= 4
// Map to get name, price, and rating
// Sort by price in ascending order
// Get top 3 cheapest products

const topCheapElectronics = products
	.filter(
		(product) => product.category === "Electronics" && product.rating >= 4
	)
	.map((product) => ({
		name: product.name,
		price: product.price,
		rating: product.rating,
	}))
	.sort((a, b) => a.price - b.price)
	.slice(0, 3);

console.log(topCheapElectronics);
/* Output:
[
	{ name: "Smartwatch", price: 250, rating: 4.8 },
	{ name: "Camera", price: 500, rating: 4.1 },
	{ name: "Smartphone", price: 700, rating: 4.2 },
]; 
*/