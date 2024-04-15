"use strict";
// Interfaces a extends
// Jedna class více interfaces
// Nebo jeden interface je rozšířený o další interface
// Implementování 
class Person {
    constructor(name) {
        this.name = name;
    }
    greet(myPhrase) {
        console.log(`${myPhrase} ${this.name}`);
    }
}
let person2;
person2 = new Person("David");
console.log(person2);
person2.greet("Ahoj, já jsem");
// let person1: Person
// person1 = {
//     name: "David",
//     age: 21,
//     greet(myPhrase: string) {
//         console.log(`${myPhrase} ${this.name}`)
//     }
// }
// person1.greet("Ahoj, já jsem")
