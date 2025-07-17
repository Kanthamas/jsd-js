"use strict";

// app.js
const { add, multiply } = require("./cjs-export.js");
const math = require("./cjs-export.js");

console.log(add(2, 3)); // 5
console.log(multiply(12, 34)); // 408

console.log(math.add(2, 3)); // 5
console.log(math.multiply(12, 34)); // 408
