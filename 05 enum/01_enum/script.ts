// Enum

/* Role:
    0 - admin
    1 - author
    2 - read_only
*/

enum Role {ADMIN = "Admin", AUTHOR = 200, READ_ONLY = 300}

const employee = {
    name: "David Kalmus",
    age: 21,
    role: Role.ADMIN,
}

console.log(employee.role);
