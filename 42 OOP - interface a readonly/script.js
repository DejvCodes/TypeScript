"use strict";
// Interface a readonly
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
// person2.name = "Jirka" 
console.log(person2);
person2.greet("Ahoj, já jsem");
// person2.sayHi()
// let person1: Person
// person1 = {
//     name: "David",
//     age: 21,
//     greet(myPhrase: string) {
//         console.log(`${myPhrase} ${this.name}`)
//     }
// }
// person1.greet("Ahoj, já jsem")
