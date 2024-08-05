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

/** Utilizando Parâmetros variaveis
 * Explicando de uma forma simples, voce pode criar uma função, sem passar parametros, e utilizar do arguments como um array, para passar por eles
 * segue o exemplo abaixo.
 * A propriedade arguments: arguments representa os argumentos correspondentes a invocação mais recente da função
 */

function soma(){ //Não foi passado parametros
    let soma = 0; //Aqui passamos soma = 0, e vamos utilizar um for in, para percorrer a propriedade arguments 
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1))
console.log(soma(' ', '=', ' ', 'a', 'b', 'c'))

/**É uma forma interessante de se conseguir utilizar, porem atualmente está sendo subistituido pelo REST/SPREAD dependendo do contexto em que
 * se utiliza Logo utilizaremos para validar
 */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Aqui vamos dar uma olhada em Parametros Padrão, introduzida pelo ES6*/

/** De uma forma "Old School" vamos dar um exemplo de como se utilizava antes do ES6 */
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(`Soma sem passar parametros = ${soma1()}, `, `Soma passando um parametro  = ${soma1(2)}, `, `Soma passando os três parametros = ${soma1(2,4,5)}`)

/** Com a atualização do ES2015 agora se pode definir qual é o padrão dos parametros */
function soma2(a = 1, b = 2, c = 3){
    //Com um simples return ja é o suficiente
    return a + b + c
}
console.log(soma2())