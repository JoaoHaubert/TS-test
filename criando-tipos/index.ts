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