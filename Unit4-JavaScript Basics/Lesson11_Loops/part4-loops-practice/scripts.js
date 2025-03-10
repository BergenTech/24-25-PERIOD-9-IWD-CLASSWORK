// JavaScript Loop Practice Questions - Starter Code Only

// Question 1: Sum of Numbers
// Problem: Calculate the sum of all numbers from 1 to 10 using a for loop.
let sum = 0;
// Your code here
// Expected output: 55


// Question 2: Even Numbers
// Problem: Print all even numbers from 0 to 20 using a while loop.
let num = 0;
// Your code here
// Expected output: 0 2 4 6 8 10 12 14 16 18 20


// // Question 3: Array Iteration
// // Problem: Calculate the product of all numbers in the array [1, 2, 3, 4, 5] using a for loop.
// const numbers = [1, 2, 3, 4, 5];
// // let product = 1;
// // Your code here
// // Expected output: 120

// Question 3-2: Array Iteration
// Problem: Calculate the sum of all numbers in the array [1, 2, 3, 4, 5] using a for loop.
const numbers = [1, 2, 3, 4, 5];
// Your code here

// Expected output: 15


// Question 3-3: Largest Number of an Array
const q5nums = [5, 2, 9, 1, 7] 
let max = q5nums[0]
for(let i=1; i<q5nums.length; i++){
  if(q5nums[i]>max){
    max = q5nums[i]
  }
}
console.log("Max Number:", max)


// Question 4: String Characters
// Problem: Print each character of the string "JavaScript" on a new line.
const text = "JavaScript";
// Your code here
for(let letter of text){
  console.log(letter)
}
// Expected output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t


// Question 5: Array Methods with For...Of
// Problem: Create a new array containing the squares of numbers from the original array.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squares = [];
// Your code here
// Expected output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
for(const num of nums){
  squares.push(num*num)
}
console.log(squares)


// Question 6: Object Iteration
// Problem: Print all keys and values from the object.
const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  subjects: ["Math", "Science", "History"]
};
// Your code here
// Expected output:
// name: Alice
// age: 20
// grade: A
// subjects: Math,Science,History


// Question 7: Nested Loops
// Problem: Print a multiplication table for numbers 1 to 5.
// Your code here
// Expected output: (sample)
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 5 x 4 = 20
// 5 x 5 = 25


// Question 8: Break Statement
// Problem: Find the first number divisible by 7 in the range 1 to 50.
// Your code here
// Expected output: First number divisible by 7 is: 7


// Question 9: Continue Statement
// Problem: Print all numbers from 1 to 10, skipping multiples of 3.
// Your code here
// Expected output: 1 2 4 5 7 8 10


// Question 10: Do...While Loop
// Problem: Generate random numbers between 1 and 10 until you get a number greater than 8.
// Your code here
// Expected output: Will vary, but will end with a number 9 or 10


// Question 11: Nested Array Iteration
// Problem: Calculate the sum of all numbers in a nested array.
const nestedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
let totalSum = 0;
// Your code here
// Expected output: Sum of all numbers: 45


// Question 12: Filtering with Loops
// Problem: Filter out all odd numbers from the array and create a new array with only even numbers.
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];
// Your code here
// Expected output: [2, 4, 6, 8, 10]


// Question 13: Object Value Transformation
// Problem: Create a new object where all string values are converted to uppercase.
const product = {
  id: 123,
  name: "laptop",
  brand: "techbrand",
  category: "electronics",
  inStock: true
};

const uppercaseStrings = {};
// Your code here
// Expected output: 
// {
//   id: 123,
//   name: "LAPTOP",
//   brand: "TECHBRAND",
//   category: "ELECTRONICS",
//   inStock: true
// }


// Question 14: For...Of with Entries Method
// Problem: Use Object.entries and for...of to log each key-value pair.
const user = {
  username: "john_doe",
  email: "john@example.com",
  isAdmin: false,
  lastLogin: "2023-03-15"
};
// Your code here
// Expected output:
// username: john_doe
// email: john@example.com
// isAdmin: false
// lastLogin: 2023-03-15


// Question 15: Nested Object Traversal
// Problem: Print all property values (including nested ones) from the following object.
const person = {
  profile: {
    name: "Sam",
    age: 25
  },
  address: {
    city: "Boston",
    state: "MA",
    zip: "02108"
  },
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true
    }
  }
};
// Your code here - Hint: You might want to create a recursive function
// Expected output:
// profile.name: Sam
// profile.age: 25
// address.city: Boston
// address.state: MA
// address.zip: 02108
// preferences.theme: dark
// preferences.notifications.email: true
// preferences.notifications.sms: false
// preferences.notifications.push: true