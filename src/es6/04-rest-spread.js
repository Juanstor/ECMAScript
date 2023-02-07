// Destructuracion con arrays
let fruits = ['Apple', 'Banana', 'Orange', 'Strawberrys'];
let [Uno, dos, C, D] = fruits;

console.log(Uno, fruits[1], C, D, fruits[2], fruits[4]);


// Destructuracion con objetos
let userData = { username: 'Juanse', age: 26, work: 'TP', logo: "stars"}
let { username, age, work, logo} = userData;
console.log(work, logo, username);

console.log(userData.age)





// Operador de dispersión o spread
let person = { name: 'Juan', age: 28, profession: 'Engineer'};
let ubication = 'Canada';

let data = {clasification: '#1', ...person, ubication};
console.log(data);


// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[2]);
    return num + values[3];
}

sum(1, 3, 4, 5, 6);