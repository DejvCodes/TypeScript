// Funkce jako typ - procvičování

// 1.úkol
function test1(num1: number, num2: number, num3: number) {
    return num1 + num2 + num3
}

let myFunction1: (x: number, y: number, z: number) => number;
myFunction1 = test1;

// 2.úkol
function test2(description: string){
    return description
}

let myFunction2: (x:string) => string;
myFunction2 = test2;

// 3.úkol
function test3(myString: string, myNumber: number){
    return myString
}

let myFunction3: (x: string, y: number) => string;
myFunction3 = test3;