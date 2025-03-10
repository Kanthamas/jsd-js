"use strict";

let i = 5;
console.log("i   ->", i);
console.log("i++ ->", i++); // 5 (uses old value first)
console.log("i   ->", i); // 6
console.log("++i ->", ++i); // 7 (increments first, then prints)

let j = 5;
console.log("j   ->", j);
console.log("j-- ->", j--); // 5 (uses old value first)
console.log("j   ->", j); // 4
console.log("--j ->", --j); // 3 (decrements first, then prints)
