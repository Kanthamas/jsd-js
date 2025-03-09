# Exercise Instructions: Calculator Functions

## Exercise 03-1: Create Functions for Addition, Subtraction, Multiplication, and Division

### Instructions:

1. **Create a function to add two numbers.**

   - The function should take in two parameters (`num1` and `num2`).
   - It should return the sum of `num1` and `num2`.

2. **Create a function to subtract two numbers.**

   - The function should take in two parameters (`num1` and `num2`).
   - It should return the result of `num1 - num2`.

3. **Create a function to multiply two numbers.**

   - The function should take in two parameters (`num1` and `num2`).
   - It should return the result of `num1 * num2`.

4. **Create a function to divide two numbers.**
   - The function should take in two parameters (`num1` and `num2`).
   - It should return the result of `num1 / num2`.
   - If `num2` is `0`, the function should return an error message saying **"Cannot divide by zero"**.

## Exercise 03-2: Create a Validation Function for Inputs

### Instructions:

1. **Create a function to validate inputs.**
   - The function should take two parameters (`num1` and `num2`).
   - It should check if both `num1` and `num2` are numbers.
   - If either `num1` or `num2` is not a number, return an error message saying **"Both inputs must be numbers"**.
   - If both are numbers, return `null` (indicating no error).

## Exercise 03-3: Create a Calculator Function to Combine the Above Functions

### Instructions:

1. **Create a function to act as a calculator.**
   - The function should take in three parameters: `num1`, `num2`, and `operation`.
   - The `operation` parameter will specify which of the four operations to perform: `'add'`, `'subtract'`, `'multiply'`, or `'divide'`.
2. **Combine the previous functions.**

   - First, use the validation function to check if the inputs are valid.
   - If the inputs are valid, call the appropriate operation function based on the `operation` value:
     - If the operation is `'add'`, call the `add` function.
     - If the operation is `'subtract'`, call the `subtract` function.
     - If the operation is `'multiply'`, call the `multiply` function.
     - If the operation is `'divide'`, call the `divide` function.
   - If the `operation` is not one of the valid operations, return an error message saying **"Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'"**.

3. **Return the result**:
   - Return the result of the calculation or any error message (like invalid inputs or invalid operation).

## Flow for Exercises:

### Exercise 03-1:

Create four basic mathematical functions that will each perform a specific operation on two input numbers.

### Exercise 03-2:

Ensure that the inputs are valid numbers before performing any calculations by implementing a validation function.

### Exercise 03-3:

Combine the functions from Exercise 03-1 and Exercise 03-2 into a complete calculator function that can handle different mathematical operations based on user input.

## Example Output (Examples):

1. **Example of Addition:**
   ```javascript
   add(10, 5); // returns 15
   ```
2. **Example of Validation:**
   ```javascript
   validateInputs(10, "a"); // returns 'Both inputs must be numbers'
   ```
3. **Example of Calculator:**
   ```javascript
   calculator(10, 5, "add"); // returns 15
   calculator(10, 5, "divide"); // returns 2
   calculator(10, 0, "divide"); // returns 'Cannot divide by zero'
   calculator(10, 5, "unknown"); // returns 'Invalid operation. Please use "add", "subtract", "multiply", or "divide".'
   ```
