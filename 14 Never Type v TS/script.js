// Never Type
function test(myValue) {
    return myValue;
}
// Nikdy nebude nic vracet (return nebo console.log)
function generateError(errorText, errorNumber) {
    throw { message: errorText, errorCode: errorNumber };
}
var result = generateError("Závažná chyba", 555);
