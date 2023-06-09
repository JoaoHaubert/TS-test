"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
//Alias para import
const change_1 = require("./change");
console.log(change_1.nome);
//Importando tudo
const math = __importStar(require("./math"));
console.log(math);
class Costumer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const rodolfo = new Costumer("Rodolfo", 36);
console.log(rodolfo);
