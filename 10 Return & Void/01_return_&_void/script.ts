// Return & Void
function sum(n1: number, n2: number): number {
    return n1 + n2;
}

function sum2(n1: number, n2: number): string {
    return n1.toString() + n2.toString();
}

function writeResult(num: number) {
    console.log("Result: " + num);
    console.log(`Result: ${num}`);
}
writeResult(21);