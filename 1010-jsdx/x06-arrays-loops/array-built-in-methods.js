"use strict";
// Initial array for examples
const arr = [1, 2, 3];
console.log("Original array:", arr);

// .push() - Add to the end (mutates)
arr.push(4);
console.log(".push(4):", arr); // [1, 2, 3, 4]

// .pop() - Remove from the end (mutates)
const popped = arr.pop();
console.log(".pop():", popped);  // 4
console.log("After pop:", arr);  // [1, 2, 3]

// .unshift() - Add to the start (mutates)
arr.unshift(0);
console.log(".unshift(0):", arr); // [0, 1, 2, 3]

// .shift() - Remove from the start (mutates)
const shifted = arr.shift();
console.log(".shift():", shifted); // 0
console.log("After shift:", arr);  // [1, 2, 3]

// .splice() - Remove/replace elements (mutates)
// Remove 1 element at index 1 and insert 9
arr.splice(1, 1, 9);
console.log(".splice(1, 1, 9):", arr); // [1, 9, 3]

// .slice() - Extract part of an array (does NOT mutate)
const sliced = arr.slice(1, 3);
console.log(".slice(1, 3):", sliced); // [9, 3]
console.log("After slice, original:", arr); // [1, 9, 3]

// .concat() - Merge arrays (does NOT mutate)
const newArr = arr.concat([4, 5]);
console.log(".concat([4, 5]):", newArr); // [1, 9, 3, 4, 5]
console.log("After concat, original:", arr); // [1, 9, 3]

// .join() - Convert to string (does NOT mutate)
const joined = arr.join("-");
console.log(".join('-):", joined); // "1-9-3"
console.log("After join, original:", arr); // [1, 9, 3]
