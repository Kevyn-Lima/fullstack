const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// Função que retira o ultimo indice do Array

console.log(pilotos)

pilotos.push('Verstappen') // Adiciona ao array
console.log(pilotos)

pilotos.shift() // Remove o primeiro indice
console.log(pilotos)

pilotos.unshift('Hamilton') // Ele adiciona o valor no primeiro indice do array
console.log(pilotos)

/** utilizando o splice para adicionar */
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

/** Utilizando o splice para remover */
pilotos.splice(3, 1)
console.log(pilotos)

/** Função Slice que retorna um novo array, a partir do indice que foi setado */


const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Em Teoria, ele deveria puxar o indice 4, porém ele não entra, é apenas para informar em qual ele vai parar.
console.log(algunsPilotos2)