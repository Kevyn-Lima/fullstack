/** Função arrow, sempre é uma função anonima, se vc quiser puxar ela depois, precisa ser armazenada em uma variavel, ou em uma Constante. *
 * */
let dobro = function(a){
    return 2 * a
}

dobro = (a) => {return 2 * a}

dobro = a => 2 * a //return implicito, Função de uma unica linha, que executa um unico trabalho, passando apenas um unico parametro para o mesmo.

let ola = function(){
    return 'Olá'
}
ola = () => 'Olá'
ola = _ => 'Olá' // Possui um parametro sendo feito desta forma
console.log(ola())

/** Conceito do This, dentro de uma arrow, é fixo, e nada influencia o valor do this */

/*function Pessoa(){
    this.pessoa = 0
    setInterval(() =>{ // Uma das maiores vantagens de se utilizar a Arrow Function, significa que esta totalmente atribuida a função independente do escopo 
        this.pessoa++
        console.log(this.pessoa)
    }, 1000)
}
new Pessoa 


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** Terceiro exemplo de Arrow Function com This e Bind */

 /** Criamos uma função que vai comparar se o This esta como global ou apontando para um objeto especifico, nesse caso
  * utilizando o bind
  */

 let comparaComThis = function(param){
    console.log(this === param)
 }
 comparaComThis(global)//No ambito Node, o global é Global mesmo

 const obj = {}
 comparaComThis = comparaComThis.bind(obj) // Aqui estamos mandando o this para o objeto "obj" utilizando o bind, por isso ele da false
 comparaComThis(global)
 comparaComThis(obj)

/** Vamos dar uma olhada em ambito de Arrow Function */

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global) // Ele imprime falso, pois não é global, esta estritamente sobre o modulo em que foi declarado.
comparaComThisArrow(module.exports)

/** Mesmo utilizando a função Bind, ele não vai apontar para outro objeto, a ArrowFunction mantem a guarda do this para si mesma, como no exemplo 
 * abaixo
 */

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)