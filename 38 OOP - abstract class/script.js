"use strict";
// Abstract class
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
    constructor(depNum) {
        super("IT", depNum);
    }
    describe() {
        console.log("Text metody describe");
    }
}
const ITdepCzech = new ITdepartment(900);
ITdepCzech.describe();
