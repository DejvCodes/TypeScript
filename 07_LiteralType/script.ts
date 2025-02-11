// Literal Type

function combination(input1: string | number, input2: string | number, resultType: "as-number" | "as-text") {
    let result: string | number
    if (!isNaN(+input1) && !isNaN(+input2) && resultType === "as-number") {
        result = (+input1) + (+input2)
    } else {
        result = input1.toString() + " " + input2.toString()
    }
    return result
}

console.log(combination(6, 6, "as-number"))
console.log(combination("David", "Kalmus", "as-text"))
console.log(combination("10", "8", "as-number"))
console.log(combination(10, 8, "as-text"))