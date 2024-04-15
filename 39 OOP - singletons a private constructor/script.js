"use strict";
// Singletons a private constructor
// Vytvoření class Department
class Department {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}
// const marketing = new Department("Marketing", 100)
// marketing.describe()
// Vytvoření ITdepartment a rozšíření o classu Department
class ITdepartment extends Department {
    // Přidali jsme private
    constructor(depName, depNum) {
        super(depName, depNum);
    }
    describe() {
        console.log("Text metody describe");
    }
    static getObject() {
        if (this.myObject) {
            return this.myObject;
        }
        this.myObject = new ITdepartment("IT", 999);
        return this.myObject;
    }
}
const IT = ITdepartment.getObject();
console.log(IT);
const IT2 = ITdepartment.getObject();
console.log(IT2);
// const ITdepCzech = new ITdepartment("CzechIT", 900)
// ITdepCzech.describe()
