// JavaScript Functions - Starter Code
// ================================

// ============================

// Here's what we're trying to improve:
let width1 = 5;
let height1 = 10;
let area1 = width1 * height1;
console.log("Area of rectangle: " + area1 + " square units");

// 1. Functions Without Parameters
function calculateArea(){
  let width2 = 7;
  let height2 = 3;
  let area2 = width2 * height2;
  console.log("Area of rectangle: " + area2 + " square units");
}

// calculateArea()

// 2. Functions With Parameters
function calculateArea2(w, h){
  let width = w;
  let height = h;
  let area = width * height;
  console.log("Area of rectangle: " + area + " square units");
}
calculateArea(7,3)
calculateArea(5,5)
calculateArea(15,50)
console.log(calculateArea2(7,3))
// 3. Functions that return values
function calculateArea(w, h){
  let width = w;
  let height = h;
  let area = width * height;
  // console.log("Area of rectangle: " + area + " square units");
  return area
}
let area = calculateArea(7,3)
// console.log(area)
console.log(calculateArea(7,3))

// 4. Function Expressions
const rectangleArea = function(w,h){
  return w*h
}
console.log(rectangleArea(7,3))

// 5. Arrow Functions
const celsiusToFahrenheit = c => c*(9/5)+32
console.log(celsiusToFahrenheit(0))