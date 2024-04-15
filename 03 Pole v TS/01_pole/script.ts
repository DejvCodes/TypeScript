// Pole (array)

const employees = ["David", "Jirka", "Lukáš", "Terka"];
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);
console.log(employees[3]);
console.log("-----------");

// Procházení pole cyklem
for (const oneEmployee of employees) {
    console.log(oneEmployee);
}
console.log("-----------");


let animals: string[]; 
animals = ["dog", "cat", "lion"];

for (const oneAnimal of animals) {
    console.log(oneAnimal);
}
console.log("-----------");

const person = {
    firstName: "David",
    secondName: "Kalmus",
    age: 21,
    hobbies: ["fitness", "programming", "sport", "cars"],
}

console.log(person.hobbies[2]);
console.log("-----------");

for (const oneHobby of person.hobbies) {
    console.log(oneHobby);
}