// Is sort() a Higher-Order Function (HOF)?

// Default Behavior (sort() Without a Function) → ❌ Not a HOF

const classmates = ["john", "zack", "mark", "alex", "anne", "bob"];
// classmates.sort();
// console.log(classmates); // [ 'alex', 'anne', 'bob', 'john', 'mark', 'zack' ]

/* const numbers = [25, 3, 100, 50];
numbers.sort();
console.log(numbers); // [ 100, 25, 3, 50 ] */

const points = [5, 3, 1, 20, 11, 2, 9, 100];
// points.sort();
// console.log(points) // [ 1, 100, 11, 2, 20, 3,  5, 9]

// Using sort() With a Compare Function → ✅ HOF
// Ascending Order  (a, b) => a - b
// points.sort((a, b) => a - b);
// console.log(points); // [1, 2, 3, 5, 9, 11, 20, 100]

// Descending Order  (a, b) => b - a
// points.sort((a, b) => b - a);
// console.log(points); // [100, 20, 11, 9, 5, 3, 2, 1]

// sort() localeCompare()
const words = ["aaa", "AAA", "ab", "a", "A", "a1", "a2", "a100"];

// Default sort
//@ts-ignore
// console.log("default sort: ", words.sort());
// ["A", "AAA", "a", "a1", "a100", "a2", "aaa", "ab"];

// Locale compare
const newSortedWords = words.sort((a: string, b: string) => a.localeCompare(b));
// console.log("new sorted array: ", newSortedWords);
// ["a", "A", "a1", "a100", "a2", "aaa", "AAA", "ab"];

const thaiWords = [
	"ก", 
	"ม้า",
	"การบ้าน",
	"ม",
	"ลิงงงงง",
	"ลิ",
	"ลา",
	"ลิง",
	"ลม",
	"กก",
	"มาก",
	"มากกกกกกก",
	"ก๊า",
	"กา",
	"ก๋า",
	"มา",
	"ก่า",
];
const newSortedThais = thaiWords.sort((a: string, b: string) =>
	a.localeCompare(b, "th")
);
// console.log(thaiWords.sort());
console.log(newSortedThais);

const text = "มาก";
for (const ch of text) {
	console.log(ch, ch.codePointAt(0));
}