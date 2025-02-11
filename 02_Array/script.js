// Pole (array) v TS
var employees;
employees = ["David", "Lukáš", "Jirka", "Terka"];
// Procházení pole
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var oneEmployee = employees_1[_i];
    console.log(oneEmployee);
}
console.log("------ Konec ------");
var person = {
    firstName: "David",
    age: 22,
    hobbies: ["sport", "programování"],
};
console.log("Jm\u00E9no: ".concat(person.firstName));
console.log("V\u011Bk: ".concat(person.age));
console.log("Kon\u00ED\u010Dky: ".concat(person.hobbies[0], ", ").concat(person.hobbies[1]));
