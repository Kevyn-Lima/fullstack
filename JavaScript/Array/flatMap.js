/** flatMap é um método que não existe dentro a API do JavaScript, porém pode ser bem útil em algumas ocasiões. */

const escola = [{
    nome:'Turma M1',
    alunos: [{
        nome:'Gustavo',
        nota: 8.1
    }, {
        nome:'Ana',
        nota: 9.3
    }],
}, {
    nome: 'Turma M2',
    alunos:[{
        nome: 'Rebecca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

//console.log(escola[0].nome,escola[0].alunos, escola[1].nome, escola[1].alunos)

const getNotadoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotadoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

/** No caso, de cima, estamos tendo retorno de um array, com dois indices 0,1 onde retornam em cada um dos indices um outro array, com as notas.
 *  porém suponhamos que o desejado é ter apenas um array, com todas as notas, podemos então criar o metodo onde ele irá realizar concatenação de ambos
 * 
 */

Array.prototype.flatMap = function(callBack){
    return Array.prototype.concat.apply([], this.map(callBack)) 
}

/** Acima é bem simples o que está acontecendo, estamos criando o flatMap para que ele recebe concat e aplique a um array vazio o map do callback, a chamada 
 *  de volta da ação.
 *  O resultado disso é o exemplo abaixo.
 */

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)