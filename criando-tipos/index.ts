//Revisando generics
function showData<T>(arg: T): string {
    return `O dado e: ${arg}`
}

console.log(showData(1))
console.log(showData("que tal"))
console.log(showData([]))
console.log(showData(true))

//Constraint in generic
function showShoes<T extends {name: string}>(obj: T) {
    return `The shoes name are ${obj.name}`
}

const shoes = {name: "Airjordan 1", color: "red"}
const ohterShoes = {color: "red", price: 29.99}

console.log(showShoes(shoes))
//console.log(showShoes(ohterShoes)) **Erro, pois nao estamos passando o unico argumento que ela pede "name".**

//Interfaces com Generics
interface GeneralObject<T, U, Q> {
    name: string
    color: T
    size: U
    brand: Q
}

type shoes = GeneralObject<string, number, string>
type laptop = GeneralObject<string, string, string>

const usedShoes: shoes = {name: "AirMax", color: "Red", size: 42, brand: "Nike"}
const usedLaptop: laptop = {name: "X515", color: "Silver", size:"15'3", brand: "Asus"}

console.log(usedShoes)
console.log(usedLaptop)

//Type parameters
function getItem<T, I extends keyof T>(obj: T, items: I) {
    return `The item ${"items"} is in the object and it value is ${obj[items]}`
}

const computer = {
    hd: "2TB",
    ram: "32GB",
    vga: "RTX 3060TI"
}

console.log(getItem(computer, "ram"))
console.log(getItem(computer, "hd"))
console.log(getItem(computer, "vga"))

//keyof type operator
type Bike = {brand: string, year: number, mountainBike: boolean}

type B = keyof Bike

function showBike(obj: Bike, brand: B): string {
    return `${obj[brand]}`
}

const bike1: Bike = {
    brand: "Specialized",
    year: 2018,
    mountainBike: false
}

console.log(showBike(bike1, 'brand'))
console.log(showBike(bike1, 'year'))
//console.log(showBike(bike1, 'batata')) **Erro, a palavra batata não é uma propriedade dentro do objeto.

//typeof type operator
const car: string = "Celta"

const car1: typeof car = "Corsa"

type x = typeof car

const car3: x = "Clio"

//Indexed Access types
type SportCar = {brand: string, maxSpeedKm: number}

type maxSpeed = SportCar['maxSpeedKm']

const newSports: SportCar = {
    brand: "McLaren",
    maxSpeedKm: 420 
}

function showMaxSpeed(maxSpeed: maxSpeed) {
    console.log(`The SportsCar max speed is ${maxSpeed}km/h`)
}

showMaxSpeed(newSports.maxSpeedKm)

//Conditional Expression Type
interface A {}

interface C extends A {}

type myType = C extends A ? number : string

const test1: myType = 62
//const test2: myType = "eai" **Erro, pois conforme a condição de que C extende á A, logo só poderá ser tipo number.

