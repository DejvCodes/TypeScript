"use strict";
// Private and Public
class Department {
    constructor(na, nu) {
        this.na = na;
        this.nu = nu;
        // public depName: string
        // private depNumber: number
        this.depEmployees = [];
        // this.depName = na
        // this.depNumber = nu
    }
    // Public method
    describe() {
        console.log(`Oddělení ${this.na} má číslo ${this.nu}`);
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
const HRdep = new Department("Human resources", 100);
const MAdep = new Department("Marketing", 200);
const FIdep = new Department("Finance", 300);
HRdep.addEmployee("David");
HRdep.addEmployee("Jan");
HRdep.printEmployee();
console.log("---------------------");
HRdep.printAllEmployees();
console.log("---------------------");
// HRdep.depEmployees[2] = "Nový zaměstnanec"
HRdep.addEmployee("~ Nový zaměstnanec ~");
HRdep.printEmployee();
// public (výchozí):
// Vlastnosti a metody označené jako public jsou přístupné odkudkoliv, 
// jak uvnitř třídy, tak mimo ni.
// Ve výchozím nastavení jsou všechny vlastnosti a metody public.
// private:
// Vlastnosti a metody označené jako private mohou být přístupné pouze v rámci třídy.
// Mimo třídu k těmto vlastnostem a metodám není možné přistupovat.
