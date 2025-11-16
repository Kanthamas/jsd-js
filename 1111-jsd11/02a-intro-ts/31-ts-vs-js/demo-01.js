const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(add("2", 3)); // "23" 😬 (bug not caught)
