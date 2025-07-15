"use strict";

// 📍 Menus
const bangkokBranchMenu = [
	{ name: "🍕 Pizza", available: true },
	{ name: "🍔 Burger", available: false },
	{ name: "🥗 Salad", available: true },
	{ name: "🍣 Sushi", available: true },
];

const phuketBranchMenu = [
	{ name: "🍩 Donut", available: false },
	{ name: "☕ Coffee", available: true },
	{ name: "🍜 Ramen", available: true },
	{ name: "🍦 Ice Cream", available: false },
];

// ✅ Pure function: just returns available items
function getServingList(branchMenu) {
	const servingList = [];
	for (let i = 0; i < branchMenu.length; i++) {
		const item = branchMenu[i];
		if (item.available) {
			servingList.push(item.name);
		}
	}
	return servingList;
}

// ✨ Separate function for logging
function logServingList(branchName, branchMenu) {
	console.log(`\n🔄 Checking menu for ${branchName} Branch...\n`);
	branchMenu.forEach((item) => {
		if (item.available) {
			console.log(`✅ Serving: ${item.name}`);
		} else {
			console.log(`❌ Sold out: ${item.name}`);
		}
	});
	const available = getServingList(branchMenu);
	console.log(`\n🍽️ Final serving list: ${branchName} Branch`);
	console.log(available.join(", "));
	console.log("-".repeat(30));
}

// 👉 Log Serving List for each branch
logServingList("Bangkok", bangkokBranchMenu);
logServingList("Phuket", phuketBranchMenu);
