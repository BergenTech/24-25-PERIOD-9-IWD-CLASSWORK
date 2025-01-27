let userName = prompt("Enter your name:")
//check if a valid name is entered
if(userName.trim().length > 0){
    // console.log(`${userName}`)
    //generate a random index
    let len = userName.length
    let randNumber = Math.floor(Math.random()*len)
    let char = userName.charAt(randNumber)
    //prompt the user to guess a character
    let guess = prompt(`Pick a character from "${userName}"`)
    //validate the guess
    if(guess.trim().toLowerCase() === char.toLowerCase()){
        console.log(`You've got it The character was "${char}"`)
    }else {
        console.log(`Sorry, you missed it! The character was "${char}"`)
    }
}else {
    console.log("Enter a valid name!")
}