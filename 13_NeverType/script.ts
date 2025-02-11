// Never type

const test = (myValue: string) => {
    return myValue
}

// Never nikdy nebude nic vracet (return nebo console.log)
const generateError = (errorText: string, errorNumber: number): never => {
    throw { message: errorText, errorCode: errorNumber }
}

let result = generateError("Závažná chyba", 555)
console.log(result) // Nic se nevypíše