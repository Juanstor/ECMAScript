// Se declara y asigna un valor a la variable
var lastName = 'David';
// Se re asigna el valor 
lastName = 'Oscar';
console.log(lastName);



// Variable con let
let fruit ='Apple';
console.log(fruit);
fruit = 'Kiwi';
console.log(fruit);



// 'Variable' con const (no se puede!! porque es una constante)
const animal = 'Wolf';
animal = 'raticate';
console.log(animal);



// Muestra la funcionalidad de scope, donde "var" es global y "const, let" solo se puede usar en el bloque de codigo.
const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //Function scope
        let fruit2 = 'Kiwi';  //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
