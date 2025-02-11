"use strict";
// Interface
let person1;
person1 = {
    name: "David",
    age: 22,
    greet(myPhrase) {
        console.log(`${myPhrase} ${this.name}`);
    }
};
person1.greet("Ahoj, já jsem");
