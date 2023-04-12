//Type Guard
function sum(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else {
        console.log("Não será possível efetuar o cálculo")
    }
}

sum("23", "50")
sum(34, 50)
sum("32", 90)

//Check if value exists
function operations(arr: number[], operation?: string | undefined) {
    if(operation === "sum") {
        const sum = arr.reduce((i, total) => i + total)
        console.log(sum)
        
    } else if (operation === "multiply") {
        const multiply = arr.reduce((i, total) => i * total)
        console.log(multiply)
    } else {
        console.log("O sistema não suporta este tipo de operação")
    }
} 

operations([10,20,30], "sum")
operations([10,5,5], "multiply")
operations([1,2,3], "division")

//Instace of
class Iphone {
    iphone

    constructor(iphone: string) {
        this.iphone = iphone
    }
}

class SuperIphone extends Iphone {
    constructor(iphone: string) {
        super(iphone)
    }
}

const i12 = new Iphone("Iphone 12")
const i14 = new SuperIphone("Iphone 14")

console.log(i12)
console.log(i14)

function recieveIphone(user: object) {
    if(user instanceof SuperIphone) {
        console.log(`O ${user.iphone} é o celular mais eficiente do mercado!`)
    } else if (user instanceof Iphone) {
        console.log(`O ${user.iphone} continua sendo um bom custo beneficio.`)
    }
}

recieveIphone(i12)
recieveIphone(i14)

//In operator
class Car {
    name
    year

    constructor(name: string, year?: number) {
        this.name = name
        if (year) {
            this.year = year
        }
    }
}

const celta = new Car("Celta")
const corsa = new Car("Corsa", 2007)

function carDetails(car: Car) {
    if ('year' in car) {
        console.log(`O ${car.name} foi fabricado no ano de ${car.year}`)
    } else {
        console.log(`O carro não possuí o ano de fabricação.`)
    }
}

carDetails(celta)
carDetails(corsa)

//Desafio narrowing
type Review = number | boolean

function reviews(review: Review) {
    if(!review) {
        console.log("O produto nao foi avaliado")
    } else {
        console.log(`Obrigado pelo feedback a nota de avalicao foi ${review}`)
    }
}

reviews(false)
reviews(5)