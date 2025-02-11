// Interface as Function

interface AddFunction {
    (a: number, b: number): number
}

// let sum: AddFunction

const sum: AddFunction = (num1: number, num2: number) => {
    return num1 + num2
}
console.log(sum(1,2))