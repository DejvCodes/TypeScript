"use strict";
// Rest parameters
const sum = (...myNumber) => {
    return myNumber.reduce((result, value) => {
        return result + value;
    });
};
console.log(sum(5, 3, 5));
console.log(sum(5, 3, 5, 7));
