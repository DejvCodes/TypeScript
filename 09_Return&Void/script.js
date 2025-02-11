// Return a void
// Pokud není return (nevrací hodnotu) např. výsledek se vypisuje do konzole
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(5, 10));
function sum2(n1, n2) {
    return n1.toString() + n2.toString();
}
console.log(sum2(5, 10));
function writeResult(num) {
    console.log("Result: ".concat(num));
}
writeResult(10);
