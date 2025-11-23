// let num1 = 100;
// let num2 = 200;
// function add2(num1: number, num2: number) {
// 	return num1 + num2;
// }

// console.log(add2(100, 200));

// console.log(doSomething(123, "mean@email.com"));

function doSomething(number: number, email: string) {
	return `${number} --> ${email}`;
}

// doSomething(123, "mean@email.com")
// console.log(doSomething(123, "mean@email.com"));
// console.log(doSomething("mean@email.com", 123));

// console.log(one);
// console.log(two);
// console.log("before: ", three);

let one = 1
const two = 2
var three = 3
// console.log("After: ", three);

const doSomething2 = function (number: number, email: string) {
	return `doSomething2: ${number} --> ${email}`;
};

// console.log(doSomething2(123, "mean@email.com"));

// const doMore = doSomething2

const doSomething3 = (number: number, email: string) => {
	return `doSomething3: ${number} --> ${email}`;
};

console.log(doSomething3(123, "mean@email.com"));

const doSomething4 = (number: number, email: string) =>
	`doSomething4: ${number} --> ${email}`;

console.log(doSomething4(456, "mean@email.com"));
