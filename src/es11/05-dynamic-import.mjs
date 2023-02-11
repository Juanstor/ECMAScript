const button = document.getElementById('idBoton')

button.addEventListener("click", async function () {
    const constModulo = await import ('./05-module.mjs');
    console.log(constModulo);
    constModulo.fnHola();
});