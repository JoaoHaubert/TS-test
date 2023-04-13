//From types to interface
interface Shoes {
    shoes: string
    price: number
    size: number
    isAvaible: boolean
}

function shoesDetails(shoes: Shoes) {
    console.log(`The shoes are ${shoes.shoes} and the price is $${shoes.price} their size are ${shoes.size}`)
    if(shoes.isAvaible) {
        console.log("The product is avaible for purchase")
    } else {
        console.log("The product is not avaible")
    }
}

const shoes: Shoes = {
    shoes: "Airjordan 1",
    price: 9999.99,
    size: 9.5,
    isAvaible: true
}

shoesDetails(shoes)
shoesDetails({shoes: "Airjordan 2", price: 599.99, size: 10, isAvaible:false})