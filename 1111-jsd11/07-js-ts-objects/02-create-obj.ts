// Define a type or interface for the product
interface ProductInterface {
	name: string;
	price: number;
	inStock: boolean;
}

const product: ProductInterface = {
	name: "Laptop",
	price: 1200,
	inStock: true,
};

/* console.log(product);
product.price = 99;
console.log(product.price); */

/* interface ProductInterface {
	origin?: string;
	amount: number;
} */

// NOTE: Add tsconfig.json in root folder (strict mode)
/* product["amount"] = 100;
console.log(product["amount"]);
const key = "origin";
product[key] = "Thailand";
console.log(product["origin"]); */

// Delete properties
/* delete product.inStock;
console.log(product);

delete product.origin;
console.log(product); */

/* // Object.keys(obj)
const keys = Object.keys(product);
console.log(keys);

// Object.values(obj)
const values = Object.values(product);
console.log(values);

// Object.entries(obj)
const entries = Object.entries(product);
console.log(entries);

// Object.freeze(obj)
Object.freeze(product);
product.price = 555;
console.log(product);

// obj.hasOwnProperty(key)
console.log(product.hasOwnProperty("name"));
console.log(Object.prototype.hasOwnProperty.call(product, "name")); */


// Define a type for the flower
/* type Flower = {
	petals: number;
	color: string;
	name?: string;
};

const flower: Flower = {
	petals: 5,
	color: "red",
};

const rose: Flower = Object.assign({}, flower);
rose.name = "rose";

console.log(rose);
 */
// Define an interface for the customer
/* interface Customer {
  name: string;
}

const customer: Customer = new Object() as Customer;
customer.name = "Bob";

// const customer: Customer = { name: "Bob" };

console.log(customer); */

// Define a type for the product
/* type ProductType = {
  name: string;
  price: number;
}

// Function with typed parameters and return type
function createProduct(name: string, price: number): ProductType {
  return { name, price };
}

const phone = createProduct("Phone", 799);
console.log(phone); */
