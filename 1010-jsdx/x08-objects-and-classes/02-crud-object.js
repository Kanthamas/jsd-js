"use strict";

/// Create ////
// Object Literal (most common)
const product = {
	name: "Laptop",
	price: 1200,
	inStock: true,
};
console.log(product);

// Using new Object()
const customer = new Object();
customer.name = "Bob";
console.log(customer);

// Factory Function (to create many objects)
function createProduct(name, price) {
	return { name, price };
}
const phone = createProduct("Phone", 799);
console.log(phone);

// Using Object.assign()
const flower = {
	petals: 5,
	color: "red",
};
const rose = Object.assign(flower);
rose.name = "rose";
console.log(rose);

/// Read ////
// Dot Notation
console.log(product.name);

// Bracket Notation
console.log(product["name"]);

// Optional Chaining & Nullish Coalescing Operator (for safe read)
console.log(product?.detail ?? "Detail not available");

/// Update ////
// Dot Notation
product.price = 99;
console.log(product.price);

// Bracket Notation
product["amount"] = 100;
console.log(product["amount"]);
const key = "origin";
product[key] = "Thailand";
console.log(product["origin"]);

/// Delete ///
// Dot Notation
delete product.inStock;
console.log(product);

// Bracket Notation
delete product.origin;
console.log(product);

/*                         */
// Build-in Object Methods
// Object.keys(obj)
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
console.log(Object.prototype.hasOwnProperty.call(product, "name"));

