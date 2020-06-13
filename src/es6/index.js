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


// ******** Strings Multilinea ********

// Antes de ES6
let lorem = "Mañana voy a desayunar unos \n"
+ "RiCoS HoTcAkEs!!!"

console.log(lorem);

// Despues de ES6
let lorem2 = `Mañana vas a desayunar hotcakes??
ahhh PRRO!!`;

console.log(lorem2);

// ******* Desestructuracion **********

let person = {
    'name': 'Walter',
    'age': 32,
    'country': 'MX'
}

//Antes de ES6
console.log(person.name, person.age, person.country);

// Despues de ES6
// Puedo desestructurar el objeto de esta forma
let { name, age, country } = person;
console.log(name, age, country);

// *********** Operador de propagacion *******
// en ES6 se implementa el nuevo operador "..."

let team1 = ['Walter', 'Vane', 'Erick'];
let team2 = ['Cuervo', 'Claudia', 'Betito'];
let families = ['Zamarron', ...team1, ...team2];

console.log(families);

// ****** Let *******
/*
let y const
Anteriormente se declaraban las variables con var
var tiene un contexto global
(se podia aceder a ella desde cualquier parte del codigo,
 sin importar en donde se halla declarado)

let a diferencia de var tiene un scope local, por lo cual si
se declara dentro de un bloque esta no se puede acceder de forma global

const declara una variable que no se podra modificar 
*/

{
    var globalVar = "Global Var"
}

{
    let globalLet = "Global Let"
    console.log(globalLet); // correcto porque esta dentro del mismo Scope
}

console.log(globalVar);
console.log(globalLet); // Error undefined



// const declara una variable que no se podra modificar 

const a = 'b';

console.log(a);

a = 'Cambia' // TypeError: Assignment to constant variable.

console.log(a);



