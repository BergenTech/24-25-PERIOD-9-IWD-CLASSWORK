// Password Validator Function
/**
 * Validates a password against security requirements
 * @param {string} password - The password to validate
 * @param {number} minLength - The minimum required length for the password
 * @return {object} Result object with valid (boolean) and message (string) properties
 */
function validatePassword(password, minLength) {
  // TODO1: Check if the password meets the minimum length requirement
  // If it doesn't, return an object with valid: false and an appropriate message
  if (password.length < minLength) {
    return {
      valid: false,
      message: `Password must be at least ${minLength} characters long`
    }
  }

  // TODO2: Check if the password contains at least one uppercase letter
  // Hint: Create a variable to track if an uppercase letter is found
  // Loop through each character in the password
  // Check if any character is between 'A' and 'Z'
  let hasUpperCase = false
  // for (let i=0; i<password.length; i++){
  //   if(password[i] >= 'A' && password[i] <= 'Z'){
  //     hasUpperCase = true
  //     break
  //   }
  // }
  for (let char of password) {
    if (char >= 'A' && char <= 'Z') {
      hasUpperCase = true
      break
    }
    if (!hasUpperCase) {
      return {
        valid: false,
        message: `Password must contain at least one uppercase letter`
      }
    }

    // TODO3: Check if the password contains at least one lowercase letter
    // Follow the same approach as for uppercase letters
    let hasLowerCase = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= 'a' && password[i] <= 'z') {
        hasLowerCase = true;
        break;
      }
    }
    if (!hasLowerCase) {
      return {
        valid: false,
        message: "Password must contain at least one lowercase letter"
      };
    }

    // TODO4: Check if the password contains at least one number
    // Hint: Check if any character is between '0' and '9'
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= '0' && password[i] <= '9') {
            hasNumber = true;
            break;
        }
    }
    if (!hasNumber) {
        return {
            valid: false,
            message: "Password must contain at least one number"
        };
    }

    // TODO5: If all checks pass, return an object with valid: true and a success message
    return {
      valid: true,
      message: "Password is valid!"
    }
  }


  console.log(validatePassword("abc1", 5));
  // Should return: { valid: false, message: "Password must be at least 8 characters long" }

  console.log(validatePassword("lowercase123!", 8));
  // Should return: { valid: false, message: "Password must contain at least one uppercase letter" }

  console.log(validatePassword("UPPERCASE123!", 8));
  // Should return: { valid: false, message: "Password must contain at least one lowercase letter" }

  console.log(validatePassword("Password!", 8));
  // Should return: { valid: false, message: "Password must contain at least one number" }

  // Test cases - run these to check your solution
  console.log(validatePassword("Pass123!", 8));
// Should return: { valid: true, message: "Password is valid" }