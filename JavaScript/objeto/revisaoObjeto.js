/** Coleção dinâmica de pares chave/valor */

const produto = new Object
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'Cronos',
    valor: 73000,
    proprietario:{
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        },
        condutores:[{
            nome:'Kevyn',
            idade:19
        },{
            nome:'Henrique',
            idade: 26
        }]
    }
}

console.log(carro)

/** Criação de Objetos */

// Usando a Notação Literal

const obj1 = {
    objeto1: 'Objeto1'
}
console.log(obj1)

// Object em JS

const obj2 = new Object

console.log(obj2)

// Funções Construtoras

function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 2.99, 0.15)
const p2 = new Produto('Notebook', 3900.00, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30)*(30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 10000, 5)
const f2 = criarFuncionario('Maria', 12000, 3)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)

/** Objetos Constantes. */

const pessoa = {nome:'João'}

/** Eles estão apontando para um endereço de memoria, e não para as alterações feitas dentro do objeto
 *  sendo assim, se pode realizar alterações.
 * 
 * agora se deseja que não tenha nenhuma alteração de nenhuma forma, podemos utilizar o Object.freeze(pessoa)
 */
console.log(pessoa)
console.log(pessoa.nome)
Object.freeze(pessoa)

pessoa.nome = 'Lucas'
console.log(pessoa.nome)
/** como Podemos ver nas linhas acima, mesmo atribuindo outros valores ao atributo nome do objeto pessoa, ele não deixa
 * pois esta congelado, sendo não podendo excluir, alterar ou adicionar. Tendo realmente o objeto constante.
 *  
 * Se por algum acaso, deseja criar ja um objeto constante, pode utilizar da seguinte forma.
*/

const pessoaConstante = Object.freeze({noma: 'Lucas'})
console.log(pessoaConstante)



