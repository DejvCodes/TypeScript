// const, let, var -(nepoužívat)

// const => nejde přepsat
const userName: string = "David"

// let => jde přepsat
let userName2: string = "David"
userName2 = "Jan"

// Scope
// let result1 - Globální proměnná
function sum(n1: number, n2: number): number {
    let result // Lokální proměnná
    result = n1 + n2
    return result
}
console.log(sum(1, 2))
// console.log(result) - nebude fungovat

if (5 > 3) {
    let result2 = true
    console.log(result2)
}
// console.log(result2) - nebude fungovat


// Shrnutí (const vs. let vs. var)
// Deklarace	Přepis hodnoty?	     Scope	                    Doporučeno?
// const	    ❌ Nelze změnit	     Blokový	                ✅ ANO (používat co nejvíc)
// let	        ✅ Lze změnit	     Blokový	                ✅ ANO (pokud potřebujeme měnit hodnotu)
// var	        ✅ Lze změnit	     Funkční (ne blokový!)	    ❌ NE (nebezpečné chování)
