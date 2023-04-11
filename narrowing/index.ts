//Type Guard
function sum(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else {
        console.log("Não será possível efetuar o cálculo")
    }
}

sum("23", "50")
sum(34, 50)
sum("32", 90)