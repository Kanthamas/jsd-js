const names = ["john", "john", "bob", "john", "bob"];

const frequencyCount = names.reduce((acc, num) => {
	if (acc[num] === undefined) {
		acc[num] = 1;
	} else {
		acc[num] = acc[num] + 1;
	}
	return acc;
}, {});

console.log(frequencyCount);

const frequencyCount2 = names.reduce((acc, num) => {
	acc[num] = (acc[num] || 0) + 1;
	return acc;
}, {});

console.log(frequencyCount2);

// {} -> {john:1} -> {john:2} -> {john:2, bob:1} -> {john:3, bob:1} -> {john:3, bob:2}