/** O "this" em JavaScript se refere ao objeto que está sendo referenciado em um determinado contexto ou escopo.
 *  Ele pode ser usado dentro de uma função para se referir ao objeto que a chamou, 
 * ou pode ser usado fora de uma função para se referir ao objeto global (no caso do navegador, seria o objeto "window") 
 * 
 * O this pode variar muito em JS, por isso, se existe o bind, onde se consegue "amarrar" o This, para ser utilizado, vamos ver um exemplo abaixo*/

const pessoa = {
    saudacao: 'Bom Dia',
        falar(){
            console.log(this.saudacao) /* aqui estamos acessando a saudação, pois o This esta atrelado
            ao dono dessa função, então conseguimos acessar o atributo de um objeto, onde está sendo referenciado pelo This.*/
        }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: Funcional e Orientação a Objetos

/** This e a função Bind, bind vc passa um objeti no qual vc quer quer que seja resolvido o this, ou seja se passa a função como argumento*/

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

/** Uma outra forma de se utilizar o this */

function Pessoa(){
    this.idade = 0
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/**.bind(this)/ Aqui funcionou da seguinte forma, o this estava sendo passado como parametro, e acabou sendo o objeto amarrado
    para se puxar a idade, criamos uma função e instanciamos ela para realizar as validações... */, 1000)
}
new Pessoa
