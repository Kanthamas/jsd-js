function checkLogic(x:number, y:number) {
	let P = x >= 2;
	let Q = y <= 4;

	console.log("x is", x);
	console.log("y is", y);
	console.log("P (x >= 2):", P);
	console.log("Q (y <= 4):", Q);
	console.log("NOT P:", !P);
	console.log("NOT Q:", !Q);
	console.log("P AND Q:", P && Q);
	console.log("P OR Q:", P || Q);
	console.log("P => Q:", !P || Q); // Implication
	console.log("P <=> Q:", (P && Q) || (!P && !Q)); // Biconditional
}

checkLogic(3, 4); // Example case: x = 3, y = 4
