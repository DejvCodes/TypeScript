// Datový typ objekt v TS

// TypeScript si automaticky odvodí typy vlastností z hodnot, které jsou přiřazeny, 
// takže rozhraní (Person) není nutně potřeba, pokud neplánujete tento objekt opakovaně používat.

// Nicméně, pokud máte ve své aplikaci více objektů se stejnou strukturou nebo chcete typovou 
// bezpečnost, použití rozhraní je skvélé pro organizaci kódu.

interface Person {
    name: string
    age: number
}

const person: Person = {
    name: "David",
    age: 22,
}

console.log(person.name)
console.log(person.age)