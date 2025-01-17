// Part 1: Boolean Basics
let isLightOn = true;
let isDoorClosed = false;

// Practice Exercise 1
let dayTime = true;
let login = false;
let formValidity = true;


// Part 2: Boolean Operations

// Understanding Boolean Operators
// 
// AND (&&)
// • Works like "and" in English
// • Both conditions must be true for the result to be true
// • Think of it like checking multiple requirements
// 
// OR (||)
// • Works like "or" in English
// • Only one condition needs to be true
// • Think of it like having multiple acceptable options
// 
// NOT (!)
// • Reverses the boolean value
// • Think of it like a toggle switch


// Part 3: Understanding Truthy and Falsy
// 
// AND examples
let hasLicense = true;
let isOver18 = true;
let canDrive = hasLicense && isOver18;
console.log(canDrive) // true
console.log(`Can drive: ${canDrive}`) // Can drive: true
// 
// OR examples
let hasPayPal = false;
let hasCreditCard = true;
let canPay = hasPayPal || hasCreditCard;
console.log(canPay) // true
// 
// NOT examples
let isLoggedIn = true;
let isLoggedOut = !isLoggedIn;
console.log(isLoggedOut) // false

// Testing Falsy Values
console.log("=== Falsy Values ===");
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
// 
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("hello")); // true
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true


// Practice Exercise 3
// 1. "0"
console.log(Boolean("0")); // true
// 2. []
console.log(Boolean([])); // true
// 3. {}
console.log(Boolean({})); //true
// 4. "false"
console.log(Boolean("false")); // true
// 5. undefined
console.log(Boolean(undefined)); // false