"use strict";
// Objektově orientované programování (OOP)
class Department {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
console.log(HRdep);
console.log(MAdep);
console.log(FIdep);
console.log(HRdep.name);
console.log(MAdep.name);
console.log(FIdep.name);
console.log(HRdep.number);
console.log(MAdep.number);
console.log(FIdep.number);
