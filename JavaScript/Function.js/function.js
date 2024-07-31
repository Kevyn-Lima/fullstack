/** Função recebe parametros e retorna um Valor Basicamente, Quase tudo em JS é função
 * como um conceito de First-Class Object(Citizens)
 * Higher-order function
*/
//Sendo criada de forma Literal

function fun1(){ }

//Possivel armazenar dentro de uma variavel

const fun2 = function() {}

//Armazenar dentro de um array

const array = [function(a,b){return a + b},fun1, fun2 ]
//Funciona normalmente, como no exemplo abaixo
/** Acessamos a posição 0 do array, onde temos a função com parametros que esta retornando a soma dos mesmos. */

console.log(array[0](2, 3))

/** Podemos armazenar dentro de atributos de um objetos */

const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

/** Passar uma função como Parametro em outra função.*/

function run(fun){
    fun()
}