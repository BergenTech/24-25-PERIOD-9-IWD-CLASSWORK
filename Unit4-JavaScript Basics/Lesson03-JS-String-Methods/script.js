// Complete JavaScript String Methods 

// ===============================
// 1. Basic String Manipulation
// ===============================
// toUpperCase(): 
// Description: Converts all characters in a string to uppercase letters.
// Use when: You need to standardize text for case-insensitive comparisons or display purposes.
// Note: Creates a new string, doesn't modify the original.
// ********************************
let output = ""
const greeting = "Hello World!";
output = greeting.toUpperCase() //HELLO WORLD!

// toLowerCase():
// Description: Converts all characters in a string to lowercase letters.
// Use when: You need to normalize text for comparison or make text lowercase for styling.
// Note: Useful for case-insensitive string comparisons.
// ********************************
output = greeting.toLocaleLowerCase(); //hello world!

// ===============================
// 2. Substring Extraction
// ===============================
const text = "JavaScript is awesome"
// slice():
// Description: Extracts a portion of a string between two indices.
// Use when: You need to extract a specific portion of text.
// Note: Accepts negative indices to count from the end of the string.
output = text.slice(-7) //awesome
output = text.slice(0, 10) //JavaScript
let len = text.length
console.log(len)
//first character
output = text[0] //J
output = text[-len] // - indices wont work in [] bracket
output = text.slice(-len,1) //J
//last character
output = text[len-1] //e
output = text.slice(-1) //e

// substring():
// Description: Similar to slice but with two key differences: 
// 1. Doesn't accept negative indices
// 2. Swaps arguments if start is greater than end
// Use when: You need to extract text and don't need negative index support.
// ********************************
output = text.substring(11, 13) // is

// ===============================
// 3. Finding and Replacing
// ===============================
// indexOf():
// Description: Returns the index of the first occurrence of a substring.
// Use when: You need to find the position of text within a string.
// Note: Returns -1 if the substring is not found.
// ********************************
const sentence = "The quick brown fox jumps over the lazy dog fox";
console.log(`fox is found at:${sentence.indexOf('fox')}`) //fox is found at:16
console.log(`cat is found at:${sentence.indexOf('cat')}`) //cat is found at:-1

// lastIndexOf():
// Description: Returns the last occurrence of a substring.
// Use when: You need to find the last position of text in a string.
// Note: Searches from the end but returns the index from the start.
// ********************************
console.log(`last fox is found at:${sentence.lastIndexOf('fox')}`) //fox is found at:16


// includes():
// Description: Checks if a string contains a substring.
// Use when: You only need to know if text exists in a string.
// Note: More readable than indexOf() >= 0 for existence checks.
// ********************************
const email = 'student@bergen.org';
console.log(email.includes("@")) // true
console.log(email.includes("!")) // false
console.log(email.includes("bergen")) // true

// replace() and replaceAll():
// Description: replace() changes first occurrence, replaceAll() changes all occurrences.
// Use when: You need to substitute text in a string.
// Note: replace() only changes the first match unless used with regex.
// ********************************


// ===============================
// 4. String Analysis
// ===============================
// startsWith():
// Description: Tests if a string begins with specified characters.
// Use when: You need to validate string prefixes (like URLs, file names).
// Note: More elegant than substring(0, n) === "text".
// ********************************


// endsWith():
// Description: Tests if a string ends with specified characters.
// Use when: You need to validate string suffixes (like file extensions).
// Note: More elegant than checking the last characters manually.
// ********************************


// Whitespace handling methods:
// Description: trim() removes whitespace from both ends
//             trimStart() removes from start
//             trimEnd() removes from end
// Use when: Cleaning user input or formatting text.
// Note: Whitespace includes spaces, tabs, and line breaks.
// ********************************



// ===============================
// 5. String Transformation
// ===============================
// charAt() and charCodeAt():
// Description: charAt() returns character at position, charCodeAt() returns Unicode value.
// Use when: You need to work with individual characters or their ASCII/Unicode values.
// Note: charCodeAt() is useful for character code comparisons.
// ********************************


// ===============================
// 6. Common Use Cases
// ===============================
// Capitalize first letter:
// Description: Makes the first character uppercase and keeps the rest unchanged.


// Remove all spaces:
// Description: Eliminates all space characters from a string.


// Convert to URL-friendly slug:
// Description: Creates a URL-safe string by converting to lowercase and replacing spaces with hyphens.


// ===============================
// 7. String Immutability Example
// ===============================
// Description: Demonstrates that string methods create new strings rather than modifying the original.
// Important concept: In JavaScript, strings are immutable - their values cannot be changed after creation.
// Any string method returns a new string rather than modifying the existing one.

console.log(output)