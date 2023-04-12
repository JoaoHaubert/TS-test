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