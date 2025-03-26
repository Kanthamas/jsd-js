"use strict";

// OR (||) Operator
// The OR operator returns the first truthy value it encounters.
// If both values are falsy, it returns the last falsy value.
// It checks values from left to right and stops as soon as it finds a truthy value (short-circuiting).
console.log(0 || "Hello"); // "Hello" (0 is falsy, "Hello" is truthy)
console.log("" || 42); // 42 ("" is falsy, 42 is truthy)
console.log(null || undefined); // undefined (both are falsy, returns the last one)
console.log(false || 0); // 0 (both are falsy, returns the last one)
console.log("Hello" || 42 || true);
console.log(0 || null || "JavaScript" || true); 


// AND (&&) Operator
// The AND operator returns the first falsy value it encounters.
// If both values are truthy, it returns the last truthy value.
// It checks values from left to right and stops as soon as it finds a falsy value (short-circuiting).
console.log(5 && "Hello"); // "Hello" (5 is truthy, returns the last value)
console.log(true && 42); // 42 (both are truthy, returns the last one)
console.log(0 && "World"); // 0 (0 is falsy, stops there)
console.log(null && "JS"); // null (null is falsy, stops there)
console.log(0 && "Hello" && 42);
console.log(true && "" && "JavaScript");



// undefined || 0
let firstValue = undefined;
let secondValue = 0;

const RESULT_OF_OR = firstValue || secondValue;
console.log("Result of OR Operator:", RESULT_OF_OR);

const RESULT_OF_AND = firstValue && secondValue;
console.log("Result of AND Operator:", RESULT_OF_AND);
