// JavaScript While Loops Reference
// =================================

// Basic while loop
// ---------------
// Syntax: while (condition) { code block }
// Executes a block of code as long as the condition is true

// Example 1: Simple counter
let count = 1;
while (count <= 5) {
  console.log("Count: " + count);
  count++;
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5


// Example 2: Loop with multiple conditions
let a = 1;
let b = 10;
while (a < 5 && b > 5) {
  console.log(`a = ${a}, b = ${b}`);
  a++;
  b--;
}
// Output:
// a = 1, b = 10
// a = 2, b = 9
// a = 3, b = 8
// a = 4, b = 7


// Example 3: Processing arrays with while loop
const fruits = ["Apple", "Banana", "Orange", "Mango"];
let index = 0;
while (index < fruits.length) {
  console.log(`Fruit ${index + 1}: ${fruits[index]}`);
  index++;
}
// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Fruit 3: Orange
// Fruit 4: Mango


// Breaking out of loops
// --------------------

// Example 4: Using break to exit a while loop
let i = 0;
while (true) {  // Infinite loop
  console.log("Iteration " + i);
  i++;
  if (i >= 3) {
    console.log("Breaking out of loop");
    break;  // Exit the loop when i reaches 3
  }
}
// Output:
// Iteration 0
// Iteration 1
// Iteration 2
// Breaking out of loop


// Example 5: Using continue to skip iterations
let j = 0;
while (j < 5) {
  j++;
  if (j === 3) {
    console.log("Skipping iteration 3");
    continue;  // Skip the rest of this iteration
  }
  console.log("j = " + j);
}
// Output:
// j = 1
// j = 2
// Skipping iteration 3
// j = 4
// j = 5


// Example 6: Finding an element in an array
const numbers = [10, 20, 30, 40, 50];
let pos = 0;
let target = 30;
let found = false;

while (pos < numbers.length) {
  if (numbers[pos] === target) {
    found = true;
    break;
  }
  pos++;
}

console.log(found ? `Found ${target} at position ${pos}` : `${target} not found`);
// Output:
// Found 30 at position 2


// Example 7: Summing numbers
let sum = 0;
let counter = 1;

while (counter <= 10) {
  sum += counter;
  counter++;
}

console.log(`Sum of numbers 1 to 10 is: ${sum}`);
// Output:
// Sum of numbers 1 to 10 is: 55
