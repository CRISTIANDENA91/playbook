// exportar clases con ESM con export default

export default class MyPokemon {
    constructor(name) {
        this.name = name
    }

    sayHello(message){
        console.log(`Hola soy ${this.name}, ${message}`)
    }
}