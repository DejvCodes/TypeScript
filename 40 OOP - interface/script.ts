// Interface 

interface Person {
    name: string
    age: number

    greet(phrase: string): void
}

let person1: Person
person1 = {
    name: "David",
    age: 21,

    greet(myPhrase: string) {
        console.log(`${myPhrase} ${this.name}`)
    }
}

person1.greet("Ahoj, já jsem")