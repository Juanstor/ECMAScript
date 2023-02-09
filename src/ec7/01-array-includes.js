let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myArray.includes(8)); //True
console.log(myArray.includes(15)); //False


//Utilizando strings
const myLista = ['Manuel', 'Carlos', 'Mario Bross'];
console.log(myLista.includes('carlos')); // false (porque está en minuscula)
console.log(myLista.includes('Carlos')); // True



const saludo = "Hola mundo";
console.log(saludo.includes("Hola")) // true
console.log(saludo.includes("Mundo")) // false
console.log(saludo.includes(" ")) // true
console.log(saludo.includes("la mun", 1)) // true
console.log(saludo.includes(" mundo", -5)) // true