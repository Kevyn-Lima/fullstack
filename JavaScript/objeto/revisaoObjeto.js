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


//////////////////////////////////////////////////////////////
/** Algumas funções importantes e interessantes dentro do Object */

const pessoa1 = {
    nome: 'Rebecca',
    idade: 23,
    peso: 35
}

/** Criado acima um objeto normalmente com notação literal; abaixo utilizaremos as funções keys e values para acessar chave e valores do objeto. */

console.log(Object.keys(pessoa1))
console.log(Object.values(pessoa1))

/** Sendo possivel também pegar uma lista(array) das chaves e valores, utilizando o entries, assim ele tras um array com chave/valor*/
console.log(Object.entries(pessoa1))

/** Sendo também possível percorrer esse array se desejado, um exemplo */

Object.entries(pessoa1).forEach(([chave, valor]) => { // Utilizando o destructuring ([chave, valor]), vamos acessar os dados e puxar eles do array
    console.log(`${chave}: ${valor}`)
})

/** Utilizaremos abaixo o Object.defineProperty(), ele define uma propriedade dentro do objeto, sendo que voce pode passar definições melhores
 *  como por exemplo, voce deseja que ela não seja visivel, ou não pode ser acessada, sendo melhor para setar atributos mais completos nessa propriedade
 */

Object.defineProperty(pessoa1, 'dataNascimento', {
    enumerable: true, // essa propriedade pode ser listada normalmente
    writable: false, // porem essa propriedade não poderá ser sobrescrita, ou escrita novamente.
    value: '01/02/1999'
})

pessoa1.dataNascimento = '02/04/2023'
console.log(pessoa1.dataNascimento)

console.log(Object.keys(pessoa1))

/** Utilizando o Assign voce pode concatenar com o objeto primario, ou seja, os objeto passados como paramentos após o primeiro, seja adicionado a ele */
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3}
const obj3 = Object.assign(dest, o1, o2)

console.log(obj3)

/**Object.preventExtensions
 *  uma função que não permite a extensão do Objeto, ou seja, não permite que seja adicionado novos atributos dentro do objeto. * 
 */

const product = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})
console.log('Extensível: ', Object.isExtensible(product))
product.nome = 'Borracha'
product.descricao = 'Borracha escolar branca'
delete product.tag
console.log(product)
/** É uma função de Objeto que permite realizar alterações, porém não deixa adicionar atributos nele. */

/** Object.seal 
 * um Objeto que se mantem selado, ou seja, apenas consigo alterar seus atributos, porém não posso excluir ou adicionar novos
*/

const person = {
    name: 'Julio',
    age: 35
}
Object.seal(person)
console.log('Sealed: ', Object.isSealed(person))

person.name = 'Lucas'
person.lastName = 'Silva'
delete person.name
console.log(person)

