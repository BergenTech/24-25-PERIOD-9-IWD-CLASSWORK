// ========================================================================
// Class Practice
// ========================================================================


const profiles = {
    alice: {
      followers: 850,
      posts: [
        { content: 'Had a great day at the park!', likes: 120 },
        { content: 'Loving this new recipe.', likes: 80 }
      ],
      verified: false
    },
    bob: {
      followers: 1500,
      posts: [
        { content: 'Check out my latest travel vlog.', likes: 300 },
        { content: 'Sunny days ahead!', likes: 90 }
      ],
      verified: true
    },
    charlie: {
      followers: 500,
      posts: [
        { content: 'New art project coming soon.', likes: 45 },
        { content: 'Sketching in the park.', likes: 60 }
      ],
      verified: false
    }
  };
  
// Iterate through the profiles
let profilesArray = Object.entries(profiles)
profilesArray.forEach(([username, profile]) => {
    //1 - Print username and follower count
    console.log(`${username} has ${profile.followers} followers`)

    //2-Mark influencer if followers > 1000
    if(profile.followers > 1000){
        profile.influencer = true
    }
})
  
  
  
  
  
  
  // ========================================================================
  // END OF CLASS PRACTICE
  // ========================================================================
  
  
  
  
  
  
  
  
  // ========================================================================
  // Homework : Object Practice
  // ========================================================================
  
  
  // Create an online store inventory system:
  // 1. Create an object called 'inventory' with the following categories:
  //    - electronics: an empty object
  //    - clothing: an empty object
  //    - books: an empty object
  //
  // 2. Add the following products to electronics:
  //    - laptop: { price: 1200, stock: 15 }
  //    - phone: { price: 800, stock: 25 }
  //    - tablet: { price: 500, stock: 10 }
  //
  // 3. Add the following products to clothing:
  //    - shirts: { price: 25, stock: 50 }
  //    - pants: { price: 35, stock: 40 }
  //
  // 4. Add the following products to books:
  //    - fiction: { price: 15, stock: 60 }
  //    - nonfiction: { price: 20, stock: 45 }
  //
  // 5. Perform the following operations:
  //    - Get all product categories using Object.keys()
  //    - List all electronics products using Object.keys()
  //    - Update the phone stock to 30
  //    - Add a new product 'headphones' to electronics with price 100 and stock 20
  //    - Check if 'laptop' exists in electronics using hasOwnProperty
  //    - Log the final inventory object
  
  
  // Write your solution here:
  
  
  
  
  // ========================================================================
  // END OF HOMEWORK
  // ========================================================================
  
  
  
  