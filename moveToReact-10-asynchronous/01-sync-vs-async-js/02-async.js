console.log("👨‍🍳 Start cooking 🍳");

// 🍝 Pasta process
setTimeout(() => {
	console.log("💦 Boiling water for pasta...");

	setTimeout(() => {
		console.log("♨️ Water boiled, adding pasta 🍝");

		setTimeout(() => {
			console.log("✅ Pasta cooked, pasta ready!");
		}, 5000); // Simulate pasta cooking time
	}, 3000); // Simulate water boiling time
}, 0); // Start boiling water immediately

// 🥩 Meatball process
setTimeout(() => {
	console.log("🥄 Mixing ground meat with spices and shaping meatballs...");

	setTimeout(() => {
		console.log("🔥 Cooking meatballs...");

		setTimeout(() => {
			console.log("✅ Meatballs cooked, meatballs ready!");
		}, 4000); // Simulate meatball cooking time
	}, 2000); // Simulate meatball prep time
}, 0); // Start mixing meatballs immediately

// 🍅 Tomato sauce process
setTimeout(() => {
	console.log("🔪 Chopping tomatoes and vegetables...");

	setTimeout(() => {
		console.log("🍲 Cooking tomato sauce...");

		setTimeout(() => {
			console.log("✅ Tomato sauce cooked, sauce ready!");
		}, 3000); // Simulate sauce cooking time
	}, 1000); // Simulate chopping time
}, 0); // Start chopping immediately

// 🔄 Final cooking process
setTimeout(() => {
	console.log("🍳 Cooking cooked pasta, meatballs in tomato sauce...");

	setTimeout(() => {
		console.log("✅ Pasta with meatballs in tomato sauce ready!");
	}, 2000); // Final cooking time
}, 0); // Start final cooking immediately

// 🍽️ Serving
setTimeout(() => {
	console.log("🎉 Pasta is served! 🍽️🍝");
}, 9000); // Serve after all steps are done
