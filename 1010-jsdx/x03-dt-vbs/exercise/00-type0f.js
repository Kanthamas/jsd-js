"use strict";

// 📝 Primitive Types //
const userMessage = "Welcome!";
const itemCount = 100;
const maxLimit = 9007199254740991n;
const isAvailable = false;
const responseStatus = undefined;
const emptyValue = null;
const uniqueId = Symbol("id");

// 📦 Reference Types //
const productList = [1, 2, 3];
const bookInfo = { title: "Book" };
const handleSubmit = function () {};
const currentDate = new Date();
const patternMatch = /hello/;

// ✅ Check and log each type //

// What type of userMessage = "Welcome!"?
console.log("userMessage:", typeof userMessage);
// Your answer

// What type of itemCount = 100?
console.log("itemCount:", typeof itemCount);
// Your answer

// What type of maxLimit = 9007199254740991n?
console.log("maxLimit:", typeof maxLimit);
// Your answer

// What type of isAvailable = false?
console.log("isAvailable:", typeof isAvailable);
// Your answer

// What type of responseStatus = undefined?
console.log("responseStatus:", typeof responseStatus);
// Your answer

// What type of emptyValue = null?
console.log("emptyValue:", typeof emptyValue);
// Your answer

// What type of uniqueId = Symbol("id")?
console.log("uniqueId:", typeof uniqueId);
// Your answer

// What type of productList = [1, 2, 3]? (typeof)
console.log("productList (typeof):", typeof productList);
// Your answer

// Is productList an array?
console.log("productList (Array.isArray):", Array.isArray(productList));
// Your answer

// What type of bookInfo = { title: "Book" }?
console.log("bookInfo:", typeof bookInfo);
// Your answer

// What type of handleSubmit = function () {}?
console.log("handleSubmit:", typeof handleSubmit);
// Your answer

// What type of currentDate = new Date()?
console.log("currentDate:", typeof currentDate);
// Your answer

// What type of patternMatch = /hello/?
console.log("patternMatch:", typeof patternMatch);
// Your answer
