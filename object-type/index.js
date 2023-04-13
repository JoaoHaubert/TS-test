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
//specialized.wheels = 3  **Nao pode adicionar nada a wheels porque a readonly assume o valor passado e nao muda.
//Index signature
