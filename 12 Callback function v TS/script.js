// Callback funkce - funkce jako parametr jiné funkce
var y = function (nejakeCislo) { return console.log(nejakeCislo); };
y(10);
y(60);
function sum(n1, n2, callBackFun) {
    var result = n1 + n2;
    callBackFun(result);
}
sum(50, 3, function (x) { return console.log(x); });
