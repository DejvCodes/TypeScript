// Readonly

class Department {
    // public readonly depName: string
    // private number: number
    private employee: string[] = []

    constructor(public readonly depName: string, private number: number) {
        // this.depName = depName
        // this.number = number
    }

    describe() {
        // this.depName = "Nový název"
        console.log("Oddělení " + this.depName + " má číslo " + this.number)
    }

    addEmployee(oneEmployee: string) {
        this.employee.push(oneEmployee)
    }

    printEmployee() {
        console.log(this.employee)
    }

    printAllEmployee() {
        for (const oneEmployee of this.employee) {
            console.log(oneEmployee)
        }
    }
}

const HRdep = new Department("Human resources", 100)
const MAdep = new Department("Marketing", 200)
const FIdep = new Department("Finance", 300)

HRdep.addEmployee("David Kalmus")
HRdep.addEmployee("Jiří Novák")
HRdep.addEmployee("Jan Zajíc")

HRdep.printEmployee()
HRdep.printAllEmployee()

// HRdep.employee[3] = "Nový zaměstnanec"

HRdep.printEmployee()