/** Podemos acessar qualquer atributo global que foi declarado */

require('./global')

console.log(meuApp.saudacao())

/** e Infelizmente podemos também realizar uma alteração */
meuApp.nome
console.log(meuApp.nome)
meuApp.nome = 'Eita!'
console.log(meuApp.nome)

/** sendo assim, onde foi declarado dentro do global, para resolver
 *  podemos utilizar o método freeze()
 *  que ja dai, não acontece mais de poder sofre alterações.
 */