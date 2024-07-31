/** Utilizando o Switch que seria o proprio para utilizar para multiplas seleções. Seria o mais apropriado. */
const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Quadro de Honras')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota Invalida')
    }
}

/** Algumas observações obre o Switch Case, 
 * 
 * ele não nos permite sair se uma ação for Verdadeira, por conta disso, se utiliza o break, para que ele pare e saia dali
 * No IfElse, podemos utilizar um intervalo para validações, o Switch não pertmite, por conta disso, se utiliza os mesmo em linha, como 
 * demonstrado acima.
 * e ele tem o Default, que é a mensagem padrão, caso nenhum dos casos, seja verdadeiro.
 */

imprimirResultado(-1)