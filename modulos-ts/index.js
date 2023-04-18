"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importando arquivos
const car_1 = __importDefault(require("./car"));
(0, car_1.default)();
//Importando variaveis
const varengine_1 = require("./varengine");
console.log(varengine_1.engine);
//Multiplos imports
const multimports_1 = require("./multimports");
console.log(multimports_1.year);
console.log(multimports_1.hp);
(0, multimports_1.showDodge)();
