function validatePassword(password, minLength) {
  if (password.length < minLength) {
    return {
      valid: false,
      message: `Password must be at least ${minLength} characters long`
    }
  }

  let hasUpperCase = false
  let hasLowerCase = false
  let hasNumber = false

  for (let char of password) {
    if (char >= 'A' && char <= "Z") hasUpperCase = true
    if (char >= 'a' && char <= "z") hasLowerCase = true
    if (char >= '0' && char <= "9") hasNumber = true

    //Exit if all conditions are met
    if (hasUpperCase && hasLowerCase && hasNumber) break
  }

  if (!hasUpperCase) {
    return {
      valid: false,
      message: `Password must contain at least one uppercase letter`
    }
  }

  if (!hasLowerCase) {
    return {
      valid: false,
      message: "Password must contain at least one lowercase letter"
    };
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