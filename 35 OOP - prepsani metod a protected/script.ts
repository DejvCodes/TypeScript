// Přepsání metod a protected

class Department {
    // public readonly depName: string
    // private number: number
    protected employee: string[] = []

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

// Vytvoření class ITDepartment a dědění vlastností z Department
class ITDepartment extends Department {
    public admins: string[]

    constructor(number: number, admins: string[]) {
        super('IT', number) // IT nechat, přepsat number
        this.admins = admins
    }

    addEmployee(name: string) {
        if (name === "David" || name === "Jirka") {
            return "Už mají přistup"
        } else {
            this.employee.push(name)
        }
    }
}

const frontEndDepartment = new ITDepartment(600, ["David", "Jirka"])
frontEndDepartment.describe()

frontEndDepartment.addEmployee("Lukáš")
frontEndDepartment.addEmployee("David")

console.log(frontEndDepartment)