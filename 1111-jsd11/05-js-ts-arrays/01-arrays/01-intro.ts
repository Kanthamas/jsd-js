const fruits = ["🍎 Apple", "🍉 Watermelon", "🍒 Cherries"];
// console.log(fruits[0]); // "🍎 Apple"

/* const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true ✅ */

// Acces array with index
/* console.log(fruits[0]); // "🍎 Apple" (First element)
console.log(fruits[1]); // "🍉 Watermelon" (Second element)
console.log(fruits[fruits.length - 1]); // "🍒 Cherries" (Last element) */

// Access Nested Array
/* const matrix = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
];

console.log(matrix[0][0]); // 1 (Row 0, Column 0)
console.log(matrix[0][1]); // 2 (Row 0, Column 1)
console.log(matrix[1][2]); // 6 (Row 2, Column 3) */

// Array are mutable
// console.log(fruits[0]);
// console.log(fruits);

fruits[0] = "🍍 Pineapple";

// console.log(fruits[0]);
// console.log(fruits);

// Mofify out of range index
// console.log(fruits.length)

// fruits[5] = "🍊 Orange";
// console.log(fruits);
// console.log(fruits.length);

/* for (let fruit of fruits) {
  console.log(fruit)
} */

// Destructuring for Quick Access
/* const [first, second, third] = ["🍕 Pizza", "🍔 Burger", "🌭 Hot Dog"];
console.log(first);  // "🍕 Pizza"
console.log(second); // "🍔 Burger"
console.log(third); // "🌭 Hot Dog" */

// Skipping Element
/* const [bike, , rocket] = ["🚲 Bike", "🚗 Car", "🚀 Rocket"];
console.log(rocket); // "🚀 Rocket" */

// Spread Operator
/* const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5] */

// Rest Operator
/* const [one, ...rest] = [1, 2, 3, 4, 5];
console.log(one); // 1
console.log(rest); // [2, 3, 4, 5] */
