//Importando arquivos
import importCar from "./car";
importCar()

//Importando variaveis
import { engine } from "./varengine";
console.log(engine)

//Multiplos imports
import { year, hp, showDodge } from "./multimports";
console.log(year)
console.log(hp)
showDodge()

//Alias para import
import { nome as n } from "./change";
console.log(n)

//Importando tudo
import * as math from "./math"
console.log(math)

//Importando tipos
import { User } from "./typeimport";
class Costumer implements User {
    name
    age 

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const rodolfo = new Costumer("Rodolfo", 36)

console.log(rodolfo)