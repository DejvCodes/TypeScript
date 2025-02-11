// Callback funkce - funkce jako parametr jiné funkce

type CallBack = (num: number) => void

const myFunction = (num: number) => console.log(num)
myFunction(10)
myFunction(60)

const sum = (num1: number, num2: number, callBackFun: CallBack) => {
    const result = num1 + num2
    callBackFun(result)
}

const logResult = (result: number) => console.log(`Suma je: ${result}`)

sum(50, 3, logResult)