// Creando variables
let a = 'Aloha';
let b = 'Mundo';

// construyendo frase normalmente
let normalPhrase = a + ' ' + b + '!';
console.log(normalPhrase);


// TEMPLATES LITERALS - construyendo frase más fácil, pero con comillas francesas (se puede usar Alt + 96)
let betterPhrase = `${a} mi ${b} bonito!`;
console.log(betterPhrase);


// Multi-line strings
let paragraph1 = 'Esta es la primera linea \n' + '→segunda linea puesh \n';
let paragraph2 = `Esta es la primera linea con comillas francesas
→y le acabo de dar un enter
realmente es facil, sirve mucho.`;

console.log(paragraph1);
console.log(paragraph2);

