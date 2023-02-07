// Una funcion normal:
function square(num) {
    return num * num;
}



// Una funcion tipo arrow function:
const square = (num) => {
    return num * num;
}



// Una funcion arrow function pero simplificada:
const square = num => num * num;
//Notese que se pudo omitir los parentesis () para poner el parametro, y tambien los handelbars {} para el bloque de codigo, tambien se omite el return, ya que esta implicito.
//Esto nos ayuda a simplificar codigo para funciones no tan largas o complejas.