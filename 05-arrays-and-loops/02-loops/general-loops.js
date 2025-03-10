"use strict";

// for loop
for (let i = 0; i < 5; i++) {
	console.log(i); // Prints 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
	console.log(i); // Prints 0, 1, 2, 3, 4
	i++;
}

// do...while loop
let j = 0;
do {
	console.log(j); // Prints 0, 1, 2, 3, 4
	j++;
} while (j < 5);

// nested loops
/* for (let i = 0; i < 3; i++) {
	let stars = "";
	for (let j = 0; j < 3; j++) {
		stars += "* "; // Add a star to the row
	}
	console.log(stars); // Print one row of stars
} */

/* for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		console.log(i * j); // Prints multiplication results
	}
} */

// nested for loops to print the values in a 2D array (a matrix)
/* const matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// Loop through each row (outer loop)
for (let i = 0; i < matrix.length; i++) {
	// Loop through each column in the row (inner loop)
	for (let j = 0; j < matrix[i].length; j++) {
		console.log(matrix[i][j]); // Prints each element in the matrix
	}
} */
