// Interface and Class
// - Jedna class více interfaces
// - Nebo jeden interface je rozšířen o další interface

interface IamGreeting {
    name: string

    greet(phrase: string): void
}

class Person implements IamGreeting {
    // V této classe musí být vše / jen co je definováno v "interface IamGreeting"
    name: string

    constructor(na: string) {
        this.name = na
    }

    greet(myPhrase: string) {
        console.log(`${myPhrase} ${this.name}`)
    }

    sayHi(name: string) {
        console.log(`Hello ${name}`)
    }
}

// let person1: Person
let person1: IamGreeting

person1 = new Person("David")
console.log(person1)
person1.greet("Ahoj, já jsem")
// person1.sayHi("David")