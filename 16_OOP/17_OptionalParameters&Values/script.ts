// Optional Parameters & Values
// ? - volitelné

interface Name {
    name: string 
    age?: number
}

interface IamGreeting extends Name {
    greet(phrase: string): void
}

class Person implements IamGreeting /*, Name*/ {
    name: string
    age?: number

    constructor(na: string, ag?: number) {
        this.name = na
        if (ag) {
            this.age = ag
        }
    }

    greet(myPhrase: string) {
        console.log(`${myPhrase} ${this.name}`)
    }
}

// let person1: Person
let person1: IamGreeting

person1 = new Person("David")
console.log(person1)
person1.greet("Ahoj, já jsem")