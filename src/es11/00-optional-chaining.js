const users = {
    jaime: {
        country: "MX"
    },
    ana: {
        country: "CO"
    }
}
console.log(users.jaime.country); // MX
console.log(users.ana.age); // undefined


console.log(users.mario.country); // Se rompe todo, entonce usamos:
console.log(users?.mario?.country); //undefined


