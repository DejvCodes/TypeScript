"use strict";
// OOP a metody
class Department {
    constructor(depName, number) {
        this.depName = depName;
        this.number = number;
    }
    describe() {
        console.log("Oddělení " + this.depName + " má číslo " + this.number);
    }
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
HRdep.describe();
MAdep.describe();
FIdep.describe();
