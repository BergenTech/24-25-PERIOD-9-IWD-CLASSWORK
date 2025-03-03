// ============================
// For..of Loop Examples
// ============================
// The for..of loop iterates over the values of iterable objects
// such as arrays, strings, and maps. It provides direct access
// to the values rather than indexes or keys.


console.log("=== FOR..OF WITH ARRAY ===");
// Arrays are iterable objects - for..of gives us each element directly
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit); // Each iteration gives us the value directly
}
// Expected output:
// apple
// banana
// cherry


console.log("\n=== FOR..OF WITH STRING ===");
// Strings are also iterable - for..of gives each character
const greeting = 'Hello';
for (const char of greeting) {
  console.log(char); // Each iteration gives us one character
}
// Expected output:
// H
// e
// l
// l
// o


// ============================
// For..in Loop Examples
// ============================
// The for..in loop iterates over the enumerable properties of an object.
// It gives you access to the property names (keys) rather than values.
// Note: for..in is designed primarily for plain objects, not arrays.


console.log("\n=== FOR..IN WITH OBJECT ===");
// This is the primary use case for for..in - iterating over object properties
const person = {
  name: 'Alice',
  age: 25,
  job: 'Developer'
};
for (const key in person) {
  // The loop variable (key) gives us the property name
  // We need to use bracket notation to access the value: person[key]
  console.log(`${key}: ${person[key]}`);
}
// Expected output:
// name: Alice
// age: 25
// job: Developer


// ============================
// Additional Examples
// ============================
console.log("\n=== COMBINING FOR..OF AND FOR..IN ===");
// Using for..of with Object.entries() to get both keys and values
// Object.entries() converts an object to an array of [key, value] pairs
const user = {
  id: 101,
  username: 'jsmith',
  email: 'john@example.com'
};
// This is a modern, cleaner way to iterate over both keys and values of an object
// It avoids some of the pitfalls of for..in (like inherited properties)
for (const [key, value] of Object.entries(user)) {
  // Array destructuring to get key and value from each [key, value] pair
  console.log(`${key}: ${value}`);
}
// Expected output:
// id: 101
// username: jsmith
// email: john@example.com




// Loop through each item in the cart






// Expected output:
// Shopping cart items:
// apple: $0.50
// banana: $0.30
// orange: $0.65
// milk: $2.50
// Total cost: $3.95