// Unknown type

let test: unknown
let result: string

test = 5
test = "David"

// result = test    // Chyba - musíme to zkontrolovat

// Unknown musí vždy projít kontrolou
if (typeof(test) === "string") {
    result = test
    console.log(result)
}