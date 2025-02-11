// Enum je speciální datový typ, který umožňuje definovat pojmenované sady 
// číselných nebo řetězcových hodnot pro lepší čitelnost a organizaci kódu.

/* Role :
    0 - admin
    1 - autor
    2 - read_only
*/

enum Role {
    ADMIN = "Admin", 
    AUTHOR = 200, 
    READ_ONLY = 300
}

const employee = {
    name: "David",
    age: 22,
    role: Role.ADMIN
}

console.log(employee.role)