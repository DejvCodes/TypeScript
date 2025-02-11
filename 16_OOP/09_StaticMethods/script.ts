// Static methods and static properties

class Department {
    protected depEmployees: string[] = []
    static currentYear: number = 2025

    constructor(public readonly depName: string, private depNumber: number) { }

    // Public method
    describe() {
        // this.depName = "Nový název"
        console.log(`Oddělení ${this.depName} má číslo ${this.depNumber}, rok: ${Department.currentYear}`)
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

    static createEmployee(name: string) {
        return name
    }
}

// const department1 = new Department("Marketing", 300)
// department1.describe()
const employee1 = Department.createEmployee("Martin")
console.log(employee1, Department.currentYear)
console.log("----------")

class ITDepartment extends Department {
    public mainAdmin: string

    constructor(number: number, public admins: string[]) {
        super("IT", number) // IT nechat, number přepsat
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

    // Setter - musí do něj poslat hodnotu (nemůže vracet hodnotu)
    set leadAdmin(value: string) {
        if (this.mainAdmin) {
            this.mainAdmin = value
        } else {
            throw new Error("Hlavní admin nenalezen")
        }
    }

    addEmployee(name: string) {
        if (name === "Jan" || name === "David") {
            console.log("Už mají přístup")
            return
        } else {
            this.depEmployees.push(name)
        }
    }
}

const ITdep = new ITDepartment(600, ["Jan", "David"])
console.log(ITdep.leadAdmin)
ITdep.leadAdmin = "Tomáš"
console.log(ITdep.mainAdmin)