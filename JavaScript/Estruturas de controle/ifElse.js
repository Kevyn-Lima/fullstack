/** Vamos olhar aqui, criamos uma função, onde estamos puxando do Number, pois ele consegue herdar algumas coisas do Object, e como ele é
 * do tipo number, fica então mais facil a tipagem para validações.
 */
Number.prototype.entre = function(inicio, fim){ // a função recebe os parametros de inicio e fim, para validação da nota
    return this >= inicio && this <= fim // aqui está realizando uma validação, onde ele só vai retornar se estiver entre o inicio e o fim, que são os paramentros passados.
}

const imprimirResultado = function(nota){ /** aqui estamos criando uma constante recebendo uma função onde ele vai passar o valor das notas. */
    if(nota.entre(9,10)){ /** podemos notar que aqui, estamos puxando o parametro da função que será a nota, e utilizando para validação
        a função entre, o valor da nota em si, será passado quando a função imprimirResultado for chamada, com os parametros utilizados. */
        console.log('Quadro de Honra')
    }
    else if(nota.entre(7,8.99)){
        console.log('Aprovado')
    }
    else if(nota.entre(4,6.99)){
        console.log('Recuperação')
    }
    else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }
    else{
        console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(7.99)
imprimirResultado(0)
imprimirResultado(-1)