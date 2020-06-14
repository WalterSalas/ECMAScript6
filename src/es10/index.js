/*en ES10 se implemento .flat en los arrays que nos permite aplanar los array*/

//aqui tengo un array con varios elementos dentro y en su interior otros arrays
let array = [1,2,3, [1,2,3, [1,2,3]]]

// con array flat ponemos usar los arrgumentos de nivel de profundida 
// a la hora de aplanar los arrays
console.log(array.flat(2));