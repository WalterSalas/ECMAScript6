// en ES8 contamos con una nueva forma de transformar objetos en matrices
// defino mi objeto
const data = {
    frontend: 'Walter',
    backend:'Vanessa',
    designer: 'Erick',
}

// posteriormente usando creamos una variable que guardara la matriz generada con 
// Object.entries(mi objeto)
const entries = Object.entries(data);

// imprimo mi matriz
console.log(entries);
// el resultado es esto:
// [
//     [ 'frontend', 'Walter' ],
//     [ 'backend', 'Vanessa' ],
//     [ 'designer', 'Erick' ]
// ]
    
// puedo contar los elementos de mi objeto
console.log(entries.length);


// defino mi objeto
const data2 = {
    frontend: 'Walter',
    backend:'Vanessa',
    designer: 'Erick',
}


const values = Object.values(data2);

// a diferencia de entries, values solo imprime los valores sin las asignaciones
// este seria el resultado
console.log(values);
// [ 'Walter', 'Vanessa', 'Erick' ]


// *********** Padding *********** //
//con padStart se añade valores al principio de un string
const string = 'hello';
console.log(string.padStart(8,'hi '));

//con padEnd se añade valores al principio de un string
conststring = 'hello';
console.log(string.padEnd(12,' -----------'));
console.log('food'.padEnd(12,' -----------'));

// trending coma
const obj = {
    Developer: Walter, //Puedo agregar coma al final de un valor de un objeto
};