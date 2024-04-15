// Singletons a private constructor

// Vytvoření class Department
abstract class Department {
    name: string
    number: number

    constructor(name: string, number: number) {
        this.name = name
        this.number = number
    }

    // Metoda
    abstract describe(): void
}

// const marketing = new Department("Marketing", 100)
// marketing.describe()

// Vytvoření ITdepartment a rozšíření o classu Department
class ITdepartment extends Department {
    // Přidáme 
    private static myObject: ITdepartment

    // Přidali jsme private
    private constructor(depName: string, depNum: number) {
        super(depName, depNum)
    }

    describe() {
        console.log("Text metody describe")
    }


    static getObject() {
        if (this.myObject) {
            return this.myObject
        }
        this.myObject = new ITdepartment("IT", 999)
        return this.myObject
    }
}

const IT = ITdepartment.getObject()
console.log(IT)
const IT2 = ITdepartment.getObject()
console.log(IT2)

// const ITdepCzech = new ITdepartment("CzechIT", 900)
// ITdepCzech.describe()