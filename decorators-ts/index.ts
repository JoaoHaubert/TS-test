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

console.log(roma.showCar())