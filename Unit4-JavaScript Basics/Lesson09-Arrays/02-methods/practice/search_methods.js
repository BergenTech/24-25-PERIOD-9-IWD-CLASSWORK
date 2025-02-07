let movies = ['Inception','Titanic','Interstellar','Avatar','The Matrix']


// Get user input from the user
let userMovie = prompt("Enter a movie title to search:");

// Check if the movie exists in the array using includes()
if (movies.includes(userMovie)) {  
    // Find the index of the movie using indexOf()
    let index = movies.indexOf(userMovie);
    // Output the result  
    console.log(`Yes, ${userMovie} is in the list at index ${index}.`);  
} else {
    // Output if the movie is not found  
    console.log(`No, ${userMovie} is not in the list.`);  
}
