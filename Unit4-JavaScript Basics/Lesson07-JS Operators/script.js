// COMPARISON OPERATORS
console.log("COMPARISON OPERATORS:");
console.log("======================");

// Number comparisons
console.log("\nNumber Comparisons:");
console.log(10 < 5) //false
console.log(10 < 20) //true
console.log(10 >= 10) //true
console.log(10 > 10) //false
console.log(5 <= 4) //false
console.log(5 < 5) //false
console.log(5 <= 5) //true

// String comparisons
console.log("\nString Comparisons:");
console.log("apple" < "banana") //true
console.log("apple" < "Apple") //false (97<65)
console.log("apple" > "Apple") //true  (97>65)
console.log("apple" > "apple") //false  (101>101)
console.log("20" > "100")  //true character '2' > '1'
console.log('Cat' == 'cat') //false
console.log('Cat' === 'cat') //false
// == vs ===
console.log("\nEquality vs Strict Equality:");
let num = 5;
let strNum = "5";
console.log(num == strNum); //true
console.log(num === strNum); //false

// LOGICAL OPERATORS
console.log("\nLOGICAL OPERATORS:");
console.log("======================");

// AND (&&)
console.log("\nAND operator (&&):");
console.log(true && true) //true
console.log(true && false) //false
console.log(true && false && true && true) //false
console.log("dog" && "cat") // returns last truthy value
console.log("" && "cat" && "") // returns first truthy value
// OR (||)
console.log("\nOR operator (||):");
console.log(true || false) //true
console.log(false || true || false || false) //true
console.log("dog" || "cat") // returns first truthy value
// NOT (!)
console.log("\nNOT operator (!):");
let isLightOn = false;
console.log(isLightOn) //false
console.log(!isLightOn) //true
console.log(!!isLightOn) //false

// TRUTHY AND FALSY VALUES
console.log("\nTRUTHY AND FALSY VALUES:");
console.log("======================");

// Falsy values
console.log("\nFalsy values:");

// Truthy values
console.log("\nTruthy values:");