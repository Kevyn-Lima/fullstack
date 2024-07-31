/* Utilizando os operadores Destructuring 
    versão ECMS6

    Ele realiza a extração de alguma coisa de uma estrutura, como por exemplo um objeto, é uma forma de você extrair uma informação de algo.
*/
 
// Exemplo 01

const pessoa = {
nome: 'Kevyn',
idade: 25,
    endereco:{
       logradouro: 'Rua João Paulo',
        numero: 287
    }
}
//representando o destructuring
const {nome, idade} = pessoa

console.log(nome, idade)

const {nome:n, idade:i} = pessoa; // aqui estou atribuindo aos atributos uma variavel, para que em teoria, seja mais facil de retirar

console.log(n,i)

// Essas são duas opção de se retirar algo de um objeto, de uma forma simples.

const {endereco:{ logradouro, numero, cep}} = pessoa /*Aqui, estamos acessando o logradouro que é basicamente um objeto dentro de outro 
estamos setando também ali o cep, para validar como ele retornaria, sendo previsivel como undefined, pois não esta dentro do Objeto.*/

console.log(logradouro, numero, cep)



// Exemplo 02

/* Vamos utilizar um array para este exemplo, sendo bem basico */

const a = [0,1,2,3,4];

const [n1,,n3,,n5,n6] = a

console.log(n1,n3,n5,n6)