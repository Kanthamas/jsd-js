"use strict";
function testDataTypes() {
	// Primitive types (copied by value)
	let myNickname = "johndoe";
	let yourNickname = myNickname;
	yourNickname = 555;

	console.log("Primitive Types:");
	console.log("myNumber:", myNickname);
	console.log("yourNickname:", yourNickname);
	console.log(myNickname == yourNickname);
	console.log(myNickname === yourNickname);

	// Reference types (copied by reference)
	let myObject = { totalPoints: 10, nickname: "johndoe" };
	let yourObject = myObject;
	yourObject.totalPoints = 20;
	yourObject.nickname = "jsd";

	console.log("Reference Types:");
	console.log("myObject:", myObject);
	console.log("yourObject:", yourObject);
	console.log(myObject == yourObject);
	console.log(myObject === yourObject);

	let yourNewObject = { ...yourObject };
	console.log("yourNewObject", yourNewObject);
	console.log(yourNewObject == yourObject);
	console.log(yourNewObject === yourObject);

	let myNewObject = { totalPoints: 10, nickname: "johndoe" };
	console.log("myNewObject", myNewObject);
	console.log(myNewObject == myObject);
	console.log(myNewObject === myObject);
}

testDataTypes();
