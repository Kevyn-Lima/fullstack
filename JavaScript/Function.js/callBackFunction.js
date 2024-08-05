/**
 * CallBack e um conceito simples, onde ele vai retornar algo de uma função quando um evento acontecer
 */

const fabricantes = ["Audi", "BMW", "Mercedes"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}
fabricantes.forEach(imprimir)

 /** O que aconteceu aqui, foi simples,
  * Declaramos um Array simples, 
  * crimaos uma função que tem como parametros nome e indice, cujo qual, vamos acessar do Array, o console.log 
  * foi feito para retornar o valor do indice + 1 pois o indice em array, sempre começa do 0
  * depois simplesmente, acessamos o array, e utilizando o forEach, percorremos cada posição do array, com a função imprimir, para que ele
  * traga as informações que desejamos.
  */

 ///////////////////////

 /** Um segundo exemplo de CallBack */

 const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

 /** Objetivo é extrair de dentro do Array notas menores do que 7, iremos fazer de uma forma sem o Filter, e depois com essa nova função. */

//Sem CallBack
let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com CallBack

const notasBaixas2 = notas.filter(function (nota) { return nota < 7 })

console.log(notasBaixas2)

//CallBack com Arrow Function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

 /** Exemplo 3 de Callback para se testar no Console do Browser */

 document.getElementsByTagName('body')[0].onclick = function (){
    console.log('O evento ocorreu!')
 }
