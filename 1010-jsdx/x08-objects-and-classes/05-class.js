"use strict";
// Class syntax //
/* class ClassName {
	constructor(params) {
		this.property = params;
	}
	methodName() {
		// behavior //
	}
}

const obj = new ClassName("args");
obj.methodName(); */

// Factory Function //
function createAnimal(name) {
	return {
		name: name,
		speak() {
			console.log(`${this.name} makes a sound`);
		},
	};
}
const dog1 = createAnimal("Doggo");

dog1.speak();
console.log(dog1);

// Constructor Function //
function AnimalFn(name) {
	this.name = name;
}
AnimalFn.prototype.speak = function () {
	console.log(`${this.name} makes a sound`);
};

const dog2 = new AnimalFn("Doggo");

dog2.speak();
console.log(dog2);

// Class //
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
}
const dog3 = new Animal("Doggo");
dog3.speak();
console.log(dog3);

// Class Example //
class Employee {
	constructor(name, role) {
		this.name = name;
		this.role = role;
	}
	work() {
		console.log(`${this.name} is working as ${this.role}.`);
	}
}

const johnDev = new Employee("John Doe", "Software Developer");
johnDev.work();

// Static Methods //
class MyClass {
	static helper() {
		/* do something */
	}
}
MyClass.helper(); // call directly

class Animal {
	static classify() {
		console.log("Animals are living beings");
	}
}
Animal.classify();

// Public and Static Fields (And Getter, Setter)//
class Example {
	#privateField = 0;
	get field() {
		return this.#privateField;
	}
	set field(value) {
		this.#privateField = value;
	}
}

class Product {
	publicName = "Unnamed product"; // public field
	#price = 0; // private field

	constructor(name, price) {
		this.publicName = name; // set public field
		if (price < 0) throw new Error("Price cannot be negative");
		this.#price = price; // set private field
	}

	get price() {
		return this.#price;
	}
	set price(value) {
		if (value < 0) throw new Error("Price cannot be negative");
		this.#price = value;
	}
}

const p1 = new Product("Laptop", 1500);
console.log(p1.publicName); // ✅ "Laptop"
p1.publicName = "Gaming Laptop"; // ✅ update public field
console.log(p1.publicName); // ✅ "Gaming Laptop"
console.log(p1.price); // ✅ 1500 via getter
p1.price = 2000; // ✅ update private field via setter
console.log(p1.price); // ✅ 2000 via getter
// p1.#price = 9999; // ❌ cannot access directly (SyntaxError)

// Inheritance & Polymorphism (extends) //
class Parent {
	method() {
		console.log("Parent method");
	}
}
class Child extends Parent {
	method() {
		console.log("Child method");
	}
}

class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(`${this.name} makes a sound`);
	}
}
class LandAnimal extends Animal {
	move() {
		console.log(`${this.name} walks on land`);
	}
}
class Cat extends LandAnimal {
	speak() {
		console.log(`${this.name} says Meow`);
	}
}
class SeaAnimal extends Animal {
	constructor(name, color) {
		// ✅ must call super(name) before using `this`
		super(name);
		this.color = color;
	}
	move() {
		console.log(`${this.name} swims in water`);
	}
}
class Fish extends SeaAnimal {
	speak() {
		console.log(`${this.name} (color: ${this.color}) blubs silently`);
	}
}

const kitty = new Cat("Kitty");
kitty.speak();
kitty.move();

const nemo = new Fish("Nemo", "orange");
nemo.speak();
nemo.move();
