"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//exemplo decorator
function myDecorator() {
    console.log("Starting decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executing decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Ending the method execution");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
//Multiplos decorators
function aCar() {
    return function (target, propertKey, descriptor) {
        console.log("This is car A starting");
    };
}
function bCar() {
    return function (target, propertKey, descriptor) {
        console.log("This is car B starting");
    };
}
function cCar() {
    return function (target, propertKey, descriptor) {
        console.log("This is car C starting");
    };
}
class myCars {
    turningOff() {
        console.log("Turning the cars off");
    }
}
__decorate([
    cCar(),
    bCar(),
    aCar()
], myCars.prototype, "turningOff", null);
const stopCar = new myCars();
stopCar.turningOff();
//Class decorator
function PotatoDec(constructor) {
    console.log(constructor);
    if (constructor.name === "Potato") {
        console.log("A potato has been fried");
    }
}
let Potato = class Potato {
    constructor(type) {
        this.type = type;
    }
};
Potato = __decorate([
    PotatoDec
], Potato);
const sweetPotato = new Potato("Sweet Potato");
console.log(sweetPotato);
console.log(sweetPotato.type);
//Method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Ferrari {
    constructor(car) {
        this.car = car;
    }
    showCar() {
        return `This Ferrari is an ${this.car}`;
    }
}
__decorate([
    enumerable(false)
], Ferrari.prototype, "showCar", null);
const roma = new Ferrari("Roma");
console.log(roma);
console.log(roma.showCar());
//Acessor decorator
class Jeep {
    constructor(car, year) {
        this.car = car;
        this.year = year;
    }
    get showCar() {
        return `The Jeep is an ${this.car}`;
    }
    get showYear() {
        return `It is from year: ${this.year}`;
    }
}
__decorate([
    enumerable(true)
], Jeep.prototype, "showCar", null);
__decorate([
    enumerable(true)
], Jeep.prototype, "showYear", null);
const compass = new Jeep("Compass", 2016);
console.log(compass.showCar);
console.log(compass.showYear);
console.log(compass);
//Property decorator
function formatNumber(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newVal) {
        value = newVal.padStart(5, "0");
    };
    Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
    });
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber
], ID.prototype, "id", void 0);
const joao = new ID("1");
console.log(joao);
//Real example - class decorator
function createDate(created) {
    created.prototype.createdAt = new Date();
}
let Audi = class Audi {
    constructor(car) {
        this.car = car;
    }
};
Audi = __decorate([
    createDate
], Audi);
let Ford = class Ford {
    constructor(car) {
        this.car = car;
    }
};
Ford = __decorate([
    createDate
], Ford);
const rs4 = new Audi("RS4");
const fusion = new Ford("Fusion");
console.log(rs4);
console.log(rs4.createdAt);
console.log(fusion);
//Real example - method decorator
function checkCafe() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("The coffee has already been selected");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Cafe {
    constructor() {
        this.cafeDone = false;
    }
    cafe(content, cafeDone) {
        this.cafeDone = true;
        console.log(`The coffee used is ${content}`);
    }
}
__decorate([
    checkCafe()
], Cafe.prototype, "cafe", null);
const newCafe = new Cafe();
const newCafe2 = new Cafe();
newCafe.cafe("Brazilian Arabic", newCafe.cafeDone);
newCafe.cafe("Brazilian Arabic", newCafe.cafeDone);
newCafe2.cafe("Brazilian Bourbon", newCafe2.cafeDone);
//Real example - property decorator
function maxSides(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            if (newValue > limit) {
                console.log(`The cube cant have more than ${limit} sides`);
                return;
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Cube {
    constructor(sides) {
        this.sides = sides;
    }
}
__decorate([
    maxSides(6)
], Cube.prototype, "sides", void 0);
const sixSides = new Cube(6);
console.log(sixSides);
