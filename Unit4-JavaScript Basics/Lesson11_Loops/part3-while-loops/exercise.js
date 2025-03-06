// the sum of positive numbers
let sum = 0
while(true){
    number = parseInt(prompt("Enter a positive number"))
    //if number is negative, quit the loop
    if(number < 0){
        console.log("Exiting the loop...")
        break
    }
    sum += number //sum = sum + number
}
console.log(`The sum is:${sum}`)