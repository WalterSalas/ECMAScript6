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


// ********* Propiedad de objetos mejorada  ********* //
let name = 'Walter';
let age = '37';


// Antes de ES6 asi se creaba un objeto
obj = { 
    name: name, 
    age: age 
};


// Ahora es mucho mas intuitivo en despues de ES6
// ya que no es necesario hacer la creacion de las propiedades y asignar los valores

obj2 = {
    name,
    age
};

console.log(obj);
console.log(obj2);


// ********** ArrowFunctions *********** //
// las ArrowFunctions son funciones anonimas //
// creo un arreglo de 2 objetos con las propiedades de name y age
const names = [
    { name: 'Walter', age: 37 },
    { name: 'Vanessa', age: 36 }
]

// Antes de ES6 usabamos la propiedad map y le pasabamos una funcion con item y despues el codigo que necesitabamos realizar
// en este caso "console.log" e "item.name" para imprimir los nombres de los objetos dentro del arreglo

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

// Ahora en ES6 usamos la ArrowFunction para sustituir la funcion anonima, y hacer la  funcion mas entendible
let listOfNames2 = names.map(item => console.log(item.age));

// Otra manera en la que podemos toparnos con las arrowfunction es de la siguiente manera
let listOfNames3 = (name, age, country) => {
    // y el bloque de codigo que necesitamos
}

// Otra manera en la que podemos toparnos con las arrowfunction es de la siguiente manera
const listOfNames4 = name => {
    // y el bloque de codigo que necesitamos
}
 
const square = num => num * num;

// ********** Promises *********** //
// El objeto Promise (Promesa) es usado para computaciones asíncronas. 
// Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false){
            resolve('Hey Hola!! es Resolve!!');
        } else {
            reject('No jalo!');
        }
    });
}

helloPromise ()
    .then(response => console.log(response))
    .catch(response => console.log(response));
    


// ********** Clases ********** //

// para profundizar en POO recurre a https://platzi.com/clases/oop/
// y posteriormente a https://platzi.com/clases/javascript-profesional/

class calculator{
    // constructor -> es el metodo para inicializar la clase

    constructor() {
        // Creamos las variables con los valores default
        this.valueA = 0;
        this.valueB = 0;
    }
        
    sum(valueA, valueB) {
        // creamos un metodo y le pasamos los valores creados
        this.valueA = valueA;
        this.valueB = valueB;
        // por ultimo retornamos la suma de los valores
        return this.valueA + this.valueB;
    }
    
    rest(valueA, valueB) {
        // creamos un metodo y le pasamos los valores creados
        this.valueA = valueA;
        this.valueB = valueB;
        // por ultimo retornamos la resta de los valores
        return this.valueA - this.valueB;
    }
}

// creo una instancia de mi clase
const calc = new calculator();
// posteriormente con un console.log imprimimos la funcion.metodo(valor1, valor2)
console.log(calc.sum(2, 2));
// lo mismo para la resta
console.log(calc.rest(4, 1));

