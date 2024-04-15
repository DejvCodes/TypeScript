"use strict";
// Procvičování OOP - realitní kancelář a domy
/*
Vytvořte obecný předpis (class) s názvem House. Bude mít vlastnosti street,
number, floors. Tyto vlastnosti se budou zadávat již při vytvoření (constructor)

Vytvořte 3 libovolné objekty podle classy a uložte do proměnných. Následně vypište
všechny tři ulice, všechna tři čísla a všechna tři podlaží do konzole.
*/
class House {
    constructor(street, number, floors) {
        this.street = street;
        this.number = number;
        this.floors = floors;
    }
}
const house1 = new House("Budějovická", 777, 3);
const house2 = new House("Pardubická", 111, 2);
const house3 = new House("Dukelská", 333, 7);
// Vypsání ulic
console.log(house1.street);
console.log(house2.street);
console.log(house3.street);
console.log("--------");
// Vypsání čísla domu
console.log(house1.number);
console.log(house2.number);
console.log(house3.number);
console.log("--------");
// Vypsání podlaží
console.log(house1.floors);
console.log(house2.floors);
console.log(house3.floors);
