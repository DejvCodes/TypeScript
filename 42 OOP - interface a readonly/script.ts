// Interface a readonly

interface IamGreeting {
    readonly name: string

    greet(phrase: string): void
}

// Implementování 
class Person implements IamGreeting {
    name: string

    constructor(name: string) {
        this.name = name
    }

    greet(myPhrase: string) {
        console.log(`${myPhrase} ${this.name}`)
    }

    // sayHi() {
    //     console.log("Hello")
    // }
}

let person2: IamGreeting

person2 = new Person("David")
// person2.name = "Jirka" 
console.log(person2)
person2.greet("Ahoj, já jsem")
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