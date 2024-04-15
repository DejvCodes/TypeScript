// Array destructuring
const employees: string[] = ["David", "Terka", "Lukáš", "Maty"];

const [employee1, employee2, ...otherEmployees] = employees
console.log(employee1);
console.log(employee2);
console.log(otherEmployees);
console.log(employees);

// Object destructuring
const person = {
    firstName: "David",
    age: 21,
    hobby: "programming"
}

const {firstName, age} = person;
console.log(firstName);
console.log(age);