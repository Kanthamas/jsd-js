let firstValue:undefined = undefined;
let secondValue = 0;

const RESULT_OF_OR = firstValue || secondValue;
console.log("Result of OR Operator:", RESULT_OF_OR);

const RESULT_OF_AND = firstValue && secondValue;
console.log("Result of AND Operator:", RESULT_OF_AND);

// Output: "Result of OR Operator: 0"
// Output: "Result of AND Operator: undefined"