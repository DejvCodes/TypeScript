"use strict";
// Singletons and Private Constructor
// abstarct class - slouží jako vzor, ukazuje co musí mít nadefinovaný ostatní 
// classy co budou dědit
class Department {
    constructor(na, nu) {
        this.name = na;
        this.number = nu;
    }
}
// const marketing = new Department("Marketing", 100)
// marketing.describe()
class ITdepartment extends Department {
    // Přidali jsme private
    constructor(depName, depNum) {
        super(depName, depNum);
    }
    // Musí se definovat kvůli tomu, že classa Department je abstraktní
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
