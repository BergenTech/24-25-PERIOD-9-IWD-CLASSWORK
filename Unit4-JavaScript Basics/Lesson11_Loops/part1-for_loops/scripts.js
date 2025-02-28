// ==================================================
// STANDARD FOR LOOP
// ==================================================
// 1: Basic counting from 1 to 5
console.log("Example 1: Counting from 1 to 5");
for (let i = 1; i<=5; i++){
    // console.log("hi") prints "hi" 5 times
    // console.log(i) prints 1 through 5
    let squared = i**2
    // console.log(squared)
    console.log(`The square of ${i}:${squared}`)
}

for (let i = 0; i<5; i++){
    console.log("Hello")
}

// 2: Counting backwards from 5 to 1
console.log("\nExample 2: Counting backwards from 5 to 1");

for (let i = 5; i>=1; i--){
    console.log(i)

}

// 3: Counting by 2s (step value)
console.log("\nExample 3: Counting by 2s");
for (let num = 1; num <= 50; num += 2){
    // console.log(num)
    // filter only numbers evenly divided by 3
    if(num % 3 == 0){
        console.log(`The number ${num}`)
    }else {
        console.log(num *=2)
    }
}

// 4: Skip certain iterations with continue
// console.log("\nExample 4: Skipping even numbers");

// 5: Exit loop early with break
console.log("\nExample 5: Break when reaching 5");

for (let i = 0; i<10; i++){
    if(i%2==0){
        continue //skip even numbers
    }
    console.log(i)
}

// // Iterate through a given string
// let userName = prompt("Enter Your Name:")
// for (let i = 0; i<userName.length; i++){
//     console.log(userName[i])
// }
// Iterate through a given string - backward
let userName = prompt("Enter Your Name:")
for (let i = userName.length-1; i>=0; i--){
    console.log(userName[i])
}


// Example 1 : Filtering an array
console.log("\nExample 16: Filtering an array (even numbers)");
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for(let i =0; i<allNumbers.length; i++){
    if(allNumbers[i]%2==0){
        evenNumbers.push(allNumbers[i])
    }
}
console.log(evenNumbers)
