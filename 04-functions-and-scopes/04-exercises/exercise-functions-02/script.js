"use strict";
// Task 02-1: Remove Extra Space
function removeExtraSpaces(str) {
	return str.trim().replace(/\s+/g, " ");
}

console.log(removeExtraSpaces("   John   Doe   ")); // Output: "John Doe"
console.log(removeExtraSpaces("   Hello world!   ")); // Output: "Hello world!"
console.log(removeExtraSpaces("   ")); // Output: ""
console.log(removeExtraSpaces("Hello    world!")); // Output: "Hello world!"

// Task 02-2: Join Words with Hyphen and Convert to Lowercase
function joinAndLowercaseWords(words) {
	return words.join("-").toLowerCase();
}

console.log(joinAndLowercaseWords(["T-shirt", "L", "Blue"])); // Output: "t-shirt-l-blue"
console.log(joinAndLowercaseWords(["Apple", "iPad", "pro", "2025"])); // Output: "apple-ipad-pro-2025"
console.log(joinAndLowercaseWords(["TODAY", "is", "a", "Present"])); // Output: "today-is-a-present"
console.log(joinAndLowercaseWords([])); // Output: ""
