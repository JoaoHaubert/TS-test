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

//Henrancas de interfaces
interface Food {
    foodName(): string
}

class Restaurant implements Food {
    dish

    constructor(dish: string) {
        this.dish = dish
    }

    foodName(){
        return `The next dish is ${this.dish}`
    }
}

const firstDish = new Restaurant("Soup with toast")

console.log(firstDish.foodName())

class Restaurants implements Food {
    dish

    constructor(dish: string) {
        this.dish = dish
    }

    foodName(){
        return `The next dish is ${this.dish}`
    }
}

const secondDish = new Restaurants("Fish and potatoes")

console.log(secondDish.foodName())

//Override method
class Batata {
    someBatata() {
        console.log("A batata")
    }
}

class NovaBatata extends Batata {
    someBatata(): void {
        console.log("Outra batata")
    }
}

const myPotato = new NovaBatata()

myPotato.someBatata()

//Visibilidade - public
class Num {
   x = 10
}

const showNum = new Num()

console.log(showNum.x)

//Visibilidade - protected

class Nume {
    protected x = 90

    protected protectedMethod() {
        console.log('This method is protected')
    }
}

class Numer extends Nume {
    showNum() {
        console.log("X:" + this.x)
    }

    showProtectedMethod(): void {
        this.protectedMethod()
    }
}

const numInstance = new Numer()
const numInstance2 = new Numer()

numInstance.showNum()
numInstance2.showProtectedMethod()

//Visibilidade - private
class PrivateJet {
    private name = "Private Jet"

    showName() {
        return this.name
    }

    private privateJet() {
        console.log("Jato Privado")
    }

    showPrivateMethod() {
        this.privateJet()
    }
}

const privateObj = new PrivateJet()

//console.log(privateObj.name) **Erro, avisando que a propriedade esta privada.**
console.log(privateObj.showName())

privateObj.showPrivateMethod()
//Metodo private so pode ser acessado pela propria classe, se tentar usar um extends para outra classe, nao tera como acessar o metodo.**

//Static members
class StaticCar {
    static prop = "Celta Estatico"

    static carMethod() {
        console.log("Metodo estatico, sempre vai aparecer o mesmo valor")
    }
}

console.log(StaticCar.prop)

StaticCar.carMethod()

//Generic class
class Phone<T, U> {
    brand
    type

    constructor(brand: T, type: U) {
        this.brand = brand
        this.type = type
    }

    get showBrand() {
        return `The phone brand is ${this.brand}`
    }

    get showType() {
        return `The type is ${this.type}`
    }
}

const phone1 = new Phone("Samsung", "S3")

console.log(phone1)

console.log(phone1.showBrand)
console.log(phone1.showType)
console.log(typeof phone1.brand)
console.log(typeof phone1.type)

const phone2 = new Phone ("Iphone", 11)

console.log(phone2)

console.log(phone2.showBrand)
console.log(phone2.showType)
console.log(typeof phone2.brand)
console.log(typeof phone2.type)

//Parameters properties
class newProduct {
    constructor(
        public id: string, 
        private qty: number, 
        private price: number
        ) {
        this.id = id
        this.qty = qty
        this.price = price
    }

    get getQty() {
        return `The quantity is ${this.qty}`
    }

    get getPrice() {
        return `The price is ${this.price}`
    }
}

const newJersey = new newProduct("Lakers Jersey", 8, 89.99)

console.log(newJersey.id)
console.log(newJersey.getQty)
console.log(newJersey.getPrice)

//Class expression
const testClass = class<T> {
    name

    constructor(name: T) {
        this.name = name
    }
}

const test1 = new testClass("Teobaldo")

console.log(test1)
console.log(test1.name)

//Abstract class
abstract class GuttenTag {
    abstract showGreeting(): void
}

//const newGreet = new GuttenTag() **Cannot create an instance of an abstract class.ts(2511)**

class TagGutten extends GuttenTag {
    name: string;

    constructor(name: string) {
        super()
        this.name = name
    }

    showGreeting(): void {
        console.log(`Good afternoon in german is ${this.name}`)
    }
}

const greet = new TagGutten("GUTTEN TAG")

greet.showGreeting()