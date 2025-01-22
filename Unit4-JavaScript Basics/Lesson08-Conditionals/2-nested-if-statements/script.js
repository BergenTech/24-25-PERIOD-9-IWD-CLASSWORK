// Even or Odd Number Checker
// let number = parseInt(prompt('Enter a number:'))
// if(!isNaN(number)){
//     if(number % 2 === 0){
//         alert(`${number}: is even!`)
//     }else {
//         alert(`${number}: is odd!`)
//     }
// }else {
//     alert("Please enter a valid number!")
// }


// Traffic light signal checker
let signal = prompt("Enter the traffic light color(red, yellow, or green):").toLowerCase();

if(signal === "red" || signal === "yellow" || signal === "green"){
    if(signal == 'red') alert('STOP!')
    else if(signal == 'yellow') alert('Get ready to move!')
    else alert('Go!')
}else {
    alert("Invalid traffic light color entered!");
}
