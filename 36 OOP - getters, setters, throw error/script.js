"use strict";
// Getters, setters, throw Error
class Department {
    constructor(depName, number) {
        this.depName = depName;
        this.number = number;
        // public readonly depName: string
        // private number: number
        this.employee = [];
        // this.depName = depName
        // this.number = number
    }
    describe() {
        // this.depName = "Nový název"
        console.log("Oddělení " + this.depName + " má číslo " + this.number);
    }
    addEmployee(oneEmployee) {
        this.employee.push(oneEmployee);
    }
    printEmployee() {
        console.log(this.employee);
    }
    printAllEmployee() {
        for (const oneEmployee of this.employee) {
            console.log(oneEmployee);
        }
    }
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
HRdep.addEmployee("David Kalmus");
HRdep.addEmployee("Jiří Novák");
HRdep.addEmployee("Jan Zajíc");
HRdep.printEmployee();
HRdep.printAllEmployee();
// HRdep.employee[3] = "Nový zaměstnanec"
HRdep.printEmployee();
// Vytvoření class ITDepartment a dědění vlastností z Department
class ITDepartment extends Department {
    constructor(number, admins) {
        super('IT', number); // IT nechat, přepsat number
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
    // Setter - musíme do něj poslat hodnotu (nemůže vracet hodnotu)
    set leadAdmin(value) {
        if (this.mainAdmin) {
            this.mainAdmin = value;
        }
        else {
            throw new Error("Hlavní admin nenalezen");
        }
    }
    addEmployee(name) {
        if (name === "David" || name === "Jirka") {
            return "Už mají přistup";
        }
        else {
            this.employee.push(name);
        }
    }
}
const frontEndDepartment = new ITDepartment(600, ["David", "Jirka"]);
console.log(frontEndDepartment.leadAdmin);
frontEndDepartment.leadAdmin = "Tomáš";
