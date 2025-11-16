let username = "John";
let userPassword = "12345";

if (username === "John") {
	if (userPassword === "12345") {
		console.log("Login successful!");
	} else {
		console.log("Incorrect password.");
	}
} else {
	console.log("Username not found.");
}
// Output: "Login successful!"


// Checking order status and delivery availability
let orderStatus = "confirmed";
let deliveryAvailable = true;

if (orderStatus === "confirmed") {
    if (deliveryAvailable) {
        console.log("Your order is on the way!");
    } else {
        console.log("Delivery is not available.");
    }
} else {
    console.log("Order not confirmed.");
}

// Output: "Your order is on the way!"

// Refactor
if (orderStatus !== "confirmed") {
	console.log("Order not confirmed.");
} else if (!deliveryAvailable) {
	console.log("Delivery is not available.");
} else {
	console.log("Your order is on the way!");
}

// Guard clause
function checkOrder(orderStatus: string, deliveryAvailable: boolean) {
  if (orderStatus !== "confirmed") {
    console.log("Order not confirmed.");
    return;
  }

  if (!deliveryAvailable) {
    console.log("Delivery is not available.");
    return;
  }

  console.log("Your order is on the way!");
}

checkOrder("confirmed", true); // Your order is on the way!
