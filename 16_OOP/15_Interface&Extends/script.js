"use strict";
// Interface and Extends
class Person {
    constructor(na) {
        this.name = na;
    }
    greet(myPhrase) {
        console.log(`${myPhrase} ${this.name}`);
    }
    sayHi(name) {
        console.log(`Hello ${name}`);
    }
}
// let person1: Person
let person1;
person1 = new Person("David");
console.log(person1);
person1.greet("Ahoj, já jsem");
// person1.sayHi("David")
