const regex = /\b(Apple)+\b/g;

const fruit = "Apple, Banana, Kiwi, Apple, Orange, Banana, etc. etc.";

for (const coincidencias of fruit.matchAll(regex)) {
    console.log(coincidencias);
}