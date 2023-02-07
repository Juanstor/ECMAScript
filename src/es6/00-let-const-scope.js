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


const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}


