// Funkce jako typ
function sum(num1, num2) {
    return num1 + num2;
}
function test(description) {
    return description;
}
var myNumber = 5;
var myString = "David";
// let myFunction: Function;
var myFunction;
myFunction = sum;
// myFunction = test;
console.log(myFunction(10, 40));
