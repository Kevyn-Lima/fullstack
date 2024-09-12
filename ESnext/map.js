const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})
console.log(tecnologias.get('React').framework)
/** Map parece muito o Objeto, porém a diferença é que o objeto passando chave valor, o valor só pode
 * ser uma string, ja o map, voce pode passar um objeto ou array, ou algo em que queira trabalhar
 */

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto Literal'],
    [123, 'Numeros']
])

chavesVariadas.forEach((valor, chave) =>{
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')

/** Por um lado, temos as chaves que não aceitam repetições, porém por outro temos os valors
 * que se podem repetir tranquilamente.
 */
console.log(chavesVariadas)