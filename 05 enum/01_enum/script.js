// Enum
/* Role:
    0 - admin
    1 - author
    2 - read_only
*/
var Role;
(function (Role) {
    Role["ADMIN"] = "Admin";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["READ_ONLY"] = 300] = "READ_ONLY";
})(Role || (Role = {}));
var employee = {
    name: "David Kalmus",
    age: 21,
    role: Role.ADMIN,
};
console.log(employee.role);
