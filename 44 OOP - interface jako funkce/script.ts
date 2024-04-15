// Interfaces jako funkce

interface AddFunction {
    (a: number, b: number): number
}

let sum: AddFunction

sum = (number1: number, number2: number) => {
    return number1 + number2
}

const result = sum(5, 10)
console.log(result)