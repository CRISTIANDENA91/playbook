// Ejemplo 5: Objeto con método que recibe párametros
const myPet = {
    name: "Duke",
    sayHelloToMyPet: function(yourPet){
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con méetodo que recibe parámetros")
myPet.sayHelloToMyPet("Cristian")