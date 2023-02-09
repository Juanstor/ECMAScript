// Enhance object literals

function newUser(user, age, myCountry, myID, pet) {
    return {
        user,
        age,
        country: myCountry,
        id: myID,
        pet: pet
    }
}

console.log(newUser("Juanse", 28, 'Colombia', 123456, 'doggo'));

