"use strict";
//Revisando generics
function showData(arg) {
    return `O dado e: ${arg}`;
}
console.log(showData(1));
console.log(showData("que tal"));
console.log(showData([]));
console.log(showData(true));
//Constraint in generic
function showShoes(obj) {
    return `The shoes name are ${obj.name}`;
}
const shoes = { name: "Airjordan 1", color: "red" };
const ohterShoes = { color: "red", price: 29.99 };
console.log(showShoes(shoes));
const usedShoes = { name: "AirMax", color: "Red", size: 42, brand: "Nike" };
const usedLaptop = { name: "X515", color: "Silver", size: "15'3", brand: "Asus" };
console.log(usedShoes);
console.log(usedLaptop);
//Type parameters
function getItem(obj, items) {
    return `The item ${"items"} is in the object and it value is ${obj[items]}`;
}
const computer = {
    hd: "2TB",
    ram: "32GB",
    vga: "RTX 3060TI"
};
console.log(getItem(computer, "ram"));
console.log(getItem(computer, "hd"));
console.log(getItem(computer, "vga"));
function showBike(obj, brand) {
    return `${obj[brand]}`;
}
const bike1 = {
    brand: "Specialized",
    year: 2018,
    mountainBike: false
};
console.log(showBike(bike1, 'brand'));
console.log(showBike(bike1, 'year'));
//console.log(showBike(bike1, 'batata')) **Erro, a palavra batata não é uma propriedade dentro do objeto.
//typeof type operator
const car = "Celta";
const car1 = "Corsa";
const car3 = "Clio";
const newSports = {
    brand: "McLaren",
    maxSpeedKm: 420
};
function showMaxSpeed(maxSpeed) {
    console.log(`The SportsCar max speed is ${maxSpeed}km/h`);
}
showMaxSpeed(newSports.maxSpeedKm);
const test1 = 62;
const testing = "some text";
