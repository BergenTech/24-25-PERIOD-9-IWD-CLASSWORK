// Part 1: 'if' Statement
// Syntax: if (condition) { ... }
// Explanation: Executes the code block if the condition is true.
let temp = 20;
if(temp <= 32){
    console.log("It's freezing!")
}

let number = -5
// number = 0
if(number < 0){
    console.log(`${number} is a negative number!`)
}


// Part 2: 'if-else' Statement
// Syntax: if (condition) { ... } else { ... }
// Explanation: Executes the first block if condition is true, otherwise executes the second block

// let userNum = prompt("Enter a Number:")
let userNum = 5
console.log(`User submitted: ${userNum}`)
console.log(typeof userNum)
userNum = Number(userNum)
console.log(typeof userNum)
console.log(userNum)
//check if the number is even or odd
if(userNum % 2 == 0){
    console.log(`${userNum}:is even`)
}else{
    console.log(`${userNum}:is odd`)
}

// Part 3: 'if-else-if' Statement
// Syntax: if (condition1) { ... } else if (condition2) { ... } else { ... }
// Explanation: Executes the first block if condition1 is true, the second if condition2 is true, or the last block if none are true.
// let score = 50;
// if(score >=90){
//     console.log(`${score}:A`)
// }
// else if(score >=80){
//     console.log(`${score}:B`)
// }
// else if(score >=70){
//     console.log(`${score}:C`)
// }else if(score >=60){
//     console.log(`${score}:D`)
// }else {
//     console.log(`${score}:F`)
// }
let score = 50;
// score = parseInt(prompt("Enter Grade:"))
let letter = "";
if(score >=90) letter = 'A';
else if(score >=80) letter = 'B';
else if(score >=70) letter = 'C';
else if(score >=60) letter = 'D';
else letter = 'F'
console.log(`${score}:${letter}`)


// Example - Combining Booleans with if Statements
// Vote Eligibility - must be at least 18 and us citizen
let age = 20;
let isCitizen = true;

if(age>=18 && isCitizen){
    console.log("You are eligible to vote!")
}else{
    console.log("You are not eligible to vote!")
}