// ============================
// LOOP EXERCISES 
// ============================
// FOR..OF SIMPLE EXERCISE
// Count vowels in a sentence using split and for..of
// ============================


// Start with a sentence
const sentence = "JavaScript loops are fun"

// Split the sentence into an array of words
// words = ["JavaScript", "loops", etc...]
const words = sentence.split(" ")
console.log(words)

// Count vowels in each word
const vowels = 'aeiou'
let totalVowels = 0
for(const word of words){
  // console.log(word)
  let vowelsInWord = 0
  for(const letter of word.toLowerCase()){
    // console.log(letter)
    if(vowels.includes(letter)){
      totalVowels++
      vowelsInWord++
    }
  }
  console.log(`${word} has ${vowelsInWord} vowels`)
  // console.log(`${totalVowels}`)
  // totalVowels = 0
}
console.log("Total Vowels:",totalVowels)


// Expected output:
// Sentence: JavaScript loops are fun
// Words: [ 'JavaScript', 'loops', 'are', 'fun' ]
// Total vowels: 8




// ============================
// FOR..IN SIMPLE EXERCISE
// Calculate total cost of items in a shopping cart
// ============================


// Shopping cart with items and prices
const cart = {
  apple: 0.50,
  banana: 0.30,
  orange: 0.65,
  milk: 2.50
};


console.log("Shopping cart items:");
let totalCost = 0;

// Loop through each item in the cart
for(let item in cart){
  let price = cart[item]
  // console.log(price)
  // console.log(item)
  console.log(`${item}: ${price}`)
  totalCost += price
}
console.log(`Total Cost: ${totalCost}`)


// Expected output:
// Shopping cart items:
// apple: $0.50
// banana: $0.30
// orange: $0.65
// milk: $2.50
// Total cost: $3.95

let names = []
for(let i=0; i<3; i++){
  let name = prompt("Enter a name:")
  names.push(name)
}
// console.log(names)
// Name 1 was: John
// Name 2 was: Alice
// Name 3 was: Mike
for(let i=0; i<names.length; i++){
  console.log(`Name ${i+1} was: ${names[i]}`)
}