/** Uma outra forma de percorrer o Array, com propósito de filtro especifico. */

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.99, fragil: false},
]

const filterPreco = function(p){
    return p.preco >= 500
}
const fragil = function(p){
    return p.fragil
}

/** Nas constantes acima, foi algo bem simples, criamos uma função atribuida a cada constante, onde ela tem o parametro p, e retorna ele e a propriedade especifica de um objeto
 *  Na qual nós estamos determinando qual é.
 */

console.log(produtos.filter(filterPreco).filter(fragil))
/** Aqui estamos simplementa chamando o metódo, onde o parametro dele é a nosa constante que ja foi estipulada sua ação. */


/** Entendendo como o Filter funciona por dentro. */
Array.prototype.filter1 = function (callBack) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callBack(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
  }

  const produto = [
    {nome: 'Notebook', preco: 2499, frageis: true},
    {nome: 'iPad Pro', preco: 4199, frageis: true},
    {nome: 'Copo de vidro', preco: 12.49, frageis: true},
    {nome: 'Copo de plastico', preco: 18.99, frageis: false},
]

const filterPrecos = function(p){
    return p.preco >= 500
}
const frageis = function(p){
    return p.frageis
}

console.log(produto.filter1(filterPrecos).filter1(frageis))