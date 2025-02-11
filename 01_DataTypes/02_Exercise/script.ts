/* Realitní kancelář
Popisujeme dům. Dům má 4 okna, 1 dveře, barva je bílá, výšku má 50 metrů, je nový, má garáž.

Vaším úkolem je tyto hodnoty zanést do následujícím proměnných a napsat k nim vždy správný 
datový typ:

windows, doors, color, height, isNew (ano, ne), garage (ano, ne)
*/

const windows: number = 4
const doors: number = 1
const color: string = "bílá"
const height: number = 50
const isNew: boolean = true
const garage: boolean =true

console.log("Počet oken:", windows)
console.log("Počet dveří:", doors)
console.log("Barva:", color)
console.log("Výška:", height)
console.log(`Je nový: ${isNew ? "Ano" : "Ne"}`)
console.log(`Má garáž: ${garage ? "Ano" : "Ne"}`)