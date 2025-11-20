const numbers = [5, 10, 3, 8, 2, 5, 10, 3, 2];

// forEach() //
// numbers.forEach((number) => console.log(number));
// Output: 5 10 3 8 2 5 10 3 2

// map() //
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);
// Output: [10, 20, 6, 16, 4, 10, 20, 6, 4]

// filter() //
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
// Output: [10, 8, 2, 10, 2]

// reduce() //
// const sum = numbers.reduce((acc, number) => {
// 	acc = acc + number; // acc += num;
// 	return acc;
// }, 0);
// console.log(sum);
// Output: 48

// some() //
// const hasNegative = numbers.some((number) => number < 0);
// console.log(hasNegative);
// Output: false

// every() //
// const allEven = numbers.every((number) => number % 2 === 0);
// console.log(allEven);
// Output: false

// find() //
// const firstEven = numbers.find((number) => number % 2 === 0);
// console.log(firstEven);
// Output: 10

// findIndex() //
// const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(firstEvenIndex);
// Output: 1 (because 10 is at index 1)

/* .reduce() */
// Sum
// const numbers = [5, 10, 3, 8, 2, 5, 10, 3, 2];
const sumByReduce = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sumByReduce); // Output: 48

// Maximum Value:
const max = numbers.reduce(
	(prev, num) => (num > prev ? num : prev),
	numbers[0]
);
// console.log(max); // Output: 10

// Minimum Value:
const min = numbers.reduce(
	(prev, num) => (num < prev ? num : prev),
	numbers[0]
);
// console.log(min); // Output: 2

// Counting the Frequency of Elements (object)
const counters = numbers.reduce((acc, num) => {
	if (acc[num] === undefined) {
		acc[num] = 1;
	} else {
		acc[num] = acc[num] + 1;
	}
	return acc;
}, {});
// console.log(counters);
// Output: { '2': 2, '3': 2, '5': 2, '8': 1, '10': 2 }

// Shorthand
const counters2 = numbers.reduce((acc, num) => {
	acc[num] = (acc[num] || 0) + 1;
	return acc;
}, {});
// console.log(counters2);
// Output: { '2': 2, '3': 2, '5': 2, '8': 1, '10': 2 }

// Counting the Frequency of Elements (object)
const userLoginList = ["john", "john", "bob", "john", "bob"];
const userLoginCounters = userLoginList.reduce((acc, num) => {
	if (acc[num] === undefined) {
		acc[num] = 1;
	} else {
		acc[num] = acc[num] + 1;
	}
	return acc;
}, {});

// console.log(userLoginCounters); // Output: { john: 3, bob: 2 }

// Shorthand
const fuserLoginCounters2 = userLoginList.reduce((acc, num) => {
	acc[num] = (acc[num] || 0) + 1;
	return acc;
}, {});

// console.log(fuserLoginCounters2); // Output: { john: 3, bob: 2 }


/* Chaining Array Methods */
const chainingResult = numbers
  .filter(num => num >= 5)  
  .map(num => num * 2)      
  .sort((a, b) => b - a);   

// Filter out numbers >= 5  -> 	// [ 5, 10, 8, 5, 10 ]
// Double each remaining number -> // [ 10, 20, 16, 10, 20 ]
// Sort in descending order ->	// [ 20, 20, 16, 10, 10 ]
console.log(chainingResult) // [ 20, 20, 16, 10, 10 ]