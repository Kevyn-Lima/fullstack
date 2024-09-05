/** Aprofundando sobre Array */

let aprovados = new Array ('Ana', 'Bia', 'Carlos') // uma forma de criar um array, porém não muita recomendada, sendo ela a Literal.
console.log(aprovados)
aprovados = ['Ana', 'Bia', 'Carlos']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

aprovados[3] = 'Paulo' // uma Forma de adicionar um elemento, porém mais comum, utilizado para substituição do mesmo.
console.log(aprovados[3])

/** Sendo melhor utilizar o push para adicionar, pois ele lança ao final do mesmo.*/
aprovados.push('Lucas')
console.log(aprovados[4])

console.log(aprovados.length)

/** Algumas funções importantes dentro do Array */

aprovados.sort() // Ele Ordena a lista do array
console.log(aprovados)

delete aprovados[1] // ele apenas exclui o elemento que estava naquele indice, não reordenando o mesmo, o indice ainda exite, porém esta como undefined
console.log(aprovados)

aprovados = ['Ana', 'Bia', 'Carlos'] 
aprovados.splice(1, 2, 'Lucas', 'João') /** Essa função dentro do Array, trabalha apartir de dois pontos, ele pode excluir, adicionar ou ambos
    sendo que o primeiro elemento que for passado, é o indice que apartir dali ele vai realizar o que foi passado.
    se por ventura, não deseja que nenhum seja excluido, altera o numero de indices que deseja para 0 (2 / 0) então a partir do indice um, será atribuido Lucas e João.
*/
console.log(aprovados)