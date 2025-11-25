// Using for Loop
/* const foods = ["🍕 Pizza", "🍔 Burger", "🌮 Taco"];

for (let i = 0; i < foods.length; i++) {
	if (foods[i] === "🍔 Burger") {
		foods[i] = "🥗 Salad";
	}
	console.log(`${i+10}: ${foods[i]}`);
} */
/*
Output:
0: 🍕 Pizza
1: 🥗 Salad
2: 🌮 Taco
*/

// Using for...of Loop
/* const drinks = ["☕ Coffee", "🍵 Tea", "🥤 Soda"];

for (let drink of drinks) {
	console.log(`I like ${drink}`);
} */
/*
Output:
I like ☕ Coffee
I like 🍵 Tea
I like 🥤 Soda
*/

// Using .forEach()
/* const desserts = ["🍦 Ice Cream", "🍩 Donut", "🍪 Cookie"];

desserts.forEach((dessert, index) => {
	console.log(`${index + 1}. ${dessert}`);
}); */
/*
Output:
1. 🍦 Ice Cream
2. 🍩 Donut
3. 🍪 Cookie
*/

/* While Loop */
/* let i = 0;
while (i < 5) {
	console.log(i); // Prints 0, 1, 2, 3, 4
	i++;
}
 */

/* Nested For Loops */
// for (let i = 0; i < 3; i++) {
// 	let stars = "";
// 	for (let j = 0; j < 30; j++) {
// 		stars += "* "; // Add a star to the row
// 	}
// 	console.log(stars); // Print one row of stars
// }

/* function draw_tree(height) {
	for (let i = 1; i <= height; i++) {
		// Print spaces before stars
		let row = "";

		for (let j = 0; j < height - i; j++) {
			row += " ";
		}

		// Print stars
		for (let j = 0; j < 2 * i - 1; j++) {
			row += "*";
		}

		console.log(row);
	}
}

// Call the function
draw_tree(5); */