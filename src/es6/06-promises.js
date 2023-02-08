const unaFuncion = () => {
    return new Promise((seResolvio, hayQueRechazar) => {
        if (true) {
            seResolvio('Hey, si es verdadero')
        } else {
            hayQueRechazar('es falso, entonces pailas')
        }
    })
}

unaFuncion()
    .then(unaRespuestaPositiva => console.log(unaRespuestaPositiva))
    .catch(respuestaNegativa => console.log(respuestaNegativa));