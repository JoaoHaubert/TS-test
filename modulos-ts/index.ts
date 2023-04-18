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

//