//Iniciando classe sem valores
class Bus {
    brand!: string
    age!: number
}

const marcopolo = new Bus()

console.log(marcopolo)

marcopolo.brand = "Marcopolo"

console.log(marcopolo)

//Constructor
class Shoes {
    brand
    size

    constructor(brand: string, size: number) {
        this.brand = brand
        this.size = size
    }
}

const nike = new Shoes("Nike", 9.5)

console.log(nike)
console.log(nike.brand)

//Campos readonly
class SkateBoard {
    shape
    readonly wheels = 4

    constructor(shape: string) {
        this.shape = shape
    }
}

const skate = new SkateBoard("Zero")

console.log(skate)
console.log(skate.shape)
console.log(skate.wheels)

skate.shape = "Flip"
//skate.wheels = 5 **Erro, o readonly ja deixa lockado o numero 4, nao tem como alterar**

//Heranca e super
class Car {
    name

    constructor(name: string) {
        this.name = name
    }
}

const clio = new Car("Clio")

console.log(clio)
console.log(clio.name)

class SportsCar extends Car {
    speedkm

    constructor(name: string, speedkm: number) {
        super(name)
        this.speedkm = speedkm
    }
}

const mclaren = new SportsCar("McLaren", 430)

console.log(mclaren)
console.log(mclaren.name)
console.log(mclaren.speedkm)

//Metodos
class Goblin {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Time is money")
    }
}

const drakenios = new Goblin("Drakenios")

drakenios.greeting()

console.log(drakenios.name)

console.log(drakenios)

//This
class Dog {
    breed
    name

    constructor(breed: string, name: string) {
        this.breed = breed
        this.name = name
    }

    dogDetails() {
        console.log(`The dog breed is ${this.breed} and it name is ${this.name}`)
    }
}

const dog1 = new Dog("German Shepherd", "Russo")
const dog2 = new Dog("Chihuahua","Minie")

dog1.dogDetails()
dog2.dogDetails()

//Getters
class Cat {
    breed
    name

    constructor(breed: string, name: string) {
        this.breed = breed
        this.name = name
    }

    get fullCat() {
        return `The cat breed is ${this.breed} and its name is ${this.name}`
    }
}

const cat1 = new Cat("Persian", "Candy")
const cat2 = new Cat("Maine Coon","Russel")

console.log(cat1.fullCat)
console.log(cat2.fullCat)

//Setters
class Guitar {
    style!: string
    year!: number

    set guitarStyle(style: string) {
        if(style === "") {
            return
        }

        this.style = style

        console.log("Style inserted with success!")
    }

    set guitarYear(year: number) {
        if(year === 0) {
            return
        }

        this.year = year

        console.log("Year inserted with success!")
    }

    get getGuitar() {
        return `The guitar style is an ${this.style} and it was built in ${this.year}`
    }

}

const myGuitar = new Guitar()

myGuitar.guitarStyle = "Les Paul"
myGuitar.guitarYear = 1978

console.log(myGuitar.getGuitar)