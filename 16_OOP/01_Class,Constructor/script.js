// OOP -  Object Oriented Programming
var Department = /** @class */ (function () {
    function Department(na, nu) {
        this.depName = na;
        this.depNumber = nu;
    }
    return Department;
}());
var HRdep = new Department("Human resources", 100);
var MAdep = new Department("Marketing", 200);
var FIdep = new Department("Finance", 300);
console.log(HRdep);
console.log(MAdep);
console.log(FIdep);
