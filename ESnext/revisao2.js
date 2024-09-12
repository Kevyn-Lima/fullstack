/** uma leve revisão sobre ECMA Script 
 * 
 *  Arrow function
*/

const soma = (a, b) => a + b
console.log(soma(1,2))

const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto = 'Node'){
    console.log(texto)
}

log()

// Operador rest/spread
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))

/** Revisão numero 3 */

/** Recursos relacionados a Objeto */

//ES8: Object.values/Object.entries

const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

/** Melhorias na notação literal */

const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Olá,'
    }
}
console.log(pessoa.ola(),pessoa.nome)

/** Class */
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'au au'
    }
}
const puddle = new Cachorro()

console.log(puddle.falar())