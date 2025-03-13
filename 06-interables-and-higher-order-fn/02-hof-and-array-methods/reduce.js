"use strict";
// Summing All Elements in an Array
/* const numbers = [5, 10, 3, 8, 2];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 28 */

// Finding the Maximum or Minimum Value
// Maximum Value:
/* const numbers = [5, 10, 3, 8, 2];
const max = numbers.reduce((prev, num) => (num > prev ? num : prev), numbers[0]);
console.log(max); // Output: 10 */

// Minimum Value:
/* const numbers = [5, 10, 3, 8, 2];
const min = numbers.reduce((prev, num) => (num < prev ? num : prev), numbers[0]);
console.log(min); // Output: 2 */

// Counting the Frequency of Elements
// Long version
const numbers = [5, 10, 3, 8, 2, 5, 10, 3, 2];
const frequencyCount = numbers.reduce((acc, num) => {
	if (acc[num] === undefined) {
		acc[num] = 1;
	} else {
		acc[num] = acc[num] + 1;
	}
	return acc;
}, {});

console.log(frequencyCount);

// Shorthand version
const frequencyCountShorthand = numbers.reduce((acc, num) => {
	acc[num] = (acc[num] || 0) + 1; 
	return acc;
}, {});
console.log(frequencyCountShorthand);
// Output: { '2': 2, '3': 2, '5': 2, '8': 1, '10': 2 }
