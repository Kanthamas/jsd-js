"use strict";

// Using for Loop
const foods = ["🍕 Pizza", "🍔 Burger", "🌮 Taco"];

for (let i = 0; i < foods.length; i++) {
	if (foods[i] === "🍔 Burger") {
		foods[i] = "🥗 Salad";
	}
	console.log(`${i}: ${foods[i]}`);
}
/*
Output:
0: 🍕 Pizza
1: 🥗 Salad
2: 🌮 Taco
*/

// Using for...of Loop
const drinks = ["☕ Coffee", "🍵 Tea", "🥤 Soda"];

for (let drink of drinks) {
	console.log(`I like ${drink}`);
}
/*
Output:
I like ☕ Coffee
I like 🍵 Tea
I like 🥤 Soda
*/

// Using .forEach()
const desserts = ["🍦 Ice Cream", "🍩 Donut", "🍪 Cookie"];

desserts.forEach((dessert, index) => {
	console.log(`${index + 1}. ${dessert}`);
});
/*
Output:
1. 🍦 Ice Cream
2. 🍩 Donut
3. 🍪 Cookie
*/
