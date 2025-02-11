"use strict";
// Static methods and static properties
class Department {
    constructor(depName, depNumber) {
        this.depName = depName;
        this.depNumber = depNumber;
        this.depEmployees = [];
    }
    // Public method
    describe() {
        // this.depName = "Nový název"
        console.log(`Oddělení ${this.depName} má číslo ${this.depNumber}, rok: ${Department.currentYear}`);
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
    static createEmployee(name) {
        return name;
    }
}
Department.currentYear = 2025;
// const department1 = new Department("Marketing", 300)
// department1.describe()
const employee1 = Department.createEmployee("Martin");
console.log(employee1, Department.currentYear);
console.log("----------");
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
const ITdep = new ITDepartment(600, ["Jan", "David"]);
console.log(ITdep.leadAdmin);
ITdep.leadAdmin = "Tomáš";
console.log(ITdep.mainAdmin);
