// Abstract class

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

    constructor(depNum: number) {
        super("IT", depNum)
    }

    describe() {
        console.log("Text metody describe")
    }
}

const ITdepCzech = new ITdepartment(900)
ITdepCzech.describe()