async function* fnGeneradoraAsync() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const otraCosa = fnGeneradoraAsync();
otraCosa.next().then(response => console.log(response.value));
otraCosa.next().then(response => console.log(response.value));
otraCosa.next().then(response => console.log(response.value));
console.log('Saludito!');





// Con for AWAIT let x of x
async function arrayDeNombres(unArray) {
    for await (let valores of unArray) {
        console.log(valores);
    };
}

const names = arrayDeNombres(['Primerin', 'Oscar', 'Jaimito',]);
console.log('Ya ultima liena de codigo');