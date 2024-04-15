// Never Type

function test(myValue: string) {
    return myValue;
}

// Nikdy nebude nic vracet (return nebo console.log)
function generateError(errorText: string, errorNumber: number):never {
    throw {message: errorText, errorCode: errorNumber};
}

let result = generateError("Závažná chyba", 555);