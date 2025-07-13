"use strict";

// 🧪 Accessing before declaration

console.log("num1 (var) before declaration:", num1); // ✅ undefined

try {
	console.log("num2 (let) before declaration:", num2); // ❌ ReferenceError
} catch (err) {
	console.log("num2 (let) before declaration: ERROR →", err.message);
}

try {
	console.log("num3 (const) before declaration:", num3); // ❌ ReferenceError
} catch (err) {
	console.log("num3 (const) before declaration: ERROR →", err.message);
}

try {
	console.log("num4 (let unassigned) before declaration:", num4); // ❌ ReferenceError
} catch (err) {
	console.log("num4 (let unassigned) before declaration: ERROR →", err.message);
}

// 🧾 Variable declarations

var num1 = 111; // Hoisted and initialized as undefined
let num2 = 222; // Hoisted but not initialized [Temporal Dead Zone (TDZ)]
const num3 = 333; // Hoisted but not initialized [TDZ] — must assign at declaration

// 🧾 let declared without assignment (undefined by default after TDZ ends)
let num4; // Declared, no value assigned → initialized to undefined after TDZ

// ✅ Access after declaration
console.log("num1 (var) after declaration:", num1); // 111
console.log("num2 (let) after declaration:", num2); // 222
console.log("num3 (const) after declaration:", num3); // 333
console.log("num4 (let unassigned) after declaration:", num4); // undefined
