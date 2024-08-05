/** Conceito Closure para funções entendendo suas funcionalidades
 * 
 * Closure é o escopo criado quando uma função é declarada, ou seja, no escopo em que sua função foi declarada, voce pode acessar 
 * os atributos e variaveis
 * esse escopo permite a função acessar e manipular variaveis externas a função
 
    Contexto Lexico em ação.
*/

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}
const minhaFuncao = fora()
console.log(minhaFuncao())