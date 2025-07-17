"use strict";

// app.js
import { add, multiply } from "./mjs-export.js";
import math from "./mjs-export.js";

console.log(add(2, 3)); // 5
console.log(multiply(12, 34)); // 408

console.log(math.add(2, 3)); // 5
console.log(math.multiply(12, 34)); // 408
