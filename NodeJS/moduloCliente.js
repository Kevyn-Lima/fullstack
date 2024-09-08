const moduloA = require('./moduloA') // Passando o caminho relativo do modulo para ser utilizado
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)
console.log(moduloB)
console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())

/** Utilizamos do modulo A e do Modulo B formas de exportar arquivos, sendo a B mais comum, a "Padrão", por assim dizer
 *  e sendo aqui pelo require, Requerindo os arquivos do moduloA e B, sendo assim, conseguimos ter acesso a eles.
 *  É bom ter o modulo assim, pois somente aquilo que tiver o module.exports, pode ser utilizando fora dele, 
 *  o Restante fica apenas ali dentro daquele arquivo, sendo inacessivel
*/