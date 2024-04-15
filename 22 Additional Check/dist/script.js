"use strict";
// noUnusedLocals => Ukáže, když máme vytvořenou lokální proměnnou a není použita
//                => Nepoužívané lokální proměnné
if (5 > 3) {
    let result = "Je to tak";
    console.log(result);
}
let result2 = 5;
// noUnusedParameters => Ukáže, když nemáme použitý nějaký paramentr
function sum(n1, n2) {
    console.log(n1, n2);
}
sum(1, 2);
// noImplicitReturns => Hlídá, aby vše mělo návratovou hodnotu
function sum2(n1, n2) {
    if (n1 + n2 >= 0) {
        return n1 + n2;
    }
    else {
        return "Došlo k chybě";
    }
}
