// Statické vlastnosti a metody

class Department {
    // public readonly depName: string
    // private number: number
    protected employee: string[] = []
    static currentYear: number = 2024

    constructor(public readonly depName: string, private number: number) {
        // this.depName = depName
        // this.number = number
    }

    describe() {
        // this.depName = "Nový název"
        console.log("Oddělení " + this.depName + " má číslo " + this.number + ". Rok " + Department.currentYear)
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

    static createEmployee(name: string) {
        return name
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

const department1 = new Department("Marketing", 300)
department1.describe()

const employee1 = Department.createEmployee("Jan")
console.log(employee1, Department.currentYear)



// Vytvoření class ITDepartment a dědění vlastností z Department
class ITDepartment extends Department {
    public admins: string[]
    public mainAdmin: string

    constructor(number: number, admins: string[]) {
        super('IT', number) // IT nechat, přepsat number
        this.admins = admins
        this.mainAdmin = admins[0]
    }

    // Getter - musí mít return
    get leadAdmin() {
        if (this.mainAdmin) {
            return this.mainAdmin
        }
        throw new Error("Hlavní admin nenalezen")
    }

    // Setter - musíme do něj poslat hodnotu (nemůže vracet hodnotu)
    set leadAdmin(value: string) {
        if (this.mainAdmin) {
            this.mainAdmin = value
        } else {
            throw new Error("Hlavní admin nenalezen")
        }
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
console.log(frontEndDepartment.leadAdmin)
frontEndDepartment.leadAdmin = "Tomáš"
console.log(frontEndDepartment.mainAdmin)