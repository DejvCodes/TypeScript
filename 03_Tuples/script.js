// Tuples - pole s fixní délkou
var array = ["David", "Lukáš", "Jirka", "Terka"];
var tuples = ["David", 22];
var employee = {
    name: "David",
    age: 22,
    hobbies: ["sport", "programování"],
    department: [2, "IT developer"]
};
console.log(employee.department[0]);
console.log(employee.department[1]);
console.log("------------------");
// Výpis pomocí cyklu
for (var _i = 0, _a = employee.department; _i < _a.length; _i++) {
    var x = _a[_i];
    console.log(x);
}
