/** Função map() 
 * 
 *  Serve para fazer uma transformação no array
 *  Criar um novo array, com as transformções realizadas.
*/

const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e){
    return  e * 2
})

console.log(resultado)

/** o map, pode receber uma função também, dentro dela, 
 *  o que ela de fato precisa, é de uma ação para sempre retornar um novo Array,
 *  caso nenhum callback, seja passado, o indice sera retornado como undefined, precisa ser acionado.
 */

const soma10 = e => e + 10
const triplo = e => e * 3
const emReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(emReais)

let resultado1 = nums.map(soma10)

let resultado2 = nums.map(triplo)

let resultado3 = nums.map(emReais)

/*console.log(resultado)
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)*/

/** Entendendo como o map() funciona por dentro. */

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

console.log(carrinho)


const paraObj = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultadoCarrinho = carrinho.map(paraObj).map(apenasPreco)

console.log(resultadoCarrinho)