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
