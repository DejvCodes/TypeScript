// Callback funkce - funkce jako parametr jiné funkce

const y = (nejakeCislo: number) => console.log(nejakeCislo);
y(10);
y(60);

function sum(n1: number, n2: number, callBackFun: (n3: number) => void) {
    const result = n1 + n2;
    callBackFun(result);
}

sum(50, 3, (x) => console.log(x));