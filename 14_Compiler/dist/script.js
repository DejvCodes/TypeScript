"use strict";
console.log("Toto je script.ts x");
// Komentář
const myTest = document.querySelector(".my-test");
console.log(myTest);
// noUnusedLocals - upozorňuje, že proměnná není použita
// if (5 > 3) {
//     let result: string = "Je to tak"
// }
// noUnusedParameters - nepoužité parametry
// const sum = (n1: number, n2: number) => {
//     console.log(n1, n2)
// }
// sum(1, 2)
// noImplicitReturns - vše musí mít vždy návratovou hodnotu
const sum2 = (n1, n2) => {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return "Došlo k chybě";
};
sum2(1, 2);
