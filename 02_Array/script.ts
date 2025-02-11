// Pole (array) v TS

let employees: string[]
employees = ["David", "Lukáš", "Jirka", "Terka"]

// Procházení pole
for (const oneEmployee of employees) {
    console.log(oneEmployee)
}
console.log("------ Konec ------")


interface Person {
    firstName: string
    age: number
    hobbies: string[]
}

const person: Person = {
    firstName: "David",
    age: 22,
    hobbies: ["sport", "programování"],
}

console.log(`Jméno: ${person.firstName}`)
console.log(`Věk: ${person.age}`)
console.log(`Koníčky: ${person.hobbies[0]}, ${person.hobbies[1]}`)