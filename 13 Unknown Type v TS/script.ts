// Unknown Type

let test: unknown;
let result: string;

test = 5;
test = "David";

// Unknown musí vždy projít kontolou
if (typeof test === "string") {
    result = test;
    console.log(result);
}
