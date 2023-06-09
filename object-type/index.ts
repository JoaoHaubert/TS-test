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


//Optinal properties in interfaces
interface Car {
    car: string
    year: number
    color: string
    chassis?: string
}

function carDetails(car: Car) {
    console.log(`The is is an ${car.car} the fabrication was in ${car.year} and it color is ${car.color}`)

    if(car.chassis) {
        console.log(`The chassis code is ${car.chassis}`)
    }
}

const car1: Car = {
    car: "Corvette",
    year: 2007,
    color: "black"
}

const car2: Car = {
    car: "Eclipse",
    year: 2005,
    color: "red",
    chassis: "A2141CXQ3123"
}

carDetails(car1)
carDetails(car2)

//readonly properties
interface Bike {
    brand: string
    readonly wheels: number
}

const specialized: Bike = {
    brand: "Specialized",
    wheels: 2
}

//specialized.wheels = 3  **Nao pode adicionar nada a wheels porque a readonly assume o valor passado e nao muda.

//Exercising
interface Bus {
    brand: string
    model: string
    year: number
    capacity: number
    wheels: number
    conductor?: string
}

function showBusses(bus: Bus) {
    console.log(`Bus info... brand: ${bus.brand}, model: ${bus.model}, year: ${bus.year}, capacity: ${bus.capacity}, wheels: ${bus.wheels}`)

    if(bus.conductor) {
        console.log(`${bus.conductor} is driving the bus`)
    }
}
const bus1: Bus = {
    brand: "Marcopolo",
    model: "RLI2",
    year: 2023,
    capacity: 68,
    wheels: 8,
}
const bus2: Bus = {
    brand: "Marcopolo",
    model: "wx4",
    year: 2021,
    capacity: 60,
    wheels: 8,
    conductor: "Jose Almeida"
}

showBusses(bus1)
showBusses(bus2)

//Index Signature
interface CoordObject {
    [index: string]: number
}

const coords: CoordObject = {
    a: 10
}

coords.b = 15

coords.c = 18

//coords.d = "a" **Erro - foi tipado como numero**

console.log(coords)

//Extending Types
interface Truck {
    truck: string
    color: string
    year: number
}

interface SuperTruck extends Truck {
    mod: string[]
}

const truck1: Truck = {
    truck: "Iveco",
    color: "Blue",
    year: 2023
}

const truck2: SuperTruck = {
    truck: "DAF",
    color: "Red",
    year: 2022,
    mod: ["Fly", "HP3800"]
}

console.log(truck1)
console.log(truck2)
console.log(truck2.mod[0])

//Intersection types
interface Laptop {
    brand: string
    processor: string
}

interface Peripherals {
    mouse: string
    keyboard: string
}

type LaptopPeriph = Laptop & Peripherals

const setup: LaptopPeriph = {
    brand: "asus",
    processor: "i5 11th",
    mouse: "G305",
    keyboard: "EG-204RB"
}

console.log(setup)
console.log(setup.mouse)

//ReadOnly Array
const numArray: ReadonlyArray<number> = [1, 2, 3, 4, 5]

//numArray[5] = 6 *Erro. com read only a array se mantem estatica.

console.log(numArray)

numArray.forEach((item) => {
    console.log("numero " + item)
})

numArray.map((item) => {
    console.log(`numero ${item}`)
})

console.log(numArray)

//Tuplas
type fourNumbers = [number, number, number, number]
type fiveNumbers = [number, number, number, number, number]

const myArray: fourNumbers = [1,2,3,4]
//const myArray2: fourNumbers= [1,2,3,4,5] **Erro, literalmente o type tem 4 numbers, nao pode aumentar o numero de elementos.**
const myArray3: fiveNumbers = [1,2,3,4,5]

console.log(myArray)
console.log(myArray3)

type Costumer = [string, number]

const user: Costumer = ["Joao", 25,]

console.log(user)

//Readonly tuplas
function showArray(numbers: readonly [number, number]) {
    //numbers[0] = 16 **Erro, metodo readonly assegura o numero que foi passado e nao pode ser alterado.**
    console.log(numbers[0])
    console.log(numbers[1])
}

showArray([1, 2])
//showArray([1]) **Erro, o readonly pede que complete os dois elementos tipados na array nesse caso.**