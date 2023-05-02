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