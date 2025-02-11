// Tuples - pole s fixní délkou

const array: string[] = ["David", "Lukáš", "Jirka", "Terka"]
const tuples: [string, number] = ["David", 22]

const employee: {
    name: string
    age: number
    hobbies: string[]
    department: [number, string]
} = {
    name: "David",
    age: 22,
    hobbies: ["sport", "programování"],
    department: [2, "IT developer"]
}

console.log(employee.department[0])
console.log(employee.department[1])
console.log("------------------")

// Výpis pomocí cyklu
for (const x of employee.department) {
    console.log(x)
}