/** Apenas comparação dentro do node */

console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

/** Fora de uma função aponta para a mesma referencia do module.exports 
 *  Porém, dentro de uma função, ele sempre vai apontar para o global.
*/

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === global)
    console.log(this === module)
    console.log(this === module.exports)
    console.log(this === exports)
}
logThis()