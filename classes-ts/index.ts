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