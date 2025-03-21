//Reverse Number
// 1-conventional way - loop with a string
function reverseNumber(n){
  let reversed = ""
  let strNum = n.toString()
  for (let i = strNum.length-1; i >=0; i--){
    reversed += strNum[i]
  }
  return Number(reversed)
}

console.log(reverseNumber(129))

function reverseNumber2(n){
  return Number(n.toString().split('').reverse().join(''))
}

//Palindrome check
const isPalindrome = (str) => {
  str = str.toLowerCase().trim() //clean str
  const reversed = str.split('').reverse().join('')
  return str === reversed
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("hello"))