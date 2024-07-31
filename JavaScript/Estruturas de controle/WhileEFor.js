/** Dando uma olhada em While, uma estrutura de repetições, mais utilizadas quando vc tem uma seção ou algo, em que você
 * não sabe exatamente quantas vezes você irá precisar interar, por conta disso, se utiliza o While.
 */

function getInteiroAleatorio(max, min){
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
 while(opcao != -1){
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
 }

 /** Uma variante da estrutura while, vamos dar uma olhada agora no DO While, o que ela faz é apenas garantir que seja
  * realizada apenas uma vez a execução, raramente utilizada, porém serve para questões didaticas.
  */

 function numeroRandom(max, min){
    const valor = Math.random()*(max -min) + min
    return Math.floor(valor)
 }

 let opc = -1

 do {
    opc = numeroRandom(-1,10)
    console.log(`Opção escolhida do foi ${opc}`)
 } while(opc !=-1)


    /** Utilizando por agora o For, vamos utilizar um exemplo com While, para validarmos as diferenças
     * no While, quando se sabe quanto vai utilizar, para colocar o operador de incrementação, sempre colocar após a impressão da variavel
    */
    let contador = 0
    while(contador <= 10){
        console.log(`contador = ${contador}`)
        contador++
    }
/** Agora com o FOR */

for(let i = 0; i <= 10; i++ ){
    console.log(`contador for = ${i}`)
}

/** Um exemplo de for utilizando Array Percorrendo ele*/

const notas = [6.7, 7.4, 8.4, 5, 4, 7, 6, 9.8]
for(let i = 0; i < notas.length; i++){
    console.log(`Percorrendo o array ${notas[i]}`)
}


/** Utilizando o FOR IN ele percorre o objeto, ou array*/

for (let i in notas){
    console.log(i, notas[i])
}

/**Lembrando que o que ele gera para você é o indice e não o valor dele, 
 * 
 * para acessar o valor, precisa utilizar o nome do objeto ou Array, e colocar a posição que seria o i, como no exemplo acima.
 */
 
/** utilizando em Objeto */
const pessoa = {
    nome:'Ana',
    sobrenome: 'Silva',
    idade: 25,
    peso: 64
}
/**Por ser Objeto, vamos puxar desta forma, acessando ele */
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}