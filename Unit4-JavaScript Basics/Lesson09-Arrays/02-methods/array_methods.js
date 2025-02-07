let cities = ['Paris', 'Tokyo', 'New York', 'London'];
// 1. SEARCH AND IDENTIFICATION METHODS
// 1.1 indexOf(): 
// - Searches for an element in the array
// - Returns the first index where the element is found
// - Returns -1 if the element is not in the array
console.log(cities.indexOf("London")) // Returns 3
console.log(cities.indexOf("Berlin"))

// 1.2 includes():
// - Checks if an array contains a specific element
// - Returns true if found, false otherwise
// - Performs a strict equality check (===)
console.log(cities.includes("New York")) // Returns true
console.log(cities.includes("Toronto")) // Returns false

// 1.3 find():
// - Returns the first element that satisfies a testing function
// - Returns undefined if no element passes the test
// - Useful for finding objects or complex matching conditions
let longNameCity = cities.find(city => city.length > 6)
console.log(longNameCity) //Return New York

// 1.4 findIndex():
// - Similar to find(), but returns the index instead of the element
// - Returns -1 if no element passes the test
let longNameIndex = cities.findIndex(elem => elem.length >= 5)
console.log(longNameIndex) // Returns 0

// 2. MANIPULATION METHODS
// 2.1 push():
// - Adds one or more elements to the END of an array
// - Modifies the original array
// - Returns the new length of the array


// 2.2 unshift():
// - Adds one or more elements to the BEGINNING of an array
// - Shifts existing elements to higher indexes
// - Returns the new length of the array


// 2.3 pop():
// - Removes the LAST element from an array
// - Reduces array length by 1
// - Returns the removed element


// 2.4 shift():
// - Removes the FIRST element from an array
// - Shifts all other elements down
// - Returns the removed element


// 3. TRANSFORMATION METHODS
// 3.1 concat():
// - Merges two or more arrays
// - Creates a NEW array without modifying existing arrays
// - Useful for combining arrays without mutation


// 3.2 slice():
// - Extracts a portion of an array
// - Returns a NEW array
// - Does not modify the original array
// - Takes start and end indexes (end index is exclusive)


// 3.3 splice():
// - Changes array contents by removing or replacing existing elements
// - Can add new elements
// - Modifies the original array
// - Parameters: (start index, delete count, items to add)


// 4. ITERATION METHODS
// 4.1 forEach():
// - Executes a provided function once for each array element
// - Does not return a new array
// - Cannot break out of the loop (use for...of or other methods for that)


// 5. SORTING METHODS
// 5.1 sort():
// - Sorts elements in-place
// - Default behavior is converting elements to strings and sorting alphabetically
// - Can use a compare function for custom sorting