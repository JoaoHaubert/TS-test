//exemplo decorator
function myDecorator() {
    console.log("Starting decorator")

    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executing decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()   
    testing(){
        console.log("Ending the method execution")
    }
}

const myObj = new myClass()

myObj.testing()

//Multiplos decorators
function aCar() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("This is car A starting")
    }
}

function bCar() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("This is car B starting")
    }
}

function cCar() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("This is car C starting")
    }
}

class myCars {
    name!: string

    @cCar()
    @bCar()
    @aCar()
    turningOff() {
        console.log("Turning the cars off")
    }
}

const stopCar = new myCars()

stopCar.turningOff()

//Class decorator
function PotatoDec(constructor: Function) {
    console.log(constructor)
    if (constructor.name === "Potato"){
        console.log("A potato has been fried")
    }
}

@PotatoDec
class Potato {
    type

    constructor(type: string) {
        this.type = type;
    }
}

const sweetPotato = new Potato("Sweet Potato")

console.log(sweetPotato)
console.log(sweetPotato.type)

//Method decorator
function enumerable(value: boolean) {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value
    }
}
class Ferrari {
    car

    constructor(car: string){
        this.car = car
    }
    @enumerable(false)
    showCar() {
        return `This Ferrari is an ${this.car}`
    }
}

const roma = new Ferrari("Roma")
console.log(roma)
console.log(roma.showCar())

//Acessor decorator
class Jeep {
    car?
    year?

    constructor(car: string, year: number) {
        this.car = car;
        this.year = year
    }
    @enumerable(true)
    get showCar() {
        return `The Jeep is an ${this.car}`
    }
    @enumerable(true)
    get showYear() {
        return `It is from year: ${this.year}`
    }
}

const compass = new Jeep("Compass", 2016)

console.log(compass.showCar)
console.log(compass.showYear)

console.log(compass)

//Property decorator
function formatNumber(target: Object, propertyKey: string) {

    let value: string

    const getter = function() {
        return value
    }

    const setter = function(newVal: string) {
        value = newVal.padStart(5, "0")
    }

    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    });
}
class ID {
    @formatNumber
    id

    constructor(id: string) {
        this.id = id
    }
}

const joao = new ID("1")

console.log(joao)

//Real example - class decorator
function createDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createDate
class Audi {
    car
    createdAt?: Date 

    constructor(car: string) {
        this.car = car
    }
}

@createDate
class Ford {
    car

    constructor(car: string) {
        this.car = car
    }
}

const rs4 = new Audi("RS4")
const fusion = new Ford("Fusion")

console.log(rs4)
console.log(rs4.createdAt)
console.log(fusion)

//Real example - method decorator
function checkCafe() {
    return function(
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value
        console.log(childFunction)
        descriptor.value = function (...args: any[]) {
            if(args[1] === true) {
                console.log("The coffee has already been selected")
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}
class Cafe {
    cafeDone = false
    @checkCafe()
    cafe(content: string, cafeDone: boolean) {
        this.cafeDone = true
        console.log(`The coffee used is ${content}`)
    }
}

const newCafe = new Cafe()
const newCafe2 = new Cafe()

newCafe.cafe("Brazilian Arabic", newCafe.cafeDone)

newCafe.cafe("Brazilian Arabic", newCafe.cafeDone)

newCafe2.cafe("Brazilian Bourbon", newCafe2.cafeDone)

//Real example - property decorator
function maxSides(limit: number) {

    return function(target: Object, propertyKey: string) {
        let value: number

        const getter = function() {
            return value
        }

        const setter = function(newValue: number) {
            if(newValue > limit) {
                console.log(`The cube cant have more than ${limit} sides`)
                return
            } else {
                value = newValue
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        }) 
    }
}

class Cube {
    @maxSides(6)
    sides

    constructor(sides: number) {
        this.sides = sides
    }
}

const sixSides = new Cube(6)

console.log(sixSides)