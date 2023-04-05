//Annotation
let x: number = 23.6467
console.log(x.toPrecision(3))
console.log(typeof x)
console.log(x)
//Inference
let y = 24
console.log(typeof y)
console.log(y)
//Exercicio 2
const a:number = 4

const numberString = a.toString()

const printString: string = `Imprimindo o numero ${numberString}`

console.log(typeof printString)

console.log(printString)

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5, 6]
numbers.push(9)
 
console.log(numbers.length)
console.log(numbers)
console.log(numbers[3])
console.log(numbers[0])

//Arrays outra sintaxe(antiga)
const nums: Array<number> = [50, 75, 100]
nums.push(0)
console.log(nums)
console.log(nums[2])

//Any - aceita qualquer tipo dado
let n1: any[] = [1, 2, 3, "a", true, [], [{idade: 23}]]
console.log(n1)

//Parametros tipados
function batata(a: number , b: number) {
    return console.log(a + b)
}
batata(9,5)

//Tipagem retorno
function greeting(name: string): string {
    return `Seja bem vindo, ${name}`
}
console.log(greeting("Paulo"))

//Funcoes anonimas
setTimeout (function(){
    const salario: number = 4000

    //console.log((salario))

}, 1000)

//Tipagem Objetos
