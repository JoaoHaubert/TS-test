"use strict";
function shoesDetails(shoes) {
    console.log(`The shoes are ${shoes.shoes} and the price is $${shoes.price} their size are ${shoes.size}`);
    if (shoes.isAvaible) {
        console.log("The product is avaible for purchase");
    }
    else {
        console.log("The product is not avaible");
    }
}
const shoes = {
    shoes: "Airjordan 1",
    price: 9999.99,
    size: 9.5,
    isAvaible: true
};
shoesDetails(shoes);
shoesDetails({ shoes: "Airjordan 2", price: 599.99, size: 10, isAvaible: false });
function carDetails(car) {
    console.log(`The is is an ${car.car} the fabrication was in ${car.year} and it color is ${car.color}`);
    if (car.chassis) {
        console.log(`The chassis code is ${car.chassis}`);
    }
}
const car1 = {
    car: "Corvette",
    year: 2007,
    color: "black"
};
const car2 = {
    car: "Eclipse",
    year: 2005,
    color: "red",
    chassis: "A2141CXQ3123"
};
carDetails(car1);
carDetails(car2);
const specialized = {
    brand: "Specialized",
    wheels: 2
};
function showBusses(bus) {
    console.log(`Bus info... brand: ${bus.brand}, model: ${bus.model}, year: ${bus.year}, capacity: ${bus.capacity}, wheels: ${bus.wheels}`);
    if (bus.conductor) {
        console.log(`${bus.conductor} is driving the bus`);
    }
}
const bus1 = {
    brand: "Marcopolo",
    model: "RLI2",
    year: 2023,
    capacity: 68,
    wheels: 8,
};
const bus2 = {
    brand: "Marcopolo",
    model: "wx4",
    year: 2021,
    capacity: 60,
    wheels: 8,
    conductor: "Jose Almeida"
};
showBusses(bus1);
showBusses(bus2);
const coords = {
    a: 10
};
coords.b = 15;
coords.c = 18;
//coords.d = "a" **Erro - foi tipado como numero**
console.log(coords);
const truck1 = {
    truck: "Iveco",
    color: "Blue",
    year: 2023
};
const truck2 = {
    truck: "DAF",
    color: "Red",
    year: 2022,
    mod: ["Fly", "HP3800"]
};
console.log(truck1);
console.log(truck2);
console.log(truck2.mod[0]);
const setup = {
    brand: "asus",
    processor: "i5 11th",
    mouse: "G305",
    keyboard: "EG-204RB"
};
console.log(setup);
console.log(setup.mouse);
//ReadOnly Array
const numArray = [1, 2, 3, 4, 5];
//numArray[5] = 6 *Erro. com read only a array se mantem estatica.
console.log(numArray);
numArray.forEach((item) => {
    console.log("numero " + item);
});
numArray.map((item) => {
    console.log(`numero ${item}`);
});
console.log(numArray);
const myArray = [1, 2, 3, 4];
//const myArray2: fourNumbers= [1,2,3,4,5] **Erro, literalmente o type tem 4 numbers, nao pode aumentar o numero de elementos.**
const myArray3 = [1, 2, 3, 4, 5];
console.log(myArray);
console.log(myArray3);
const user = ["Joao", 25,];
console.log(user);
//Readonly tuplas
function showArray(numbers) {
    //numbers[0] = 16 **Erro, metodo readonly assegura o numero que foi passado e nao pode ser alterado.**
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showArray([1, 2]);
//showArray([1]) **Erro, o readonly pede que complete os dois elementos tipados na array nesse caso.**
