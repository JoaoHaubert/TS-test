"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car"));
const varengine_1 = require("./varengine");
const multimports_1 = require("./multimports");
//Importando arquivos
(0, car_1.default)();
//Importando variaveis
console.log(varengine_1.engine);
//Multiplos imports
(0, multimports_1.showDodge)();
