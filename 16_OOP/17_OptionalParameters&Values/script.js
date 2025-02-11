"use strict";
// Optional Parameters & Values
// ? - volitelné
class Person {
    constructor(na, ag) {
        this.name = na;
        if (ag) {
            this.age = ag;
        }
    }
    greet(myPhrase) {
        console.log(`${myPhrase} ${this.name}`);
    }
}
// let person1: Person
let person1;
person1 = new Person("David");
console.log(person1);
person1.greet("Ahoj, já jsem");
