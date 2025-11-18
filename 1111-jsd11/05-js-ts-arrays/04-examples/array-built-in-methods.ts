// Initial myArrayay for examples
const myArray = [1, 2, 3];
console.log("Original myArray:", myArray);

// .push() - Add to the end (mutates)
myArray.push(4);
console.log(".push(4):", myArray); // [1, 2, 3, 4]

// .pop() - Remove from the end (mutates)
const popped = myArray.pop();
console.log(".pop():", popped); // 4
console.log("After pop:", myArray); // [1, 2, 3]

// .unshift() - Add to the start (mutates)
myArray.unshift(0);
console.log(".unshift(0):", myArray); // [0, 1, 2, 3]

// .shift() - Remove from the start (mutates)
const shifted = myArray.shift();
console.log(".shift():", shifted); // 0
console.log("After shift:", myArray); // [1, 2, 3]

// .splice() - Remove/replace elements (mutates)
// Remove 1 element at index 1 and insert 9
myArray.splice(1, 1, 9);
console.log(".splice(1, 1, 9):", myArray); // [1, 9, 3]

// .slice() - Extract part of an myArrayay (does NOT mutate)
const sliced = myArray.slice(1, 3);
console.log(".slice(1, 3):", sliced); // [9, 3]
console.log("After slice, original:", myArray); // [1, 9, 3]

// .concat() - Merge myArrayays (does NOT mutate)
const newMyArray = myArray.concat([4, 5]);
console.log(".concat([4, 5]):", newMyArray); // [1, 9, 3, 4, 5]
console.log("After concat, original:", myArray); // [1, 9, 3]

// .join() - Convert to string (does NOT mutate)
const joined = myArray.join("-");
console.log(".join('-):", joined); // "1-9-3"
console.log("After join, original:", myArray); // [1, 9, 3]
