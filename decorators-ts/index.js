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
