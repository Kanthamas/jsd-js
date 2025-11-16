"use strict";

/* ------------------------------------
   ✅ Falsy Values in JavaScript
------------------------------------ */
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

/* ------------------------------------
   ✅ Truthy Values in JavaScript
------------------------------------ */
console.log(Boolean(true)); // true
console.log(Boolean(100)); // true
console.log(Boolean(-100)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true (non-empty string)
console.log(Boolean("0")); // true (non-empty string)
console.log(Boolean([])); // true (empty array is truthy)
console.log(Boolean({})); // true (empty object is truthy)
console.log(Boolean(function () {})); // true (functions are truthy)
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

console.log(Infinity); // Infinity
console.log(typeof Infinity); // 'number'

/* ------------------------------------
   🔁 Loose vs Strict Equality
------------------------------------ */
let a = 10;
let b = "10";
console.log(a == b); // true (type coercion)
console.log(a === b); // false (strict comparison)
console.log(a > 5); // true
console.log(a <= 10); // true
console.log(b > 5); // true ('10' gets coerced)
console.log(b <= 10); // true

/* ------------------------------------
   🤯 Special Comparisons & Gotchas
------------------------------------ */
console.log(null == undefined); // true --> null is only loosely equal to undefined (and vice versa), and not equal to anything else.
console.log(null === undefined); // false
console.log(NaN == NaN); // false (NaN is never equal to itself)
console.log("" == 0); // true ("" coerces to 0)
console.log("" === 0); // false
console.log(" " == 0); // true (" " is trimmed → becomes "" coerces to 0)
console.log(" " === 0); // false (ECMAScript spec: whitespace is trimmed before number conversion.)
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true === 1); // false
console.log(false === 0); // false
 
console.log([] == []); // false (different references)
console.log({} == {}); // false (different references)
console.log([] == ""); // true (both coerced to "")
console.log([1] == "1"); // true --> [1].toString() // returns "1"
console.log([1, 2] == "1,2"); // true
console.log(-0 == 0); // true

const fn = function () {};
console.log(fn == fn); // true (same function reference)

const obj = {};
console.log(obj == obj); // true (same object reference)

console.log(false == ""); // true
console.log(null >= 0); // true (null → 0)
console.log(null == 0); // false

/* ------------------------------------
   🧪 Weird Coercions and Addition
------------------------------------ */
console.log([] + [] == 0); // true ('' == 0)
console.log({} + {} == 0); // false (object-to-string weirdness)
console.log([] + [] === 0); // false ('' !== 0)
console.log({} + {} === 0); // false

console.log([] + 1 == 1); // true ('' + '1' == '1' == 1)
