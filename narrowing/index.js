"use strict";
//Type Guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Não será possível efetuar o cálculo");
    }
}
sum("23", "50");
sum(34, 50);
sum("32", 90);
//Checkin if value exists
function operations(arr, operation) {
    if (operation === "sum") {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
    }
    else if (operation === "multiply") {
        const multiply = arr.reduce((i, total) => i * total);
        console.log(multiply);
    }
    else {
        console.log("O sistema não superta este tipo de operação");
    }
}
operations([10, 20, 30], "sum");
operations([10, 5, 5], "multiply");
operations([1, 2, 3], "division");
