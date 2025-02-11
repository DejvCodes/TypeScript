"use strict";
// Getters, setters, throw error
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
        this.mainAdmin = admins[0];
    }
    // Getter - musí mít return
    get leadAdmin() {
        if (this.mainAdmin) {
            return this.mainAdmin;
        }
        throw new Error("Hlavní admin nenalezen");
    }
    // Setter - musí do něj poslat hodnotu (nemůže vracet hodnotu)
    set leadAdmin(value) {
        if (this.mainAdmin) {
            this.mainAdmin = value;
        }
        else {
            throw new Error("Hlavní admin nenalezen");
        }
    }
    addEmployee(name) {
        if (name === "Jan" || name === "David") {
            console.log("Už mají přístup");
            return;
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
// console.log(ITdep.leadAdmin)
ITdep.leadAdmin = "Ondřej";
console.log(ITdep);
