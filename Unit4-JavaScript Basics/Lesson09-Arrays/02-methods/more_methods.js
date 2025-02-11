// ==============================
// 1. map() Examples
// ==============================


// Example 1: Converting temperatures from Celsius to Fahrenheit
let celsiusTemps = [0, 20, 30, 40, 100];
// 1. Use the map() method to convert each temperature to Fahrenheit.
// 2. Log the result.
let fahrenheitTemps = celsiusTemps.map(t => (t*9/5)+32)
console.log(fahrenheitTemps) 


// Example 2: Doubling the price of items in an array
let prices = [5, 10, 15, 20];
// 1. Use the map() method to double each price.
// 2. Log the result.


// ==============================
// 2. filter() Examples
// ==============================


// Example 1: Filtering out names shorter than 5 characters
let names = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
// 1. Use the filter() method to return only names that are 5 characters or longer.
// 2. Log the result.
let longNames = names.filter(nam =>nam.length >= 5)
console.log(longNames)

// Example 2: Filtering even numbers from an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// 1. Use the filter() method to return only the even numbers.
// 2. Log the result.


// ==============================
// 3. split() Examples
// ==============================


// Example 1: Splitting a CSV string into an array of values
let csvString = "apple,banana,grape,orange";
// 1. Use the split() method to split the string into an array of values.
// 2. Log the result.
let fruits = csvString.split(",")
console.log(fruits)

// Example 2: Splitting a sentence into words
let sentence = "JavaScript is fun and challenging";
// 1. Use the split() method to separate the sentence into an array of words.
// 2. Log the result.


// ==============================
// 4. join() Examples
// ==============================


// Example 1: Joining an array of words into a single sentence
let sentenceWords = ["The", "quick", "brown", "fox"];
// 1. Use the join() method to join the words into a single string with spaces.
// 2. Log the result.
let sentenceString = sentenceWords.join("")
console.log(sentenceString)
sentenceString = sentenceWords.join(" ")
console.log(sentenceString)
sentenceString = sentenceWords.join("*")
console.log(sentenceString)

// Example 2: Joining an array with a custom separator
let hyphenatedWords = ["JavaScript", "is", "fun"];
// 1. Use the join() method to combine the array into a string with a custom separator (e.g., hyphen).
// 2. Log the result.
