/* Realitní kancelář
Popisujeme dům. Dům má 4 okna, 1 dveře, barva je bílá, výšku má 50 metrů, je nový, má garáž.

Vaším úkolem je tyto hodnoty zanést do následujícím proměnných a napsat k nim vždy správný
datový typ:

windows, doors, color, height, isNew (ano, ne), garage (ano, ne)
*/
var windows = 4;
var doors = 1;
var color = "bílá";
var height = 50;
var isNew = true;
var garage = true;
console.log("Počet oken:", windows);
console.log("Počet dveří:", doors);
console.log("Barva:", color);
console.log("Výška:", height);
console.log("Je nov\u00FD: ".concat(isNew ? "Ano" : "Ne"));
console.log("M\u00E1 gar\u00E1\u017E: ".concat(garage ? "Ano" : "Ne"));
