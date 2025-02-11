// Funkce jako typ

function sum(num1: number, num2: number): number {
    return num1 + num2
}
console.log(sum(5, 9))

function test(description: string) {
    console.log(description)
}

let myNumber: number = 5
let myString: string = "David"

// let myFunction: Function
let myFunction: (x: number, y:number) => number
myFunction = sum

console.log(myFunction(10, 40))