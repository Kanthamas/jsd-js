for (var i = 0; i < 3; i++) {
	// setTimeout(() => console.log(i), 0);
	console.log(i);
}

const varFunc = () => {
	for (var i = 0; i < 3; i++) {
		// setTimeout(() => console.log(i), 0);
		console.log(i);
	}
};
varFunc();

for (let i = 0; i < 3; i++) {
	// setTimeout(() => console.log(i), 0);
	console.log(i);
}

const letFunc = () => {
	for (let i = 0; i < 3; i++) {
		// setTimeout(() => console.log(i), 0);
		console.log(i);
	}
};
letFunc();
