// Abstract Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstarct class - slouží jako vzor, ukazuje co musí mít nadefinovaný ostatní 
// classy co budou dědit
var Department = /** @class */ (function () {
    function Department(na, nu) {
        this.name = na;
        this.number = nu;
    }
    return Department;
}());
// const marketing = new Department("Marketing", 100)
// marketing.describe()
var ITdepartment = /** @class */ (function (_super) {
    __extends(ITdepartment, _super);
    function ITdepartment(depName, depNum) {
        return _super.call(this, depName, depNum) || this;
    }
    // Musí se definovat kvůli tomu, že classa Department je abstraktní
    ITdepartment.prototype.describe = function () {
        console.log("Text metody describe");
    };
    return ITdepartment;
}(Department));
var ITdepCzech = new ITdepartment("CzechIT", 900);
ITdepCzech.describe();
