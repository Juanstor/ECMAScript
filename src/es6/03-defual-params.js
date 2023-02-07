function newUser(name, age, country) {
    var name = name || 'default Name';
    var age = age || '30';
    var country = country || 'worldWide';
    console.log(name, age, country);
}

newUser();
newUser('Juan', 28, 'Colombia');


// Uso simple
function newAdmin(name = 'noName', age = '+18', country = 'here') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Rufus', 1.5, 'Canada');