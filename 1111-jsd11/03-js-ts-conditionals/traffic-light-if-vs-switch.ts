let light = "yellow";

if (light === "green") {
	console.log("Go");
} else if (light === "yellow") {
	console.log("Slow down");
} else if (light === "red") {
	console.log("Stop");
} else {
	console.log("Invalid light color");
}

// Output: Slow down

switch (light) {
	case "green":
		console.log("Go");
		break;
	case "yellow":
		console.log("Slow down");
		break;
	case "red":
		console.log("Stop");
		break;
	default:
		console.log("Invalid light color");
}

// Output: Slow down