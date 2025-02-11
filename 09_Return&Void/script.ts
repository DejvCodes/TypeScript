// Return a void
// Pokud není return (nevrací hodnotu) např. výsledek se vypisuje do konzole

function sum(n1: number, n2: number): number {
    return n1 + n2
}
console.log(sum(5, 10))

function sum2(n1: number, n2: number): string {
    return n1.toString() + n2.toString()
}
console.log(sum2(5, 10))

function writeResult(num: number): void {
    console.log(`Result: ${num}`)
}
writeResult(10)