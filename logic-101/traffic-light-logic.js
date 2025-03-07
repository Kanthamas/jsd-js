// Logical Operations in a Traffic Light
// 1. AND Logic (&&) - Safe to Go
/* function canCarMove(light, roadClear) {
	return light === "green" && roadClear;
}

console.log(canCarMove("green", true)); // ✅ true (Car moves)
console.log(canCarMove("green", false)); // ❌ false (Obstacle ahead)
console.log(canCarMove("red", true)); // ❌ false (Wait for green) */

// 2. OR Logic (||) - Special Cases for Moving
/* function canCarMoveOverride(light, policeSignal) {
	return light === "green" || policeSignal;
}

console.log(canCarMoveOverride("red", true)); // ✅ true (Police overrides)
console.log(canCarMoveOverride("green", false)); // ✅ true (Normal green light)
console.log(canCarMoveOverride("red", false)); // ❌ false (Car must stop) */

// 3. NOT Logic (!) - When to Stop 🚫
/* function shouldCarStop(light) {
	return light !== "green";
}

console.log(shouldCarStop("green")); // ❌ false (Car keeps moving)
console.log(shouldCarStop("red")); // ✅ true (Car stops)
console.log(shouldCarStop("yellow")); // ✅ true (Car stops) */

// Smart Traffic Light 🚦🤖
function smartTrafficLight(light, emergencyDetected) {
	if (emergencyDetected) {
		return true; // Override: An emergency vehicle is detected.
	}
	return light === "green";
}

console.log(smartTrafficLight("green", true)); // ✅ true (Override)
console.log(smartTrafficLight("yellow", true)); // ✅ true (Override)
console.log(smartTrafficLight("red", true)); // ✅ true (Override)
console.log(smartTrafficLight("green", false)); // ✅ true (Normal movement)
console.log(smartTrafficLight("yellow", false)); // ❌ false (Stop)
console.log(smartTrafficLight("red", false)); // ❌ false (Stop)
