// ===============================================
// JavaScript Objects
// ===============================================


// Objects are one of the fundamental data types in JavaScript
// They are collections of key-value pairs (properties) and serve as the
// building blocks for more complex data structures


// ------------------------------
// 1. Object Creation
// ------------------------------


// Object literal notation (most common)
const person = {
    name: 'John',
    age: 30,
    isEmployed: true
};




// Object.create() method
const prototype = {
    greet() {
        return 'Hello!';
    }
};


// ------------------------------
// 2. Accessing Properties
// ------------------------------


const user = {
    firstName: 'Alice',
    'last-name': 'Smith',  // Property with special characters
    address: {
        street: '123 Main St',
        city: 'Boston'
    }
};


// Practice accessing properties using dot notation and bracket notation here
console.log(user.firstName) //Alice
// Bracket [] Notation
console.log(user['last-name']) //Smith
//Nested Objects


// Practice accessing nested objects here
console.log(user.address.street)
console.log(user['address']['city'])

// ------------------------------
// 3. Property Manipulation
// ------------------------------

// Practice adding, updating, and deleting properties here
// Adding
user.age = 20;
user["phone"] = '555-222-1111'
console.log(user)

//updating properties
user.age = 25;

//deleting properties
delete user.phone
console.log(user.phone) // undefined

//checking if a property exists
console.log('phone' in user)//false
console.log(user.hasOwnProperty('age'))//true

// ------------------------------
// 4. Object Methods
// ------------------------------

const methods = {
    // Method shorthand
    sayHello() {
        return 'Hello!';
    },
   
    // Methods with 'this'
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};


// ------------------------------
// 5. Commonly Used Object Methods
// ------------------------------


const example = { a: 1, b: 2, c: 3 };


// Practice using Object.keys(object_name) here
console.log(Object.keys(example)) //[a,b,c]
// Practice using Object.values() here
console.log(Object.values(example)) //[1,2,3]
// Practice using Object.entries() here
console.log(Object.entries(example)) //[['a', 1],['b', 2], ['c', 3]]
// Practice using Object.assign() here
//copies properties from one object to another
const target = {x:1}
const source = {y:2}
Object.assign(target, source)
console.log(target) //{x: 1, y: 2}
// ------------------------------
// 6. Common Pitfalls
// ------------------------------

// Pitfall 1: Mutating objects unintentionally
const original = { x: 1 };
const copy = original //this creates a reference, not a copy
copy.x = 2 //Also changes original.x
console.log(original)
// Practice creating proper copies here


// Pitfall 2: 'this' binding issues
const person2 = {
    name: 'John',
    greet: () => {
        // Practice with 'this' binding here
    }
};


const person3 = {
    name: 'John',
    greet() {
        // Practice with correct 'this' usage here
        console.log(`Hello, ${this.name}`)
    }
};
const person4 = {
    name: 'Mike',
    greet() {
        // Practice with correct 'this' usage here
        console.log(`Hello, ${this.name}`)
    }
};
console.log(person3.greet())
console.log(person4.greet())


