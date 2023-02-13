const promesa1 = new Promise((resolve, reject) => reject('Rechazao #1'));
const promesa2 = new Promise((resolve, reject) => resolve('Resuelto #1'));
const promesa3 = new Promise((resolve, reject) => reject('Rechazao #2'));
const promesa4 = new Promise((resolve, reject) => resolve('Resuelto #2'));

Promise.any([promesa1, promesa2, promesa3, promesa4])
    .then(laRespuesta => console.log(laRespuesta));
    // Resuelto #1