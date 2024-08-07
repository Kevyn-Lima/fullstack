/**IIFS 
 * Immediately Invoked Function Expression
 * Expessão de função imediatamente Invocada.
 */

/** Muito interessante para fugir do escopo Global e poder utilizar tudo dentro dele mesmo, como declarações de variaveis.
 * sendo assim tudo que estiver dentro, será lido e executado de maneira automatica.
*/


(function(){
    console.log('Sera executada na hora!')
    console.log('Foge do escopo mais abrangente!')
})() 

