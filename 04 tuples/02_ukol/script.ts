/* Oblast domu v realitní kanceláři
 
Máte realitní kancelář ve městě, které se dělí do pěti částí. 
Tyto části jsou očíslovány (1 až 5). Každá část se dělí ještě na sever, jih, 
západ, východ a střed. Přidejte do objektu house tuple s názvem location, které má 
vždy dva údaje - číslo části a určenou oblast. Tento konkrétní dům bude v 5. části 
a v jižní oblasti.
 
Vypište tuple do konzole pomocí console.log a for cyklu
*/

const house: {
    windows: number,
    location: [number, string],
} = {
    windows: 4,
    location: [
        5, "jih",
    ],
}

// Výpis pomocí console.log
console.log(house.location[0]);
console.log(house.location[1]);
console.log("---------");


// Výpis pomocí cyklu
for (const data of house.location) {
    console.log(data);
}