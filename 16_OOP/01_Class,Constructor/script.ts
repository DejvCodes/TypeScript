// OOP -  Object Oriented Programming

class Department {
    depName: string
    depNumber: number

    constructor(na: string, nu: number) {
        this.depName = na
        this.depNumber = nu
    }
}

const HRdep = new Department("Human resources", 100)
const MAdep = new Department("Marketing", 200)
const FIdep = new Department("Finance", 300)

console.log(HRdep)
console.log(MAdep)
console.log(FIdep)