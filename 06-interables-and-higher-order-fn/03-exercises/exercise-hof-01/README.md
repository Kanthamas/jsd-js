# Exercise 01: E-commerce Product Filtering and Sorting

You are tasked with processing a list of products from an e-commerce platform.<br>
The goal is to retrieve specific products based on the following criteria:

- Focus on products from the `Electronics` category.

- Only include products with a rating of 4 or higher.

- For the resulting products, display the `name`, `price`, and `rating`.

- Sort the products by price in ascending order.

- From the sorted list, **return the top 3 cheapest products**.

The data for the products is provided in an array of objects, where each object contains `id`, `name`, `price`, `category`, and `rating` fields.

```js
products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
  { id: 2, name: "Smartphone", price: 700, category: "Electronics", rating: 4.2 },
  { id: 3, name: "Tablet", price: 300, category: "Electronics", rating: 3.8 },
  { id: 4, name: "Headphones", price: 150, category: "Accessories", rating: 4.0 },
  { id: 5, name: "Smartwatch", price: 250, category: "Electronics", rating: 4.8 },
  { id: 6, name: "Wireless Charger", price: 50, category: "Accessories", rating: 4.3 },
  { id: 7, name: "Keyboard", price: 80, category: "Accessories", rating: 3.9 },
  { id: 8, name: "Camera", price: 500, category: "Electronics", rating: 4.1 },
]
```
