/*
JavaScript Math Methods 
- Math is a built-in object that has properties and methods for mathematical operations
- No import needed - Math methods are available by default in JavaScript
*/

// 1. Math.round() - Rounds to nearest integer
// If decimal is 0.5 or greater, rounds up. Otherwise, rounds down.
const num1 = 5.7;
console.log(Math.round(num1)); // Output: 6
// Try rounding num1 here - should give 6

const num2 = 5.3;
console.log(Math.round(num2)); // Output: 5
// Try rounding num2 here - should give 5


// 2. Math.ceil() - Always rounds up to next integer
const price = 99.01;
console.log(Math.ceil(price)); // Output: 100
// Try ceiling price here - should give 100

const score = 85.1;
console.log(Math.ceil(score)); // Output: 86
// Try ceiling score here - should give 86


// 3. Math.floor() - Always rounds down to previous integer
const temperature = 23.9;
console.log(Math.floor(temperature)); // Output: 23
// Try flooring temperature here - should give 23

const rating = 4.8;
console.log(Math.floor(rating)); // Output: 4
// Try flooring rating here - should give 4


// 4. Math.random() - Generates number between 0 and 1
console.log(Math.random()); // Output: 0.5953964784431025
// Try generating a random number here

console.log(Math.floor(Math.random() * 10) + 1); // Output: 6
// Try generating a random number between 1-10 here


// 5. Math.abs() - Returns absolute (positive) value
const deficit = -150;
console.log(Math.abs(deficit)); // Output: 150
// Write abs code here - Output: 150

const distance = -42.5;
console.log(Math.abs(distance)); // Output: 42.5
// Write abs code here -Output: 42.5


// 6. Math.pow() - Returns base to the power of exponent
const base = 2;
const exponent = 3;
console.log(Math.pow(base, exponent)); // Output: 8 (2³)
// Write power code here - Output: 8 (2³)

console.log(Math.pow(5, 2)); // Output: 25 (5²)
// Write code to calculate 5² here - Output: 25 (5²)


// 7. Math.sqrt() - Returns square root
const area = 25;
console.log(Math.sqrt(area)); // Output: 5
// Write square root code here - Output: 5

const num = 144;
console.log(Math.sqrt(num)); // Output: 12
// Write square root code here - Output: 12


// PRACTICE EXERCISES

// 1. Generate random number between 20 and 50
console.log("Random number between 20-50:");
// Write your code here


// 2. Round these numbers appropriately
const testPrice = 99.99;   // Round up
const weight = 72.3;       // Round down
const testRating = 4.49;   // Round to nearest integer
console.log("Rounded numbers:");
// Write your code here


// 3. Power and Square Root calculations
const number = 16;
console.log("Number calculations for 16:");
// Calculate and print:
// - Square of this number (16²)
// - Square root of this number (√16)
// - This number to power of 3 (16³)
// Write your code here


// 4. Absolute Value calculations
const temp1 = -5;
const temp2 = -17.2;
console.log("Absolute values:");
// Write your code here