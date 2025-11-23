// Define interface for the product
interface Product {
	name: string;
	price: number;
	details: {
		brand: string;
	};
	color?: string; 
}

const product2: Product = {
	name: "Phone",
	price: 799,
	details: { brand: "SoundX" },
};

// Basic destructuring
const { name, price } = product2;
console.log(name, price); // Phone 799

// Nested destructuring with default & alias
const {
	details: { brand: company = "brandName" },
	color = "Black",
} = product2;

console.log(company, color); // SoundX Black
