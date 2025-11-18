interface MenuItem {
	name: string;
	available: boolean;
}

// 📍 Menus
const bangkokBranchMenu: MenuItem[] = [
	{ name: "🍕 Pizza", available: true },
	{ name: "🍔 Burger", available: false },
	{ name: "🥗 Salad", available: true },
	{ name: "🍣 Sushi", available: true },
];

const phuketBranchMenu: MenuItem[] = [
	{ name: "🍩 Donut", available: false },
	{ name: "☕ Coffee", available: true },
	{ name: "🍜 Ramen", available: true },
	{ name: "🍦 Ice Cream", available: false },
];

// ✅ Pure function: just returns available items
function getServingList(branchMenu: MenuItem[]) {
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
function logServingList(branchName: string, branchMenu: MenuItem[]) {
	console.log(`\n🔄 Checking menu for ${branchName} Branch...\n`);
	branchMenu.forEach((item) => {
		if (item.available) {
			console.log(`✅ Serving: ${item.name}`);
		} else {
			console.log(`❌ Sold out: ${item.name}`);
		}
	});
	const available = getServingList(branchMenu);
	// const available = getServingListHOF(branchMenu);
	console.log(`\n🍽️ Final serving list: ${branchName} Branch`);
	console.log(available.join(", "));
	console.log("-".repeat(30));
}

// 👉 Log Serving List for each branch
logServingList("Bangkok", bangkokBranchMenu);
logServingList("Phuket", phuketBranchMenu);

// HOF
/* function getServingListHOF(branchMenu: MenuItem[]) {
	return branchMenu
		.filter((item) => item.available) // only available items
		.map((item) => item.name); // extract names
} */

// HOF: .filter()
/* const availableMenu = (branchMenu: MenuItem[]) =>
	branchMenu.filter((item) => item.available); */

// console.log(availableMenu(bangkokBranchMenu));
// console.log(availableMenu(phuketBranchMenu))

// HOF: .map()
/* const servingListMenu = (availableMenu: MenuItem[]) =>
	availableMenu.map((item) => item.name); */

// console.log(servingListMenu(availableMenu(bangkokBranchMenu)));
// console.log(servingListMenu(availableMenu(phuketBranchMenu)));
