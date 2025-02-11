// Methods

class Department {
    depName: string
    depNumber: number

    constructor(na: string, nu: number) {
        this.depName = na
        this.depNumber = nu
    }

    // Methods
    describe() {
        console.log(`Oddělení ${this.depName} má číslo ${this.depNumber}`)
    }

    updateName(newDepName: string) {
        this.depName = newDepName
    }
}

const HRdep = new Department("Human resources", 100)
const MAdep = new Department("Marketing", 200)
const FIdep = new Department("Finance", 300)

HRdep.describe()
MAdep.describe()
FIdep.describe()

HRdep.updateName("~ Nový název ~")
HRdep.describe()