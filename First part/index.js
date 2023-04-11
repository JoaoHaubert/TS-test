"use strict";
//Annotation
let x = 23.6467;
console.log(x.toPrecision(3));
console.log(typeof x);
console.log(x);
//Inference
let y = 24;
console.log(typeof y);
console.log(y);
//Exercicio 2
const a = 4;
const numberString = a.toString();
const printString = `Imprimindo o numero ${numberString}`;
console.log(typeof printString);
console.log(printString);
//Arrays
let numbers = [1, 2, 3, 4, 5, 6];
numbers.push(9);
console.log(numbers.length);
console.log(numbers);
console.log(numbers[3]);
console.log(numbers[0]);
//Arrays outra sintaxe(antiga)
const nums = [50, 75, 100];
nums.push(0);
console.log(nums);
console.log(nums[2]);
//Any - aceita qualquer tipo dado
let n1 = [1, 2, 3, "a", true, [], [{ idade: 23 }]];
console.log(n1);
//Parametros tipados
function batata(a, b) {
    return console.log(a + b);
}
batata(9, 5);
//Tipagem retorno
function greeting(name) {
    return `Seja bem vindo, ${name}`;
}
console.log(greeting("Paulo"));
//Funcoes anonimas
setTimeout(function () {
    const salario = 4000;
    //console.log((salario))
}, 1000);
//Tipagem Objetos **definindo os dados que irao conter em determinado objeto**
function shoesSpecs(shoes) {
    console.log("Shoes color are: " + shoes.color);
    console.log("Shoes size are: " + shoes.size);
}
const objShoes = { color: "green", size: 9.5 };
shoesSpecs(objShoes);
shoesSpecs({ color: "white", size: 9 });
//Props. Opcionais **utilizando o ponto de interro. podemos deixar props opcionais**
function showNumbers(a, b, c) {
    console.log("A = " + a);
    console.log("B = " + b);
    //Usandio esse "if" o C nao sai como undefined caso nao tenha valor pra ele.
    if (c != undefined) {
        console.log("C = " + c);
    }
}
showNumbers(3, 2, 1);
showNumbers(9, 8);
//Validacao parametro opcional **melhor modo para validar**
function greetinAgain(firstName, lastName) {
    if (lastName != undefined) {
        return `Eai ${firstName} ${lastName}, tudo belezinha?`;
    }
    return `Eai ${firstName}, tudo belezinha?`;
}
console.log(greetinAgain("Joao", "Haubert"));
console.log(greetinAgain("Joao"));
//Union Type **usando dos tipos para uma prop diferente**
function showShoesSize(size) {
    console.log(`O tamanho do tênis é ${size}`);
}
showShoesSize(3);
showShoesSize("6");
//showShoesSize(true) **erro** 
//Avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado";
    }
    return `A funcao do usuario e: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showWage(wage) {
    console.log(`The average wage is: $${wage}`);
}
showWage(23330);
showWage("8938");
function showCars(obj) {
    console.log(`Car: ${obj.carName}`);
    console.log(`Color: ${obj.color}`);
    console.log(`Year: ${obj.year}`);
}
const carObj = {
    carName: "Jetta",
    color: "Silver",
    year: 2009
};
showCars(carObj);
const someCar = {
    name: "Celta", year: 1997
};
console.log(someCar);
//Erro de duplicacao de identificador "carType"
//type carType = {
//year: number
//}
//Literal types
function showColors(color) {
    console.log(`The color is ${color}`);
}
showColors("orange");
showColors("blue");
showColors("green");
//showColors("purple") **Erro o literal types aceitarar somente as strings definidas na propriedade.
//non null assertion operator
const p = document.getElementById("some-p");
console.log(p.innerText);
//usar ! para cancelar o erro e mostrar o que realmente esta no html.
//BigInt
let num;
//num = 1  **Erro, numero muito pequeno para operar com bigint.
num = 100n;
console.log(num);
console.log(typeof num);
console.log(num + 500n);
//Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("b");
//Symbol cria um tipo unico.
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
