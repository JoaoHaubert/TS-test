"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importando arquivos
const car_1 = __importDefault(require("./car"));
const varengine_1 = require("./varengine");
(0, car_1.default)();
console.log(varengine_1.engine);
