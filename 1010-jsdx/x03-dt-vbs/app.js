"use strict";

// 
function User(username, age, city, fruits) {
	this.username = username;
	this.age = age;
	this.city = city;
	this.fruits = fruits;
}

const john = new User("john", 20, "Chiang Mai", ["apple"]);

const mean = john;

console.log(mean);
console.log(`mean === john is ${mean === john}`);

// const mean2 = {...mean}
// console.log(mean2);
// console.log(`mean === mean2 is ${mean === mean2}`);

// const mean3 = {
// 	username: "john",
// 	age: 20,
// 	city: "Chiang Mai",
// 	fruits: ["apple"],
// };

// console.log(mean3);
// console.log(`mean === mean3 is ${mean === mean3}`);

// mean3.city = "Phuket";
// console.log(mean3);

// mean.username = "mean"
// console.log(`mean.username: ${mean.username}`)
// console.log(`john.username: ${john.username}`)