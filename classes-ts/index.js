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
//Campos readonly
class SkateBoard {
    constructor(shape) {
        this.wheels = 4;
        this.shape = shape;
    }
}
const skate = new SkateBoard("Zero");
console.log(skate);
console.log(skate.shape);
console.log(skate.wheels);
skate.shape = "Flip";
//skate.wheels = 5 **Erro, o readonly ja deixa lockado o numero 4, nao tem como alterar**
//Heranca e super
class Car {
    constructor(name) {
        this.name = name;
    }
}
const clio = new Car("Clio");
console.log(clio);
console.log(clio.name);
class SportsCar extends Car {
    constructor(name, speedkm) {
        super(name);
        this.speedkm = speedkm;
    }
}
const mclaren = new SportsCar("McLaren", 430);
console.log(mclaren);
console.log(mclaren.name);
console.log(mclaren.speedkm);
