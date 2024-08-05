/*class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar() */



/** Um desafio para transformar a classe acima em uma função construtora
 */



function Pessoa(nome){
    this.nome = nome
    this.falar = function() {
        console.log(`My name is ${this.nome}`)
    }
}
const p2 = new Pessoa('Kevyn')
p2.falar()
