/** JSON JavaScript Object Notation */

/** JSON nada mais do que um formato de dados, inter operabilidade */

const obj = {a: 1, b: 2, c:3, soma(){ return a + b + c}}
console.log(JSON.stringify(obj))
/** Aqui estamos utilizando o stringify() para passar para JSON 
 *  o fato é que JSON é apenas uma forma de se passar dados, ou seja, mesmo tendo uma função dentro do objeto, 
 *  ele não consegue ler, pois não se trata de um dado.
*/
/*
console.log(JSON.parse("{ a: 1, b:2, c:3 }"))
console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }"))
    Desta duas formas acima, não é a forma correta, por isso não funciona
*/

console.log(JSON.parse('{ "a":1, "b":2, "c": 3}'))
// Sendo possível também, passar dentro de um JSON Strong, Boolean, Objeto e Array.

console.log(JSON.parse('{ "a": 1.7, "b": "String", "c": {}, "d": []}'))