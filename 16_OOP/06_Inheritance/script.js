"use strict";
// Inheritance - dědění
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
}
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
const ITdep = new ITDepartment(600, ["Jan", "David", "Jirka"]);
ITdep.describe();
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
// public (výchozí):
// Vlastnosti a metody označené jako public jsou přístupné odkudkoliv, 
// jak uvnitř třídy, tak mimo ni.
// Ve výchozím nastavení jsou všechny vlastnosti a metody public.
// private:
// Vlastnosti a metody označené jako private mohou být přístupné pouze v rámci třídy.
// Mimo třídu k těmto vlastnostem a metodám není možné přistupovat.
