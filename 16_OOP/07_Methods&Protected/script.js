"use strict";
// Methods and Protected
class Department {
    constructor(depName, depNumber) {
        this.depName = depName;
        this.depNumber = depNumber;
        this.depEmployees = [];
    }
    // Public method
    describe() {
        // this.depName = "Nový název"
        console.log(`Oddělení ${this.depName} má číslo ${this.depNumber}`);
    }
    // Public method
    addEmployee(oneEmployee) {
        this.depEmployees.push(oneEmployee);
    }
    // Public method
    printEmployee() {
        console.log(this.depEmployees);
    }
    // Public method
    printAllEmployees() {
        this.depEmployees.map((oneEmployee) => {
            console.log(oneEmployee);
        });
    }
}
class ITDepartment extends Department {
    constructor(number, admins) {
        super("IT", number); // IT nechat, number přepsat
        this.admins = admins;
        this.admins = admins;
    }
    addEmployee(name) {
        if (name === "Jan" || name === "David") {
            return "Už mají přistup";
        }
        else {
            this.depEmployees.push(name);
        }
    }
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
const ITdep = new ITDepartment(600, ["Jan", "David"]);
// ITdep.describe()
ITdep.addEmployee("David");
ITdep.addEmployee("Tomáš");
ITdep.addEmployee("Jan");
ITdep.addEmployee("Jirka");
console.log(ITdep);
// HRdep.addEmployee("David")
// HRdep.addEmployee("Jan")
// HRdep.printEmployee()
// console.log("---------------------")
// HRdep.printAllEmployees()
// console.log("---------------------")
// // HRdep.depEmployees[2] = "Nový zaměstnanec"
// HRdep.addEmployee("~ Nový zaměstnanec ~")
// HRdep.printEmployee()
