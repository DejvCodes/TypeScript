// Pole (array)
var employees = ["David", "Jirka", "Lukáš", "Terka"];
console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);
console.log(employees[3]);
console.log("-----------");
// Procházení pole cyklem
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var oneEmployee = employees_1[_i];
    console.log(oneEmployee);
}
console.log("-----------");
var animals;
animals = ["dog", "cat", "lion"];
for (var _a = 0, animals_1 = animals; _a < animals_1.length; _a++) {
    var oneAnimal = animals_1[_a];
    console.log(oneAnimal);
}
console.log("-----------");
var person = {
    firstName: "David",
    secondName: "Kalmus",
    age: 21,
    hobbies: ["fitness", "programming", "sport", "cars"],
};
console.log(person.hobbies[2]);
console.log("-----------");
for (var _b = 0, _c = person.hobbies; _b < _c.length; _b++) {
    var oneHobby = _c[_b];
    console.log(oneHobby);
}
