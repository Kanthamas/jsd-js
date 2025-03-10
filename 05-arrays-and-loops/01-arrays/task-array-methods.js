"use strict";

// 📝 Task 1: Setup Your Array
const menu = ["🍕 Pizza", "🍔 Burger", "🌮 Taco", "🍣 Sushi", "🥤 Soda"];
console.log("Initial Menu:", menu);

// 🔹 Task 2: Modify the Array (Mutating Methods ✅)
// 1️⃣ Add "🍩 Donut" to the end
menu.push("🍩 Donut");
console.log("After push:", menu);

// 2️⃣ Remove the last item
menu.pop();
console.log("After pop:", menu);

// 3️⃣ Add "☕ Coffee" to the beginning
menu.unshift("☕ Coffee");
console.log("After unshift:", menu);

// 4️⃣ Remove the first item
menu.shift();
console.log("After shift:", menu);

// 5️⃣ Replace "🌮 Taco" with "🥗 Salad"
const tacoIndex = menu.indexOf("🌮 Taco");
if (tacoIndex !== -1) {
	menu.splice(tacoIndex, 1, "🥗 Salad");
}
console.log("After splice (replace Taco with Salad):", menu);

// 6️⃣ Insert "🍎 Apple" and "🍇 Grapes" at index 2
menu.splice(2, 0, "🍎 Apple", "🍇 Grapes");
console.log("After splice (insert Apple & Grapes):", menu);

// 🔹 Task 3: Work with a Copy (Non-Mutating Methods ❌)
// 1️⃣ Create a new array `snacks` containing only "🍕 Pizza" and "🍔 Burger"
const snacks = menu.slice(0, 2);
console.log("Snacks (slice):", snacks);

// 2️⃣ Merge `menu` with `["🍵 Tea", "🍪 Cookie"]`
const updatedMenu = menu.concat(["🍵 Tea", "🍪 Cookie"]);
console.log("After concat:", updatedMenu);

// 3️⃣ Convert the array into a comma-separated string
const menuString = menu.join(", ");
console.log("Joined Menu:", menuString);

// 🔹 Task 4: Explore Spread and Destructuring
// 1️⃣ Clone the `menu` array using the spread operator
const clonedMenu = [...menu];
console.log("Cloned Menu:", clonedMenu);

// 2️⃣ Use array destructuring to extract the first two items
const [firstItem, secondItem] = menu;
console.log("First Item:", firstItem);
console.log("Second Item:", secondItem);

// 🎯 Bonus Challenge: Function to Add/Remove Item from Array
/* function toggleItem(array, item) {
  const index = array.indexOf(item);
  if (index === -1) {
    array.push(item); // Add if not exists
  } else {
    array.splice(index, 1); // Remove if exists
  }
  return array;
}

console.log("Before toggle:", menu);
console.log("Toggle '🍕 Pizza':", toggleItem(menu, "🍕 Pizza"));
console.log("Toggle '🍩 Donut':", toggleItem(menu, "🍩 Donut")); */
