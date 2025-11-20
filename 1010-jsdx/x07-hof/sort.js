// "use strict";
// // Is sort() a Higher-Order Function (HOF)?

// // Default Behavior (sort() Without a Function) → ❌ Not a HOF

// const classmates = ["john", "zack", "mark", "alex", "anne", "bob"]
// classmates.sort()
// console.log(classmates) // [ 'alex', 'anne', 'bob', 'john', 'mark', 'zack' ]

// /* const numbers = [25, 3, 100, 50];
// numbers.sort(); 
// console.log(numbers); // [ 100, 25, 3, 50 ] */

// // Using sort() With a Compare Function → ✅ HOF
// // Ascending Order  (a, b) => a - b
// /* numbers.sort((a, b) => a - b);
// console.log(numbers); // [3, 25, 50, 100]  */

// // Descending Order  (a, b) => b - a
// /* numbers.sort((a, b) => b - a);
// console.log(numbers); // [100, 50, 25, 3] */

// // sort() localeCompare()
// const words = ["aaa", "AAA", "ab", "a", "A", "a1", "a2", "a100"];

// // Default sort
// console.log("default sort: ", words.toSorted()); 
// // ["A", "AAA", "a", "a1", "a100", "a2", "aaa", "ab"];

// // Locale compare sort
// console.log(
// 	"localeCompare sort: ",
// 	words.toSorted((a, b) => a.localeCompare(b))
// );
// // ["a", "A", "a1", "a100", "a2", "aaa", "AAA", "ab"];

// // Case-insensitive sort
// /* console.log(
// 	words.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }))
// ); */
