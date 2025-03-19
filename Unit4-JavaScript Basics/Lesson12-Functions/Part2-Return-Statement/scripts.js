/* 
 * JavaScript Return Statement Starter Code 
 */
// ============================================================
// PRINCIPLE 1: Implicit Return of Undefined
// ============================================================

// Exercise 1: What will these functions return?
function showWelcome() {
  console.log("Welcome to JavaScript!");
}

const printList = function() {
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits);
};

// Your predictions:
// showWelcome() returns: ____
// printList() returns: ____

// Test your predictions
console.log(showWelcome())
console.log(printList())

// Exercise 2: Fix the function
function doubleNumber(num) {
  // result = num * 2;
  // // This function should return the doubled number
  // return result
  return num * 2
}

  console.log("Exercise 1.3 Result:", doubleNumber(5)); // Should return 10

// ============================================================
// PRINCIPLE 2: Returning Values
// ============================================================

// Exercise 1: Complete the function
function isEven(number) {
  // Return true if number is even, false if odd
  return number % 2 == 0
}

  console.log("Exercise 2.1:", isEven(4));  // Should return true
  console.log("Exercise 2.1:", isEven(7));  // Should return false

// Exercise 2: Create an arrow function
// Create a greeting function that returns "Hello, [name]!"
// const greet = userName => `Hello, ${userName}`// Your arrow function here
function greet(userName) {
  return `Hello, ${userName}`
}
console.log("Exercise 2.2:", greet("Sam"));    // Should return "Hello, Sam!"
console.log("Exercise 2.2:", greet("Taylor")); // Should return "Hello, Taylor!"

// ============================================================
// PRINCIPLE 3: Function Termination
// ============================================================

// Exercise 1: Check age function
function checkAge(age) {
  // If age is less than 18, return "Too young"
  if(age<18){
    return "Too Young!"
  }
  return "Access granted!"
  // Otherwise continue and return "Access granted"
}

console.log("Exercise 3.1:", checkAge(15)); // Should return "Too young"
console.log("Exercise 3.1:", checkAge(21)); // Should return "Access granted"

// Exercise 2: Find first odd number
function findFirstOdd(numbers) {
  // Loop through the array and return the first odd number
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 !== 0){
      return numbers[i]
    }
    return "No odd numbers!"
  }
  // If no odd numbers are found, return "No odd numbers"
}

console.log("Exercise 3.2:", findFirstOdd([2, 4, 7, 8, 10])); // Should return 7
console.log("Exercise 3.2:", findFirstOdd([2, 4, 6, 8]));     // Should return "No odd numbers"

// ============================================================
// PRINCIPLE 4: Multiple Return Statements
// ============================================================

// Exercise 1: Traffic Light
function getTrafficLight(color) {
  // Return "Stop" if color is "red"
  // Return "Caution" if color is "yellow"
  // Return "Go" if color is "green"
  // Return "Invalid color" for any other color
  if(color === "red"){
    return "Stop!"
  }
  if(color === "yellow"){
    return "Caution!"
  }
  if(color === "green"){
    return "Go!"
  }
  return "Invalid Color"
}

//   console.log("Exercise 4.1:", getTrafficLight("red"));    // Should return "Stop"
//   console.log("Exercise 4.1:", getTrafficLight("yellow")); // Should return "Caution"
//   console.log("Exercise 4.1:", getTrafficLight("green"));  // Should return "Go"
//   console.log("Exercise 4.1:", getTrafficLight("blue"));   // Should return "Invalid color"

// Exercise 2: Ticket Price
const getTicketPrice = function(age, isStudent) {
  // Under 12: "Free"
  // Students (any age): "Discount"
  // Seniors (65+): "Discount"
  // Everyone else: "Full price"
  if(age<12){
    return "Free"
  }
  if(isStudent || age>=65){
    return "Discount"
  }
  return "Full Price"
};

  console.log("Exercise 4.2:", getTicketPrice(8, false));    // Should return "Free"
  console.log("Exercise 4.2:", getTicketPrice(25, true));    // Should return "Discount"
  console.log("Exercise 4.2:", getTicketPrice(70, false));   // Should return "Discount"
  console.log("Exercise 4.2:", getTicketPrice(35, false));   // Should return "Full price"