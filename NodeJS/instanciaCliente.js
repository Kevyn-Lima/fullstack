const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor,contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor,contadorD.valor)

/** Vamos lá, o node sempre cria uma instancia em cache, ou seja, ele mantem armazenado uma vez
 * que ja foi instanciado, 
 * 
 *  no Exemplo A e B, podemos perceber isso, estamos instanciando os valores dos contadores da instanciaUnica
 * onde ali ele esta simplesmente declarada, 
 * e ele consegue trazer o cache dela, 
 * 
 * ja no C e D onde foi feita como factory, ele não consegue puxar o cache do D, pois foi passado 
 * por uma função. 
 * 
 * serve para validar uma vez que não queira trazer esse objeto com a instancia criada, 
 * valores a mais. 
 * 
 * assim melhor criando novas instancias, pela factory.
 */

