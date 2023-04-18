//exemplo decorator
function myDecorator() {
    console.log("Starting decorator")

    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("Executing decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass {
    @myDecorator()   
    testing(){
        console.log("Ending the method execution")
    }
}

const myObj = new myClass()

myObj.testing()