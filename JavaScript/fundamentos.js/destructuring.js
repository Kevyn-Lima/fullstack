/* Utilizando os operadores Destructuring 
    versão ECMS6

    Ele realiza a extração de alguma coisa de uma estrutura, como por exemplo um objeto, é uma forma de você extrair uma informação de algo.
*/

 ///////////////////////////////////////////////////////////

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


///////////////////////////////////////////////////////////
// Exemplo 02

/* Vamos utilizar um array para este exemplo, sendo bem basico */

const a = [0,1,2,3,4];

const [n1,,n3,,n5,n6] = a

console.log(n1,n3,n5,n6)

///////////////////////////////////////////////////////////
//Exemplo 03

/* utilizando com função o destructuring */

function rand({min = 0, max = 1000}){ //nesta parte, o destructuring está sendo passado como parametro, estamos usando uma função para random numbers
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/* Aqui, eu posso puxar o resultado utilizando de duas formas, posso criar o destructuring por fora ou chamar ele dentro do console.log() */

const obj = {max: 50, min: 40}
console.log(rand(obj))

/* note que das duas formas funcionam normalmente. */
console.log(rand({max: 30, min: 20}))

/* Tambem se pode utilizar apenas com um parametro minimo na chamada da função, ou não passar nenhum valor, visto que os parametros de forma padão, ja foram introduzidas */
console.log(rand({min: 995}))
console.log(rand({})) 

///////////////////////////////////////////////////////////
/* Exemplo 04 utilizando Destructuring */

function random([min = 0, max = 1000]){ // aqui não existe o array criado, estamos apenas passando os atributos min e max como parametros onde vão ser criados depois
    if(min > max) [min, max] = [max, min] /*Aqui sim, estamos criando e alterando se for necessario.*/
    const valor = Math.random() *(max-min) + min
    return Math.floor(valor)
}

// Podemos passar um valor max e min e ele irá realizar a inversão, assim como só o min, só o max e sem nenhum dos dois.
console.log(random([150, 140]))
console.log(random([995]))
console.log(random([,10]))
console.log(random([]))

// se nota que todos eles, funcionam normalmente.

