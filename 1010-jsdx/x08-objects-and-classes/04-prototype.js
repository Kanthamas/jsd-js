"use strict";

function Animal(name) {
	this.name = name;
}
Animal.prototype.speak = function () {
	console.log(`${this.name} makes a sound`);
};

const dog = new Animal("Doggo");

console.log(dog);
dog.speak(); // Doggo makes a sound

// console.log(dog.__proto__ === Animal.prototype); // true
// console.log(Object.getPrototypeOf(dog) === Animal.prototype); // true
