//Void - function returning nothing
function noReturn(): void {
    console.log("Sem retorno nessa function")
    //return 1 **Typado como void, nao pode retornar number, string ou boolean.
}

noReturn()

//Callback like an argument
function car(carName: string) {
    return `the car is an ${carName}`
}

function preCar(f: (carName: string) => string, carsName: string) {
    console.log("Preparing the car")

    const showCar = f(carsName)

    console.log(showCar)
}

preCar(car, "Corvette")

//Generic functions
function firstArray<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstArray([8, 9, 10]))
console.log(firstArray(["h", "i", "j"]))
//console.log(firstArray("batata")) **O modo generico aceita somente lista**

function mergeObjects<U, T>(obj1: U, obj2?: T){
    return {
        ...obj1,
        ...obj2
    }
}

const newObj = mergeObjects({name: "Joao"}, {age: 25, job: "jr. developer"})
console.log(newObj)

//Constraint generic function
