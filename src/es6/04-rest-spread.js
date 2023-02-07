// Destructuracion con arrays
let fruits = ['Apple', 'Banana', 'Orange', 'Strawberrys'];
let [Uno, dos, C, D] = fruits;

console.log(Uno, fruits[1], C, D, fruits[2], fruits[4]);


// Destructuracion con objetos
let userData = { username: 'Juanse', age: 26, work: 'TP', logo: "stars"}
let { username, age, work, logo} = userData;
console.log(work, logo, username);