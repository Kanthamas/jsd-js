"use strict";

const person = {
	name: "John",
	age: 30,
	drinks: ["☕ coffee", "🍋 lemonade"],
	luckyNumber: 555,
	address: {
		street: "123 Main Road",
		city: "Chiang Mai",
		country: null,
	},
	greet: function () {
		console.log(`Hi, I'm ${this.name}!`);
	},
	drink() {
		console.log(`I drink ${this.drinks[0]}.`);
	},
	arrowFnThis: () => console.log(this, this.name),
};
// console.log(person);
// console.log(person.name);
// console.log(person.drinks[1]);
// console.log(person.address.street);
// console.log(person["address"]["street"]);
// person.greet();
// person.drink();
// console.log(person.address?.country ?? "Thailand");
// person.arrowFnThis();

/* 📌 What is this in JavaScript?
👉 this is a special keyword that automatically appears inside functions and objects.
👉 It refers to the object that is currently “owning” or “calling” the code 
👉 In strict mode / ES modules, top-level this is undefined.
👉 In non-strict script, top-level this is the global object (window in browsers). 
👉 Arrow function will capture this from the outer scope.*/
/* const obj = {
	value: 42,
	regular() {
		const arrowFn = () => {
			console.log(this.value); // ✅ this comes from regular()'s this (obj)
		};
		arrowFn();
	},
};
obj.regular(); // 42 */
