const animalsSound = { Dog: "woof", Cat: "Miau", Fish: "glubglub", Lion: "insert Movie Introduction: Metro Goldwyn Mayer.mp4"}


// KEYS
console.log(Object.keys(animalsSound)); // [ 'Dog', 'Cat', 'Fish', 'Lion' ]



// VALUES
console.log(Object.values(animalsSound));
/*   
[
'woof',
'Miau',
'glubglub',
'insert Movie Introduction: Metro Foldwyn Mayer.mp4'
]
*/



// ENTRIES = KEYS + VALUES
console.log(Object.entries(animalsSound)); 
/*
[
  [ 'Dog', 'woof' ],
  [ 'Cat', 'Miau' ],
  [ 'Fish', 'glubglub' ],
  [ 'Lion', 'insert Movie Introduction: Metro Foldwyn Mayer.mp4' ]
]
*/