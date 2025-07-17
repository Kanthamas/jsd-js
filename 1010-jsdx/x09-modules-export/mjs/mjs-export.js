"use strict";

// math.js
// Named Exports:
export function add(a, b) {
	return a + b;
}
export function multiply(a, b) {
	return a * b;
}

// Default Export:
const math = {
	add,
	multiply,
};
export default math;
