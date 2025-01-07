// console.log('test')
// Variables: Containers that store data values in memory
let score = 100;    // Can be reassigned
const PI = 3.14159;    // Cannot be reassigned
var oldWay = 'Hello';    // Old way, avoid using

// Primitive Data Types: Basic building blocks of data
// 1. Strings: Text data enclosed in quotes
let firstName = 'John';
let lastName = 'Doe';
let age = 15;
let message = `Hello, ${firstName}-${lastName}`
console.log(message)
    // Template literal for string interpolation

// String operations: Methods to manipulate text
console.log(`The length of ${firstName}:${firstName.length}`)    // Get string length
console.log(firstName +" "+ lastName)    // String concatenation
console.log(`${firstName} ${lastName}`)    // Modern string interpolation

// 2. Numbers: Both integers and decimal values
let integer = 42    // Whole number
let decimal = 3.14   // Floating-point number
let bigNumber = 90025010212114n;    // BigInt for very large numbers

// 3. Booleans: True/false values for logical operations
let isLoggedIn = true;
let hasPermission = false;


// 4. Undefined and Null: Empty or missing values
let undefinedVar    // Variable declared but not assigned
let emptyValue = null    // Intentionally empty value



// Console Methods: Different ways to output data for debugging
console.log('Basic Log')    // Standard output
console.info("Info Message")    // Informational output
console.warn("Warning Message")    // Warning output
console.error("Error Message")    // Error output
console.table([
    {name:"John", age:15 },
    {name:"Jane", age:15 }
])    // Tabular data output


// Template Literals: Advanced string formatting
const item = "book";
const price = 29.99;
const quantity = 2;

// Multiline string with embedded expressions
console.log(`
    Order Summary:
    Item: ${item}
    Price: $${price}
    Quantity: ${quantity}
    Total: $${price*quantity}
    `)

// HTML template example using string interpolation
const html = `
    <div>
        <h1>${firstName}</h1>
        <p>Age: ${age}</p>
    </div>
`

// Practice Exercise: Applying concepts
const userName = "Your Name"  ;  // User identifier
let userAge = 15;   // Age tracking
let isSubscribed = false;    // Subscription status



const itemPrice = 99.99;    // Product cost
const taxRate = 0.08;    // Tax percentage
let total = itemPrice * quantity *(1+taxRate)
console.log(`Total: ${total}`)    // Total with tax

// Score Tracking: Demonstrating number operations
let playerScore = 100;    // Initial score
// Add bonus points
// playerScore = playerScore + 50
playerScore += 50
// Subtract penalty
// playerScore = playerScore - 75
playerScore -= 75
// Apply multiplier
// playerScore = playerScore * 2
playerScore *= 2
// playerScore++ //add 1
playerScore-- //subtract 1
console.log(`Score:${playerScore}`)
