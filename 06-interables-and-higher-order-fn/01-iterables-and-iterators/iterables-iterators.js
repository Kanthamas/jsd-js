"use strict";
// Iterables
/* const iterable = ["item1", "item2", "item3"];
for (const item of iterable) {
	console.log(item); // item1, item2, item3
} */

// Iterating over a shopping cart (array of items).
/* const cart = ["💻 Laptop", "🎧 Headphone", "📷 Camera"];
for (const item of cart) {
	console.log(`Buying: ${item}`);
} */

// Strings allow character-by-character iteration.
/* const word = "Hello";
for (const char of word) {
	console.log(char); // H, e, l, l, o
} */

// Works with spread syntax.
/* const letters = [...word]; 
console.log(letters) // ['H', 'e', 'l', 'l', 'o'] */

// Map stores unique key-value pairs and preserves insertion order.
/* const userRoles = new Map([
	["John", "Admin"],
	["Bob", "User"],
]);
console.log(userRoles); // Map(2) { 'John' => 'Admin', 'Bob' => 'User' }

for (const [key, value] of userRoles) {
	console.log(key, value); // John Admin, Bob User
} */

//  You can iterate over keys or values separately
/* for (const key of userRoles.keys()) console.log(key); // John, Bob
for (const value of userRoles.values()) console.log(value); // Admin, User */

// Set stores only unique values, making it iterable.
/* const uniqueNums = new Set([1, 2, 3, 3, 2, 1]);
for (const num of uniqueNums) {
	console.log(num); // 1, 2, 3
} */

// Iterator Syntax
/* const iterable = ["A", "B", "C"];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); // { value: 'A', done: false }
console.log(iterator.next()); // { value: 'B', done: false }
console.log(iterator.next()); // { value: 'C', done: false }
console.log(iterator.next()); // { value: undefined, done: true } */


// Manually iterating over a customer queue.
/* function customerQueue(customers) {
  let index = 0;
  return {
    next: () => (index < customers.length ? 
      { value: customers[index++], done: false } : 
      { done: true })
  };
}

const queue = customerQueue(["John", "Bob", "Mark"]);
console.log(queue.next().value); // John
console.log(queue.next().value); // Bob
console.log(queue.next().value); // Mark
console.log(queue.next().value); // undefined
console.log(queue.next().done);  // true */
