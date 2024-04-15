// Volitelné parametry a metody

interface Name {
    name: string
    age?: number
}

interface IamGreeting extends Name {
    greet(phrase: string): void
}

class Person implements IamGreeting {
    name: string
    age?: number

    constructor(n: string, ag?: number){
        this.name = n
        if (ag) {
            this.age = ag
        }
    }

    greet(myPhrase: string){
        console.log(myPhrase + " " + this.name)
    }
}

let person2: IamGreeting
person2 = new Person("David", 21)
console.log(person2)
person2.greet("Ahoj já jsem")

let person3 : IamGreeting
person3 = new Person("Jirka")
console.log(person3)