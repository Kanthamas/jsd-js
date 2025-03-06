let day = "Monday"; // You can change this value to any day of the week

let lunch;

switch (day) {
	case "Monday":
		lunch = "Chicken Salad";
		break;
	case "Tuesday":
		lunch = "Tacos";
		break;
	case "Wednesday":
		lunch = "Pasta";
		break;
	case "Thursday":
		lunch = "Sushi";
		break;
	case "Friday":
		lunch = "Burger and Fries";
		break;
	case "Saturday":
		lunch = "Grilled Cheese Sandwich";
		break;
	case "Sunday":
		lunch = "Pizza";
		break;
	default:
		lunch = "Invalid day";
}

console.log(`Lunch for ${day}: ${lunch}`);
