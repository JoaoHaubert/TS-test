"use strict";
//Iniciando classe sem valores
class Bus {
}
const marcopolo = new Bus();
console.log(marcopolo);
marcopolo.brand = "Marcopolo";
console.log(marcopolo);
//Constructor
class Shoes {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}
const nike = new Shoes("Nike", 9.5);
console.log(nike);
console.log(nike.brand);
