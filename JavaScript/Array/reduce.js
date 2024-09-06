/**Validando como funciona o reduce() */ 

const alunos = [
    {nome:'Jõao', nota: 7.3, bolsista: false},
    {nome:'Maria', nota: 9.2, bolsista: true},
    {nome:'Pedro', nota: 9.8, bolsista: false},
    {nome:'Ana', nota: 8.7, bolsista: true},
]
/** Aqui funciona de uma forma um pouco complicada.
 *  Primeiro estamos extraindo do array alunos somente as notas deles, utilizando o map()
 *  então utilizando o reduce para realizar a soma de todas as notas deles.
 *  Ele utiliza de 4 parametros, sendo eles o primeiro "Acumulador", o segundo que é o valor, pode ser atual,
 *  o terceiro que é o indice e o quarto que como de costume o Array em si.
 *  como ele esta tendo um valor de acumulador, pode ser passado também um valor padrão para ele possa começar a partir do indice
 *  0, visto que dali esta começando do indice 1.
*/

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
},/** Aqui seria setado o valor do acumulador por exemplo 10*/ 0)
console.log(resultado)

/** Exemplo 02 sobre reduce, aqui vamos retirar todos os alunos bolsistas e validar se são ou não e se tem algum que é bolsista*/


const todosBolsistas = (resultado, bolsista) => resultado && bolsista /** Arrow function que valida se todos os bolsistas são true ou não */
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista /** Arrow function que valida se algum é true */
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

/** Vendo como o reduce funciona por dentro */

Array.prototype.reduce2 = function(callBack, valorInicial){ // declarando o reduce pelo seu prototipo, e passando os parametros dele, a callback e o valor inicial
    const indiceInicial = valorInicial ? 0 : 1 // validando se o indice inicial tem um valor igual a 0, se não será o 1
    let acumulador = valorInicial || this[0] // Aqui atribuimos a acumulador, o valor inicial se for setado, ou a posição 0 do indice
    for(let i = indiceInicial; i < this.length; i++){ //validação para percorrer o array
        acumulador = callBack(acumulador, this[i], i, this) // Acionando o callback
    }
    return acumulador // Retornando a variavel
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))