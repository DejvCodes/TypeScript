// Callback funkce - funkce jako parametr jiné funkce
var myFunction = function (num) { return console.log(num); };
myFunction(10);
myFunction(60);
var sum = function (num1, num2, callBackFun) {
    var result = num1 + num2;
    callBackFun(result);
};
var logResult = function (result) { return console.log("Suma je: ".concat(result)); };
sum(50, 3, logResult);
