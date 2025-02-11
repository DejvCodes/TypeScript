// Abstract Class

// abstarct class - slouží jako vzor, ukazuje co musí mít nadefinovaný ostatní 
// classy co budou dědit
abstract class Department {
    name: string
    number: number

    constructor(na: string, nu: number) {
        this.name = na
        this.number = nu
    }

    abstract describe(): void // Díky "abstract" se musí v další classe definovat nový describe
}

// const marketing = new Department("Marketing", 100)
// marketing.describe()

class ITdepartment extends Department {

    constructor(depName: string, depNum: number) {
        super(depName, depNum)
    }

    // Musí se definovat kvůli tomu, že classa Department je abstraktní
    describe() {
        console.log("Text metody describe")
    }
}

const ITdepCzech = new ITdepartment("CzechIT", 900)
ITdepCzech.describe()