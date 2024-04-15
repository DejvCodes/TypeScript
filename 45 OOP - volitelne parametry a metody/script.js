"use strict";
// Volitelné parametry a metody
class Person {
    constructor(n, ag) {
        this.name = n;
        if (ag) {
            this.age = ag;
        }
    }
    greet(myPhrase) {
        console.log(myPhrase + " " + this.name);
    }
}
let person2;
person2 = new Person("David", 21);
console.log(person2);
person2.greet("Ahoj já jsem");
let person3;
person3 = new Person("Jirka");
console.log(person3);
