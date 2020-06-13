// Antes de ES6 
// Creaba una funcion y despues
// inicializaba los datos y con || 'Valor'
// asi ponia valores por defecto 

function newFunction (name, age, country) {
    // inicializaba la variable y ponia el valor 
    // por defecto
    var name = name || 'No me dio datos (Nombre), ';
    var age = age || '00 (Edad),';
    var country = country || 'MX';
    console.log(name, age, country)
}

// Despues de ES6
// Creo la funcion e inicializo los valores en la misma creacion

function newFunction2 (name = 'No me dio datos (Nombre),', age = '00 (Edad),', country = 'N/A (Pais)') {
    console.log(name, age, country);
}

// Al llamar la funcion y no pasar nada de valores
// esta usara los valores por default
newFunction2();
// esta usara los valores nuevos
newFunction2("Vanessa", 36, "CO");



// ****** Concatenacion *********
let hello = "Hello";
let world = "World!!";

// Antes de ES6
// Concatenacion anterior
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


// Despues de ES6
// Usamos los template literals
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);