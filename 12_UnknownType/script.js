// Unknown type
var test;
var result;
test = 5;
test = "David";
// result = test    // Chyba - musíme to zkontrolovat
// Unknown musí vždy projít kontrolou
if (typeof (test) === "string") {
    result = test;
    console.log(result);
}
