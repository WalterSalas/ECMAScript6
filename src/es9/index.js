//  en ES9 con un objeto 
const obj = {
    name: 'Walter',
    age: '37',
    country: 'Mx',
};

// podemos usar el operador de reposo "..all"
let { name, ...all } = obj;
console.log(name);

/* Propiedades de propagacion */

// con un objeto creado 
const obj = {
    name: 'Walter',
    age: '37',
};

// uso las propiedades de propagacion dentro de un segundo objeto
// para incluir todo el primer objeto en el segundo
const obj1 = {
    // justo aqui estoy trayendo el obj
    ...obj,
    country: 'MX',
};

console.log(obj1);

