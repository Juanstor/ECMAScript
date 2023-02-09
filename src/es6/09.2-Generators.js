function* funcionNombre(miArray) {
    for (let unValor of miArray) {
        yield unValor;
    }
}

const unaConstante =funcionNombre(['Oscar', 'Manuel', 'Carlos', 'Maria', 'Doña Gloria']);

console.log(unaConstante.next().value); // Oscar
console.log(unaConstante.next().value); // Manuel
console.log(unaConstante.next().value); // Carlos
console.log(unaConstante.next().value); // Maria
console.log(unaConstante.next().value); // Doña Gloria
console.log(unaConstante.next().value); // Undefined
console.log(unaConstante.next().value); // Undefined



// Otro ejemplo, fuentes: ChatGTP
function* generarNumeros() {
    let numero = 1;
    while (true) {
        yield numero++;
    }
}

let generador = generarNumeros();
console.log(generador.next().value);  // 1
console.log(generador.next().value);  // 2
console.log(generador.next().value);  // 3
