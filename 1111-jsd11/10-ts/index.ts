/* Types - A type alias gives a name to any type: primitive, union, object, function—anything.*/
/* Syntax */
// type TypeName = valueShape;

/* Primitive Types */
type Username = string;
type Age = number;
type IsValid = boolean;

/* Union Types - choose ONE of these values */
type Status = "success" | "error" | "loading";

/* Object Type */
type Member = {
	name: string;
	age: number;
	isActive: boolean;
	status: Status;
	message?: string;
};

/* Example */
function addMemberMessage(member: Member): Member {
	member.message = member.isActive
		? `Welcome back, ${member.name}!`
		: `${member.name}, please activate your account.`;

	return member;
}

const jane: Member = {
	name: "Jane",
	age: 25,
	isActive: true,
	status: "success",
};

const mark: Member = {
	name: "Mark",
	age: 30,
	isActive: false,
	status: "error",
};

// console.log(addMemberMessage(jane))
// console.log(addMemberMessage(mark))

/* Function Type */
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const multiply: MathOperation = (a, b) => a * b;
const divide: MathOperation = (a, b) => {
	if (b === 0) throw new Error("Cannot divide by zero");
	return a / b;
};

type DivideResult = { success: boolean; result?: number; message?: string };

const divide2 = (a: number, b: number): DivideResult => {
	if (b === 0) {
		return { success: false, message: "Cannot divide by zero" };
	}
	return { success: true, result: a / b };
};

/////////////////////////////////////////////////////

/* Interfaces - An interface describes the shape of an object.*/
/* Syntax */
/* 
interface InterfaceName {
  key: type;
}
*/

/* Object Interface */
interface UserProfile {
	username: string;
	email: string;
	isVerified: boolean;
}

const john: UserProfile = {
	username: "johndoe",
	email: "johndoe@example.com",
	isVerified: true,
};

function printUser(user: UserProfile) {
	console.log(`User: ${user.username}`);
}

// printUser({
// 	username: "sam",
// 	email: "sam@example.com",
// 	isVerified: false,
// });

/* Add Optional Properties */
interface UserProfile {
	age?: number; // optional
}

/* Declaration Merging */
// Interfaces with the same name automatically merge
const alex: UserProfile = {
	username: "alex",
	email: "alex@email.com",
	isVerified: false,
	age: 20,
};

/* Readonly Properties */
interface UserProfileInterface {
	readonly username: string;
	email: string;
	isVerified: boolean;
}

const bobby: UserProfileInterface = {
	username: "bobby",
	email: "bob@email.com",
	isVerified: false,
};

bobby.email = "bobby555@email.com";
// bobby.username = "bobby555"

/* Extending (Inheritance) */
/* Interface extends*/
interface AnimalInterface {
	name: string;
}

interface DogInterface extends AnimalInterface {
	breed: string;
}

const myDog: DogInterface = {
	name: "Buddy",
	breed: "Golden Retriever",
};

/* Type intersect */
type Animal = {
	name: string;
};

type HasOwner = {
	owner: string;
};

type Dog = Animal &
	HasOwner & {
		breed: string;
	};

const johnDog: Dog = {
	name: "Dog",
	breed: "pit bull",
	owner: "John",
};

/* Extending a Class + Implementing an Interface */
/* Interface */
interface VehicleInterface {
	make: string;
	model: string;
}

interface CarInterface extends VehicleInterface {
	readonly doors: number;
	drive(): void;
}

/* Base Class */
class Vehicle {
	make: string;

	constructor(make: string, public model: string) {
		this.make = make;
		this.model = model;
	}

	start() {
		console.log(`${this.make} ${this.model} is starting...`);
	}
}

/* Extended Class implementing interface */
class Car extends Vehicle implements CarInterface {
	constructor(make: string, model: string, readonly doors: number) {
		super(make, model);
		this.doors = doors;
	}

	drive() {
		console.log(
			`${this.make} ${this.model} with ${this.doors} doors is driving!`
		);
	}
}

/* Test */
const myCar = new Car("Tesla", "Model 3", 4);
// myCar.start(); // Tesla Model 3 is starting...
// myCar.drive(); // Tesla Model 3 with 4 doors is driving!
// console.log(myCar.doors); // 4
// myCar.doors = 5
