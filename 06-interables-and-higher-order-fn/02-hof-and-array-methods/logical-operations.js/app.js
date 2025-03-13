"use strict";

// General Behavior of || (OR Operator)
/* The OR operator returns the first truthy value it encounters or the last falsy value. */
let firstValue = 0;
let secondValue = undefined;
const RESULT_OF_OR = firstValue || secondValue;
console.log("Result of OR Operator:", RESULT_OF_OR);

const RESULT_OF_AND = firstValue && secondValue;
console.log("Result of AND Operator:", RESULT_OF_AND);
