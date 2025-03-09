# Exercise 02: Create Functions to Manipulate Texts

Reference: https://www.w3schools.com/js/js_string_methods.asp

## Task 02-1: Remove Extra Space

### Instructions:

1. Create a function named `removeExtraSpaces`.
2. The function should accept a single string parameter.
3. The function should:
   - Remove any leading (spaces before the text) and trailing (spaces after the text) spaces.
   - Replace multiple spaces between words with a single space.
4. The function should return the cleaned-up string.

### Requirements:

- The function should handle cases where the string has multiple spaces between words.
- The function should also work for strings that only contain spaces or are already clean.

### Hints:

> The RegEx `/\s+/g` matches sequences of one or more whitespace characters anywhere in the string and finds all occurrences of such sequences.

### Example:

```javascript
removeExtraSpaces("   John   Doe   "); // returns "John Doe"
removeExtraSpaces("   Hello world!   "); // returns "Hello world!"
removeExtraSpaces("   "); // returns ""
removeExtraSpaces("Hello    world!"); // returns "Hello world!"
```

---

## Task 02-2: Join Words with Hyphen and Convert to Lowercase

### Instructions:

1. Create a function named `joinAndLowercaseWords`.
2. The function should accept an array of strings as a parameter (e.g., product details, name components, etc.).
3. The function should:
   - Join all elements of the array into a single string, with each element separated by a hyphen (`-`).
   - Convert the entire resulting string to lowercase.
4. The function should return the joined and lowercase string.

### Requirements:

- The function should handle an array of any length, including arrays with a single element.
- The function should ensure that words are correctly joined with hyphens, and the entire result is in lowercase.

### Example:

```javascript
joinAndLowercaseWords(["T-shirt", "L", "Blue"]); // returns "t-shirt-l-blue"
joinAndLowercaseWords(["Apple", "iPad", "pro", "2025"]); // returns "apple-ipad-pro-2025"
joinAndLowercaseWords(["TODAY", "is", "a", "Present"]); // returns "today-is-a-present"
joinAndLowercaseWords([]); // returns ""
```
