"use strict";
// Global-Function-Block Scopes //

let globalVariable = "I am global 🌏";

function myFunction() {
	let functionVariable = "I am in function scope 🏭";

	if (true) {
		let blockVariable = "I am in block scope 📦";
		var blockVariableFunc = "I am block scoped 📦 with var (function scope 🏭)";

		// Logging in Block Scope 📦//
		// console.log("blockVariable in if(){}📦:", blockVariable);
		// console.log("blockVariableFunc in if(){}📦:", blockVariableFunc);

		// console.log("functionVariable in if(){}📦:", functionVariable);

		// console.log("globalVariable in if(){}📦:", globalVariable);
	}

	// Logging in Function Scope 🏭//
	// console.log("blockVariable in myFunction()🏭:", blockVariable);
	// console.log("blockVariableFunc in myFunction()🏭:", blockVariableFunc);

	// console.log("functionVariable in myFunction()🏭:", functionVariable);

	// console.log("globalVariable in myFunction()🏭:", globalVariable);
}

myFunction();

// Logging in Global Scope 🌏//
// console.log("blockVariable in global🌏:", blockVariable);
// console.log("blockVariableFunc in global🌏:", blockVariableFunc);

// console.log("functionVariable in global🌏:", functionVariable);

// console.log("globalVariable in global🌏:", globalVariable);

// Lecical Scope //
/* function outer() {
	let outerVariable = "I am from outer ☔";

	function inner() {
    // let outerVariable = "I am from outer ☔ (Nope! I'm from inner 💧)";
    let innerVariable = "I'm from inner 💧";
		
    console.log(innerVariable);
		// console.log(outerVariable);
	}

	inner();
}

outer(); */
