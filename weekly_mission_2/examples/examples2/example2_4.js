// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `El Repository ${this.name} by ${this.author} about ${this.language} has ${this.stars} stars`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "carlogilmar", "javascript", 100)
  console.log(myRepo.getInfo())