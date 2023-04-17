"use strict";
//Iniciando classe sem valores
class Bus {
}
const marcopolo = new Bus();
console.log(marcopolo);
marcopolo.brand = "Marcopolo";
console.log(marcopolo);
//Constructor
class Shoes {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}
const nike = new Shoes("Nike", 9.5);
console.log(nike);
console.log(nike.brand);
//Campos readonly
class SkateBoard {
    constructor(shape) {
        this.wheels = 4;
        this.shape = shape;
    }
}
const skate = new SkateBoard("Zero");
console.log(skate);
console.log(skate.shape);
console.log(skate.wheels);
skate.shape = "Flip";
//skate.wheels = 5 **Erro, o readonly ja deixa lockado o numero 4, nao tem como alterar**
//Heranca e super
class Car {
    constructor(name) {
        this.name = name;
    }
}
const clio = new Car("Clio");
console.log(clio);
console.log(clio.name);
class SportsCar extends Car {
    constructor(name, speedkm) {
        super(name);
        this.speedkm = speedkm;
    }
}
const mclaren = new SportsCar("McLaren", 430);
console.log(mclaren);
console.log(mclaren.name);
console.log(mclaren.speedkm);
//Metodos
class Goblin {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Time is money");
    }
}
const drakenios = new Goblin("Drakenios");
drakenios.greeting();
console.log(drakenios.name);
console.log(drakenios);
//This
class Dog {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }
    dogDetails() {
        console.log(`The dog breed is ${this.breed} and it name is ${this.name}`);
    }
}
const dog1 = new Dog("German Shepherd", "Russo");
const dog2 = new Dog("Chihuahua", "Minie");
dog1.dogDetails();
dog2.dogDetails();
//Getters
class Cat {
    constructor(breed, name) {
        this.breed = breed;
        this.name = name;
    }
    get fullCat() {
        return `The cat breed is ${this.breed} and its name is ${this.name}`;
    }
}
const cat1 = new Cat("Persian", "Candy");
const cat2 = new Cat("Maine Coon", "Russel");
console.log(cat1.fullCat);
console.log(cat2.fullCat);
//Setters
class Guitar {
    set guitarStyle(style) {
        if (style === "") {
            return;
        }
        this.style = style;
        console.log("Style inserted with success!");
    }
    set guitarYear(year) {
        if (year === 0) {
            return;
        }
        this.year = year;
        console.log("Year inserted with success!");
    }
    get getGuitar() {
        return `The guitar style is an ${this.style} and it was built in ${this.year}`;
    }
}
const myGuitar = new Guitar();
myGuitar.guitarStyle = "Les Paul";
myGuitar.guitarYear = 1978;
console.log(myGuitar.getGuitar);
class Restaurant {
    constructor(dish) {
        this.dish = dish;
    }
    foodName() {
        return `The next dish is ${this.dish}`;
    }
}
const firstDish = new Restaurant("Soup with toast");
console.log(firstDish.foodName());
class Restaurants {
    constructor(dish) {
        this.dish = dish;
    }
    foodName() {
        return `The next dish is ${this.dish}`;
    }
}
const secondDish = new Restaurants("Fish and potatoes");
console.log(secondDish.foodName());
//Override method
class Batata {
    someBatata() {
        console.log("A batata");
    }
}
class NovaBatata extends Batata {
    someBatata() {
        console.log("Outra batata");
    }
}
const myPotato = new NovaBatata();
myPotato.someBatata();
//Visibilidade - public
class Num {
    constructor() {
        this.x = 10;
    }
}
const showNum = new Num();
console.log(showNum.x);
//Visibilidade - protected
class Nume {
    constructor() {
        this.x = 90;
    }
    protectedMethod() {
        console.log('This method is protected');
    }
}
class Numer extends Nume {
    showNum() {
        console.log("X:" + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const numInstance = new Numer();
const numInstance2 = new Numer();
numInstance.showNum();
numInstance2.showProtectedMethod();
//Visibilidade - private
class PrivateJet {
    constructor() {
        this.name = "Private Jet";
    }
    showName() {
        return this.name;
    }
    privateJet() {
        console.log("Jato Privado");
    }
    showPrivateMethod() {
        this.privateJet();
    }
}
const privateObj = new PrivateJet();
//console.log(privateObj.name) **Erro, avisando que a propriedade esta privada.**
console.log(privateObj.showName());
privateObj.showPrivateMethod();
//Metodo private so pode ser acessado pela propria classe, se tentar usar um extends para outra classe, nao tera como acessar o metodo.**
//Static members
class StaticCar {
    static carMethod() {
        console.log("Metodo estatico, sempre vai aparecer o mesmo valor");
    }
}
StaticCar.prop = "Celta Estatico";
console.log(StaticCar.prop);
StaticCar.carMethod();
//Generic class
class Phone {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
    get showBrand() {
        return `The phone brand is ${this.brand}`;
    }
    get showType() {
        return `The type is ${this.type}`;
    }
}
const phone1 = new Phone("Samsung", "S3");
console.log(phone1);
console.log(phone1.showBrand);
console.log(phone1.showType);
console.log(typeof phone1.brand);
console.log(typeof phone1.type);
const phone2 = new Phone("Iphone", 11);
console.log(phone2);
console.log(phone2.showBrand);
console.log(phone2.showType);
console.log(typeof phone2.brand);
console.log(typeof phone2.type);
//Parameters properties
class newProduct {
    constructor(id, qty, price) {
        this.id = id;
        this.qty = qty;
        this.price = price;
        this.id = id;
        this.qty = qty;
        this.price = price;
    }
    get getQty() {
        return `The quantity is ${this.qty}`;
    }
    get getPrice() {
        return `The price is ${this.price}`;
    }
}
const newJersey = new newProduct("Lakers Jersey", 8, 89.99);
console.log(newJersey.id);
console.log(newJersey.getQty);
console.log(newJersey.getPrice);
//Class expression
const testClass = class {
    constructor(name) {
        this.name = name;
    }
};
const test1 = new testClass("Teobaldo");
console.log(test1);
console.log(test1.name);
