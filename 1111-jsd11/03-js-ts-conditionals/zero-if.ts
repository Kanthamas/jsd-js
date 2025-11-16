let count = 0;

if (count) {
	console.log("Count exists!");
} else {
	console.log("Count is zero or falsy.");
}
// Output: "Count is zero or falsy." (Because `0` is falsy)


if (typeof count === "number" && count === 0) {
	console.log("Count is exactly zero.");
} else {
	console.log("Count is nonzero.");
}
// Output: Count is exactly zero.