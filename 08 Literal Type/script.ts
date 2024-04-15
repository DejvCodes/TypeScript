// Literal Type
function combination(input1: string | number, input2: string | number, resultType: "as-number" | "as-text") {
    let result: string | number;
    if (typeof(input1) === "number" && typeof(input2) === "number" || resultType === "as-number") {
        result = +input1 + +input2;
        return result;
    } else {
        result = input1.toString() + input2.toLocaleString();
        return result;
    }

    // if (resultType === "as-number") {
    //     return result = +result;
    // } else {
    //     return result.toString;
    // }
}

console.log(combination(5, 6, "as-number"));
console.log(combination("David", "Kalmus", "as-text"));
console.log(combination("10", "8", "as-number"));
console.log(combination("10", 3, "as-number"));