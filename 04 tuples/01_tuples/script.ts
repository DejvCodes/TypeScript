// Tuples - pole s fixní délkou

const array: string[] = ["David", "Jirky", "Terka"];
const tuples: [string, number] = ["David", 10];

const employee: {
    name: string,
    age: number,
    hobbies: string[],
    department: [number, string],
} = {
    name: "David",
    age: 21,
    hobbies: ["fitness", "programming", "cars"],
    department: [2, "IT Developer"],
}

// Výpis pomocí console.log
console.log(employee.department[0]);
console.log(employee.department[1]);
console.log("----------");

// Výpis pomocí cyklu
for (const x of employee.department) {
    console.log(x);
}