// Array Destructuring
const employees: string[] = ["David", "Lukáš", "Tereza", "Jan"]

const [employee1, employee2, ...otherEmployees] = employees

console.log(employee1)       // "David"
console.log(employee2)       // "Lukáš"
console.log(otherEmployees)  // ["Tereza", "Jan"]
console.log(employees)       // ["David", "Lukáš", "Tereza", "Jan"]
console.log("-------------")

// Object Destructuring
interface Person {
    firstName: string
    age: number
    hobby: string
}

const person: Person = {
    firstName: "David",
    age: 21,
    hobby: "programming",
}

const { firstName, age, hobby } = person
console.log(firstName, age, hobby)