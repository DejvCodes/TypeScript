// Never type
var test = function (myValue) {
    return myValue;
};
// Never nikdy nebude nic vracet (return nebo console.log)
var generateError = function (errorText, errorNumber) {
    throw { message: errorText, errorCode: errorNumber };
};
var result = generateError("Závažná chyba", 555);
console.log(result); // Nic se nevypíše
