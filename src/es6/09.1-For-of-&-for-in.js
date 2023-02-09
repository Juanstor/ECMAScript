// Ese bucle for unValor of cosaIterable recorre iterables, como arrays, Map o Set. El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.
const unArray = [5, 4, 3, 2, 1]
for (let unNumero of unArray) { //Se puede leer “por cada Número del array”
  console.log(unNumero) // 5 4 3 2 1
}



// Sin embargo, debes tener en cuenta que solo podrás acceder a sus valores, y no a sus referencias, por lo que, si quieres cambiar los elementos del array, necesitarás un índice array[indice].
const miArray = [5, 4, 3, 2, 1]
for (let unNumero of miArray) {
    unNumero *= 2; 
    console.log(unNumero) // 10 8 6 4 2
}
console.log(miArray) // [ 5, 4, 3, 2, 1 ]



// Si intentas recorrer un objeto de esta forma for elemento of objeto, te ocurrirá un error, porque un objeto no es un iterable. En su lugar puedes utilizar for elemento in objeto, que recorrerá las propiedades del objeto.
const miObjeto = { a: 7, b: 12, c: 4 }

for (let losElementos in miObjeto) {
    console.log(losElementos) // 'a' 'b' 'c'
}



// Sin embargo, si utilizas for elemento in array, no dará un error, pero el resultado no será el esperado, ya que los arrays son un tipo de objeto donde cada propiedad es el índice del valor del array o del iterable. Por lo que debes tener cuidado.
const UnArray = [2, 8, 12, 1, 33]
for (let LosElemento in array) {
    console.log(LosElemento) // '0' '1' '2' '3' '4'
}
/* 
const array = {
    '0': 2,
    '1': 8,
    '2': 15,
    '3': 1,
    '4': 33
}*/