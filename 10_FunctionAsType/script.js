// Funkce jako typ
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 9));
function test(description) {
    console.log(description);
}
var myNumber = 5;
var myString = "David";
// let myFunction: Function
var myFunction;
myFunction = sum;
console.log(myFunction(10, 40));
