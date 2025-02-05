//Define the secret word
// let secretWord = 'javascript'
let secretWord = prompt("Enter a word to be guessed!")
//prompt the user for a guess
let guess = prompt("Guess the word:")

// check the guess - first attempt
if(guess.toLowerCase().trim() === secretWord.toLowerCase().trim()){
    alert("Congrats! You guessed it at first try!")
}else {
    //provide a hint: the length of the secretWord
    let lenOfSecret = secretWord.length
    alert(`Wrong guess! Hint: The word has ${lenOfSecret} letters.`)
    //prompt for the second guess and update guess variable
    guess = prompt("Try Again:")
    //check the second guess
    if(guess.toLowerCase() === secretWord.toLowerCase()){
        alert("Congrats! You guessed it at second try!")
    }else {
        //provide second hint: first and last character
        let firstChar = secretWord[0]
        let lastChar = secretWord[lenOfSecret-1]
        alert(`Hint: The word starts with "${firstChar}" and ends with "${lastChar}".`)
        //Prompt for the 3rd attempt and update the guess variable
        guess = prompt("Your last try:")
        //Final Check
        if(guess.toLowerCase() === secretWord.toLowerCase()){
            alert("Congrats! You guessed it finally!")
        }else{
            //reveal the correct word
            alert(`Sorry, you didn't guess the word. The correct word was "${secretWord}".`)
        }
    }
}