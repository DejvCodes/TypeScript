// Interface and Extends

interface Name {
    readonly name: string 
}

interface IamGreeting extends Name {
    greet(phrase: string): void
}

class Person implements IamGreeting /*, Name*/ {
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