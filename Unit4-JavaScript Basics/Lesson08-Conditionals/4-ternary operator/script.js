// Ternary Syntax
// condition ? expressionIfTrue : expression
// if(condition){
//      code to execute if true 
// }else {
//      code to execute if false
// }

//conventional if statement
let age = 20; 
let canVote;
if(age >= 18){
    canVote = "Yes";
}else {
    canVote = "No";
}
console.log(`canVote:${canVote}`)

//ternary operator
age = 17;
canVote = (age >= 18) ? "Yes" : "No";
console.log(`age: ${age} canVote:${canVote}`)