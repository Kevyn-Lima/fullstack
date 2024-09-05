/** Exemplo 1 Sobre ForEach */

const aprovados = ['Ana', 'Bia', 'Carlos', 'Lucas', 'Pedro', 'Agatha']

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

/** No exemplo acima, estamos percorrendo o array, trazedo como paramentros os indices e os nomes */

aprovados.forEach(nome => console.log(nome))
/** No exemplo acima, estamos apenas percorrendo o Array, interessados somente nos nomes*/

const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)
/** No exemplo acima, estamos atribuindo os nomes a uma constante, onde ela é uma arrow function, que esta sendo passada como parametro dentro do forEach */

///////////////////////////////////////////////////////
/** Um Segundo exemplo de forEach*/

Array.prototype.forEach2 = function(callBack){
    for(let i = 0; i < this.length; i++){
        callBack(this[i], i, this)
    }
}
 /** No exemplo criamos um forEach2 para termos de base, como ele funciona por dentro, lembrando que os parametros de um forEach, sempre é
  *  primeiro o nome, indice e por ultimo o proprio array.
  */

const aprovado = ['Ana', 'Bia', 'Carlos', 'Lucas', 'Pedro', 'Agatha']

aprovado.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
