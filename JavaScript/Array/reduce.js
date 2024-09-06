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