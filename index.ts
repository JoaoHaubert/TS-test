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

//Tipagem Objetos **definindo os dados que irao conter em determinado objeto**
function shoesSpecs(shoes: {color: string, size: number}) {
    console.log("Shoes color are: " + shoes.color)
    console.log("Shoes size are: " + shoes.size)
}

const objShoes = {color: "green", size: 9.5}

shoesSpecs(objShoes)

shoesSpecs({color: "white", size: 9})

//Props. Opcionais **utilizando o ponto de interro. podemos deixar props opcionais**
function showNumbers (a: number, b: number, c?: number) {
    console.log("A = " + a)
    console.log("B = " + b)
     //Usandio esse "if" o C nao sai como undefined caso nao tenha valor pra ele.
    if (c != undefined){                
    console.log("C = " + c)
    }
}

showNumbers(3, 2, 1)
showNumbers(9, 8)

//Validacao parametro opcional **melhor modo para validar**
function greetinAgain(firstName: string, lastName?: string) {
    if (lastName != undefined){
        return `Eai ${firstName} ${lastName}, tudo belezinha?`
    }

    return `Eai ${firstName}, tudo belezinha?`
}


console.log(greetinAgain("Joao","Haubert"))
console.log(greetinAgain("Joao"))

//Union Type **usando dos tipos para uma prop diferente**
function showShoesSize(size: number | string) {
    console.log(`O tamanho do tênis é ${size}`)
}

showShoesSize(3)
showShoesSize("6")
//showShoesSize(true) **erro** 

//Avancando em union types
function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado"
    }

    return `A funcao do usuario e: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//