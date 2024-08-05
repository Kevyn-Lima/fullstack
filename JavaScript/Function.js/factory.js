/** Factory Simples 
 * 
 * nada mais e do que uma função que cria um objeto
*/

function criarPessoa(){
    return {
        nome: 'Kevyn',
        idade: 25
    }
}
console.log(criarPessoa())

/**Aqui estamos criando uma função Factory passando parametros para que possam ser utilizando depois */

function criarProduto(nomeProduto, precoProduto){
    return{
        nomeProduto,
        precoProduto,
        desconto: 0.5
    }
}
console.log(criarProduto('Leite', 25))

/** Exemplo abaixo sobre calsse e factory */

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

const criarPessoa1 = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = criarPessoa1('Kevyn')
p2.falar()