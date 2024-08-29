/** Objetivo da Herança é criar objetivo para poder reutilizar o código
 * 
 *  sendo sempre que possível priorizar composição do que herança.
 */
const ferrari = {
    modelo: 'F8 Spider',
    velocidadeMax: 350
}


console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)

/** Nesses exemplos, podemos ver que Objetos em si, são herança de um prototipo de objeto, e que ele sempre aponta para algum lugar, aqui no caso
 * para um objeto vazio.
 */

/** Segundo exemplo, cadeia de prototipo. */

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}
/** No exemplo, podemos ver que conseguimos imprimir no console, pois os objetos estão sendo referenciados pela Herança entre eles.
 *  no caso, se você tentar puxar algum tipo de atributo que não esteja ou que não exista no atributo avo, ele tentara puxar do Object.prototype.
 *  E se não tiver, ele não encontra-rá e retorna-rá undefined.
 */
console.log(filho.attr1)
console.log(filho.attr2)

/** Exemplo 02*/

const carro = {
    velAtual:  0,
    velMax: 220,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta 
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) /** Uma função muito importante, pois ela estabelece uma relação entre dois objetos,
sendo assim, o primeiro parametro, o objeto e o segundo o prototipo */
Object.setPrototypeOf(volvo, carro)
volvo.acelerar(100)
console.log(volvo.status())

/** Exemplo 03 */

const pai1 = {nome:'Pedro', corCabelo:'preto'} // Objeto para ser referenciado como prototipo

const filha1 = Object.create(pai1) /** Criado a partir do prototipo, utilizamos o Object.create() */
filha1.nome = 'Ana' // Atribuido o nome da filha em herança
console.log(filha1.nome)

const filha2 = Object.create(pai1, {
    nome: {value: 'Bia', writable: false, enumerable: true} // Ja criada e passado os parametros e listando como ele deve ser.
})

console.log(filha2.nome)
filha2.nome = 'Julia'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // exemplo de como a herança influencia sobre o objeto.

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(`Própria propriedade: ${key}`): console.log(`Por Herança: ${key}`)
}

/** E no exemplo acima, nós estamos percorrendo o Objeto para listar e ver o que de fato pertence a ele ou é herdado. */

/** Exemplo 04 de Herança */
/** Instanciando e criando Objetos para saber se apontam para o mesmo prototipo */

function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj4 = new MeuObjeto
const obj5 = new MeuObjeto

console.log(obj4.__proto__ === obj5.__proto__)
console.log(obj4.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia ! meu nome é ${this.nome}`)
}

obj4.falar()
obj5.nome = 'Antonio'
obj5.falar()

const obj6 = {}
obj6.__proto__ = MeuObjeto.prototype
obj6.nome = 'Obj3'
obj6.falar()

/** O exemplo acima, traz algumas confusões, porém lógicas, 
 *  como uma função apontar como prototipo um Objeto, onde uma vez que instanciada
 *  a função passa a ser objeto.
 *  porém, ela ainda pode receber parametros e funções internas, onde se colocarmos ela como o prototipo.
 *  ela pode passar suas funções para os demais objetos instanciados. que é ali no caso, a propriedade nome e a função falar
 *  onde podemos ver claramente que suas instancias, podem acessar uma vez que foi declarada como prototipo.
 */
