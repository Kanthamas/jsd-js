"use strict";

const numbers = [1, 2, 3, 4, 5];

const coffee = {
	id: 1,
	name: "Coffee",
	price: 9.99,
	discount: true,
};

// console.log(Array.isArray(coffee))

const coffeeArray = Object.entries(coffee)
// console.log(coffeeArray)

const coffeeKeys = Object.keys(coffee)
// console.log(coffeeKeys)

const coffeeValues = Object.values(coffee)
// console.log(coffeeValues)