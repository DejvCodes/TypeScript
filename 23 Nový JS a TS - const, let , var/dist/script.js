"use strict";
// const, let, var
// const => Nejde přepsat
const userName = "David";
// let => Jde přepsat
let userName2 = "Dejv";
userName2 = "David";
function sum(n1, n2) {
    let result; // Lokální proměnná
    result = n1 + n2;
    return result;
}
// console.log(result);
if (5 > 3) {
    let result2 = true;
}
// console.log(result2);
