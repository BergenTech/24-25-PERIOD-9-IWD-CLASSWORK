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
  for(const letter of word.toLowerCase()){
    // console.log(letter)
    if(vowels.includes(letter)){
      totalVowels++
    }
  }
  console.log(`${totalVowels}`)
  totalVowels = 0
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


// console.log("Shopping cart items:");
// let totalCost = 0;


// Loop through each item in the cart






// Expected output:
// Shopping cart items:
// apple: $0.50
// banana: $0.30
// orange: $0.65
// milk: $2.50
// Total cost: $3.95

