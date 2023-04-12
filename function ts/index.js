"use strict";
//Void - function returning nothing
function noReturn() {
    console.log("Sem retorno nessa function");
    //return 1 **Typado como void, nao pode retornar number, string ou boolean.
}
noReturn();
//Callback like an argument
function car(carName) {
    return `the car is an ${carName}`;
}
function preCar(f, carsName) {
    console.log("Preparing the car");
    const showCar = f(carsName);
    console.log(showCar);
}
preCar(car, "Corvette");
//Generic functions
function firstArray(arr) {
    return arr[0];
}
console.log(firstArray([8, 9, 10]));
console.log(firstArray(["h", "i", "j"]));
//console.log(firstArray("batata")) **O modo generico aceita somente lista**
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObj = mergeObjects({ name: "Joao" }, { age: 25, job: "jr. developer" });
console.log(newObj);
//Constraint generic function
function strNumbers(a, b) {
    let strNumbers;
    if (+a > +b) {
        strNumbers = a;
    }
    else {
        strNumbers = b;
    }
    return strNumbers;
}
console.log(strNumbers(8, 99));
console.log(strNumbers("80", "78"));
//console.log(strNumbers(false, true)) **Erro union type somente para numero e strings**
//console.log(strNumbers(10, "2")) **Erro estaria usando somente um tipo de generic**
//Type parameters generic function
function mergeArr(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArr([1, 2, 3], [6, 8, 123]));
console.log(mergeArr([1, 2, 3], ["a", "b", "c"]));
//Optinal parameters
function mergeArrays(arr1, arr2, arr3) {
    if (arr3) {
        return arr1.concat(arr2, arr3);
    }
    return arr1.concat(arr2);
}
console.log(mergeArrays([102, 238, 334], [6, 8, 123]));
console.log(mergeArrays([102, 238, 334], [6, 8, 123], [24, 56, 145]));
