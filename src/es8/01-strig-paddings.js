const myTexto = 'Four';


console.log(myTexto.padStart(3, 'x')); // Four
console.log(myTexto.padStart(4, 'x')); // Four
console.log(myTexto.padStart(5, 'x')); // xFour
console.log(myTexto.padStart(6, 'x')); // xxFour

console.log(myTexto.padEnd(6, 'x')); // Fourxx
console.log(myTexto.padEnd(5, 'x')); // Fourx
console.log(myTexto.padEnd(4, 'x')); // Four

