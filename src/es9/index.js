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

/* promise.finally */
// creo mi funcion con mi promesa
const helloworld = () =>{
    return new Promise((resolve, reject) => {
        // usare un If diferente "Ternario"
        // primero pongo la condicion aqui
        (true)
        // Pongo el verdadero con ?
        ? setTimeout (() => resolve('Hello World!! con 3 segundos de retraso'), 3000)
        // pongo el else con :
        : reject(new error ('test Error'))
    });
};

// posteriormente uso mi funcion con mi promesa
helloworld()
    // cuando es correcto uso el resultado y lo imprimo en consola
    .then(respose => console.log(respose))
    // puedo cachar los errores de esta forma
    .catch(error => console.log(error))
    // y lo nuevo que se imprementa en ES9 es el finally que solo se ejecuta 
    // cuando termina mi promesa
    .finally(() => console.log('Finalizo'))

