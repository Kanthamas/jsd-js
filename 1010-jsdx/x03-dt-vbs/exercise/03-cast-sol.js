"use strict";

let myValue = "123.45";

// 👉 Your task: Convert 'myValue' into a number using these 4 methods:
let numberValue1 = Number(myValue); // using Number()
let numberValue2 = parseInt(myValue); // using parseInt()
let numberValue3 = parseFloat(myValue); // using parseFloat()
let numberValue4 = +myValue; // using unary plus (+)

// ✅ Check:
console.log(typeof numberValue1, numberValue1);
console.log(typeof numberValue2, numberValue2);
console.log(typeof numberValue3, numberValue3);
console.log(typeof numberValue4, numberValue4);

let myValue2 = 123.45;

// 👉 Your task: Convert 'myValue' into a string using these 3 methods:
let string1 = String(myValue2); // using String()
let string2 = myValue2.toString(); // using .toString()
let string3 = `${myValue2}`; // using template literal

// ✅ Check:
console.log(typeof string1, string1);
console.log(typeof string2, string2);
console.log(typeof string3, string3);
