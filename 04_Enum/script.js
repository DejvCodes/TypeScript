// Enum je speciální datový typ, který umožňuje definovat pojmenované sady 
// číselných nebo řetězcových hodnot pro lepší čitelnost a organizaci kódu.
/* Role :
    0 - admin
    1 - autor
    2 - read_only
*/
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["READ_ONLY"] = 300] = "READ_ONLY";
})(Role || (Role = {}));
var employee = {
    name: "David",
    age: 22,
    role: Role.ADMIN
};
console.log(employee.role);
