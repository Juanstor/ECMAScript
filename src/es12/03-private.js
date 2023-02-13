class Clase {
    #private(valor){
        console.log(valor)
    }
    
    public(valor){
        console.log(valor)
    }
}

const clase = new Clase()
clase.public("Hola")  // 'Hola'
clase.private("Hola") // TypeError: clase.private is not a function