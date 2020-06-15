/*en ES10 se implemento .flat en los arrays que nos permite aplanar los array*/

//aqui tengo un array con varios elementos dentro y en su interior otros arrays
let array = [1,2,3, [1,2,3, [1,2,3]]]

// con array flat ponemos usar los arrgumentos de nivel de profundida 
// a la hora de aplanar los arrays
console.log(array.flat(2));


/* Flat Map */

let array2 = [1,2,3,4,5];

// recorro mi array 
console.log(array2.flatMap(value => [value*2]))


/*  
    con TrimStart y TrimEnd puedo quitar los espacios en string para poder
    para setear correctamente las cadenas de texto sin espacios iniciales 
    ni finales 
*/

let helloworld = '                      Hello   World             ';
console.log(helloworld);
console.log(helloworld.trimStart());
console.log(helloworld.trimEnd());

/*
    en ES10 se cambia la syntaxis del try catch
    esta es la forma anterior
*/
 try{

 } catch (error) {
     // antes era necesario poner (error) despues de catch
     error
 }

 // ahora solo es necesario hacer esto
try {

} catch {
    // ya se usa directamente el error
    error
}

// cambiar un arrelgo a objeto con fromEntries
let entries = [["name", "Walter"], ["age", "37"]];

console.log(Object.fromEntries(entries));
