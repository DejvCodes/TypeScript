// Rest Parameters

// Rest operátor (...) umožňuje funkci přijmout 
// libovolný počet argumentů a uložit je jako pole.

const sum = (...myNumbers: number[]) => {
    return myNumbers.reduce((result, value) => {
        return result + value
    }, 0)
}

console.log(sum(5, 10, 15))
console.log(sum(4, 8, 12, 16, 20))