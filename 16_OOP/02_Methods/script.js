// Methods
var Department = /** @class */ (function () {
    function Department(na, nu) {
        this.depName = na;
        this.depNumber = nu;
    }
    // Methods
    Department.prototype.describe = function () {
        console.log("Odd\u011Blen\u00ED ".concat(this.depName, " m\u00E1 \u010D\u00EDslo ").concat(this.depNumber));
    };
    Department.prototype.updateName = function (newDepName) {
        this.depName = newDepName;
    };
    return Department;
}());
var HRdep = new Department("Human resources", 100);
var MAdep = new Department("Marketing", 200);
var FIdep = new Department("Finance", 300);
HRdep.describe();
MAdep.describe();
FIdep.describe();
HRdep.updateName("~ Nový název ~");
HRdep.describe();
