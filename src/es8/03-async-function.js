const fnConTiempo = () => {
    return new Promise((resolveichon, rejecteichon) => {
        (true)
            ? setTimeout(() => resolveichon('Ya pasaron 3 segundos'), 3000)
            : rejecteichon(new Error('Upale, hay un error!'));
    });
}

const fnConAsync = async() => {
    const consConFnAdentro = await fnConTiempo(); //Esto ejecuta los 3000, dice que espere que se ejecute la fnConTiempo  
    console.log(consConFnAdentro);
    console.log('Se acabó de imprimir consConFnAdentro que tiene adentro await fnConTiempo lo que hace esperar 3 segundos para imprimir "ya pasaron 3 segundos".');
}

console.log('Inicio del programa, antes de ejecutar fnConAsync');
fnConAsync();
console.log('Ya se anda ejecutando fnConAsync');

