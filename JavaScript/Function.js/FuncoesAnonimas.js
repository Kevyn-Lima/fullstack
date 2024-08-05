/** Massificar Funções Anonimas, para ter um conceito bem estruturado.*/
const soma = function (x, y){{
    return x + y
}}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(4, 5)
imprimirResultado(4,5, function(x, y){
    return x - y
})
 

/** Com uma arrow function tambem  */
imprimirResultado(4, 5, (x,y) => x * y)

/** Uma outra forma seria colocando uma função dentro de um objeto, assim ela seria anonima, mas estaria relacionada ao atributo do objeto*/
const pessoa = {
    falar: function(){
        console.log('Olá')
    }
}
pessoa.falar()