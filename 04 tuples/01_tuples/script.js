// Tuples - pole s fixní délkou
var array = ["David", "Jirky", "Terka"];
var tuples = ["David", 10];
var employee = {
    name: "David",
    age: 21,
    hobbies: ["fitness", "programming", "cars"],
    department: [2, "IT Developer"],
};
console.log(employee.department[0]);
console.log(employee.department[1]);
console.log("----------");
for (var _i = 0, _a = employee.department; _i < _a.length; _i++) {
    var x = _a[_i];
    console.log(x);
}
