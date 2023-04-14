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
//console.log(showShoes(ohterShoes)) **Erro, pois nao estamos passando o unico argumento que ela pede "name".**
//
