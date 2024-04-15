// Procvičování OOP - realitní kancelář, domy a popis
 
/*

Vytvořte class House, který bude mít vlastnosti street, 
number, floors, state (state = stav, který bude nový nebo starý). 
Vytvořte se všemi vlastnosti constructor.

Do classy přidejte metodu describe, která bude vypisovat např. 
takovýto text: "Jedná se o nový dům. Nachází se v ulici Modrá 26. Má 4 podlaží." 
Části street, number, floors a state budou doplněny pomocí this a budou u výpisu každého 
objektu (domu) jiné.
 
Podle classy vytvoříte tři objekty, u kterých zavoláte metodu describe a 
vypíšete tři texty do konzole.
 
*/

class House {
    street: string
    number: number
    floors: number
    state: string

    constructor(street: string, number: number, floors: number, state: string) {
        this.street = street
        this.number = number
        this.floors = floors
        this.state = state
    }

    // Metoda
    describe() {
        console.log(`Jedná se o ${this.state} dům. Nachází se v ulici ${this.street} ${this.number}. Má ${this.floors} podlaží.`)
    }
}

const house1 = new House("Dukelská", 123, 5, "nový")
house1.describe()

const house2 = new House("Karlova", 987, 2, "starý")
house2.describe()

const house3 = new House("Jiráskova", 365, 7, "starý")
house3.describe()