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
