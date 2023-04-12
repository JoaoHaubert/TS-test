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
