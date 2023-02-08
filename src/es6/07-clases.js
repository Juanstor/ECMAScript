// Una clase es un plantilla para crear objetos con sus mismos atributos y métodos (atributos = variables, métodos = funciones)
// toda esa información estará dentro del objeto.

// se declara una clase
class nombreDeUsuario {

}

// iniciando una clase
const otroNombreDeUsuario = new creandoUnaFuncion(); 



// Vamos con un ejemplo. 
// Inicializamos una clase, ponemos un método/función dentro de la clase

class claseUsuarioX {
    // metodos, que es igual a funciones
    funcionVamoASaludar() {
        return 'Hola amigiño'
    }
};

// ahora vamos a llamar la clase guardandolo en una variable/constante
const elUsuario1 = new claseUsuarioX;
const elUsuario2 = new claseUsuarioX;
console.log(elUsuario1.funcionVamoASaludar());
console.log(elUsuario2.funcionVamoASaludar());



// Ahora vamos a usar un constructor y this.
class claseWarrior {
    constructor(name, range, weapon) { //aquí es donde se le agregan objetos para en el futuro darles valor a cada usuario.
        this.name = name;
        this.range = range;
        this.weapon = weapon;
    }

    // Agregamos un metodo
    funcionSaludar() {
        return 'Hola guerrero salvaje, '
    }

    funcionNombrarDatos() {
        return `veo que eres ${this.name}, tienes rango como ${this.range} y usas la ${this.weapon}.`
    }

    funcionDespedir() {
        return 'Que le vaya bien y ojalá no muera en el intento.'
    }
}

// Por último imprimiremos los valores que queramos en la consola para un buen uso
const warrior1 = new claseWarrior('Guillermo', 'Cabo', 'Ak47')
console.log(warrior1.funcionSaludar(), warrior1.funcionNombrarDatos());
console.log(warrior1.funcionDespedir());