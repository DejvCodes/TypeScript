// Methods and Protected

class Department {
    protected depEmployees: string[] = []

    constructor(public readonly depName: string, private depNumber: number) {}

    // Public method
    describe() {
        // this.depName = "Nový název"
        console.log(`Oddělení ${this.depName} má číslo ${this.depNumber}`)
    }

    // Public method
    addEmployee(oneEmployee: string) {
        this.depEmployees.push(oneEmployee)
    }

    // Public method
    printEmployee() {
        console.log(this.depEmployees)
    }

    // Public method
    printAllEmployees() {
        this.depEmployees.map((oneEmployee) => {
            console.log(oneEmployee)
        })
    }
}

class ITDepartment extends Department {

    constructor(number: number, public admins: string[]) {
        super("IT", number) // IT nechat, number přepsat
        this.admins = admins
    }

    addEmployee(name: string) {
        if (name === "Jan" || name === "David") {
            return "Už mají přistup"
        } else {
            this.depEmployees.push(name)
        }
    }
}

const HRdep = new Department("Human resources", 100)
const MAdep = new Department("Marketing", 200)
const FIdep = new Department("Finance", 300)

const ITdep = new ITDepartment(600, ["Jan", "David"])
// ITdep.describe()

ITdep.addEmployee("David")
ITdep.addEmployee("Tomáš")
ITdep.addEmployee("Jan")
ITdep.addEmployee("Jirka")

console.log(ITdep)

// HRdep.addEmployee("David")
// HRdep.addEmployee("Jan")
// HRdep.printEmployee()
// console.log("---------------------")
// HRdep.printAllEmployees()
// console.log("---------------------")

// // HRdep.depEmployees[2] = "Nový zaměstnanec"
// HRdep.addEmployee("~ Nový zaměstnanec ~")
// HRdep.printEmployee()