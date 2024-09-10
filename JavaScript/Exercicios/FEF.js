/** Exercicios de fundaments, estruturas de controle e funções.*/

const { todo } = require("node:test")
const { normalize } = require("path")

/** Exercicio 01 */

function soma(a, b){
    
    console.log(`Soma ${a+b}, Subtração ${a-b}, Multiplicação ${a*b}, Divisão ${a/b}`)
}
//soma(10,5)

/** Exercicio 02 */
function classificaTriangulo(a,b,c){
    if(a === b && b === c){
        console.log('É um triangulo Equilátero')
    } else if(a === b || a === c || b === c ){
        console.log('Triangulo Isósceles')
    }else {
        console.log('Triangulo Escaleno')
    }
}
/*  classificaTriangulo(2,2,2)
    classificaTriangulo(2,1,2)
    classificaTriangulo(2,2,1)
    classificaTriangulo(1,2,3)*/

/** Exercicio 03 */

function calculoExpoente(base, expoente){
    console.log(Math.pow(base,expoente))
}
//calculoExpoente(7,2)

/** Exercicio 04 */

function divisao(dividendo, divisor){
    resul = dividendo / divisor
    resto = dividendo % divisor
    console.log(`O Resultado é ${resul}, e o resto é ${resto}`)
}
//divisao(254,5)

/** Exercicio 05 */

function valorDinheiro(valorDecimal){
    valorEmReais = `R$${valorDecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmReais)
}

//valorDinheiro(0.3 + 0.3)

/** Exercicio 06 */

function regimeSimples(capInicial,juros, tempoAplicacao){
    let j = capInicial* juros* tempoAplicacao
    console.log(j + capInicial)
}

function regimeComposto(capInicial,juros, tempoAplicacao){
    let M = capInicial*(1+juros) **tempoAplicacao
    console.log(M)
}
/*regimeSimples(100, 10/100, 2)
regimeComposto(100, 10/100, 2)*/

/** Exercicio 07 */

function bhaskara(ax2, bx, c){

    let resultado = []
    let delta = (bx ** 2) - (4* ax2 * c)
    if(delta < 0){
        return 'Delta é negativo'
    }
    let x1 = (-bx + Math.sqrt(delta)) / (2*ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2*ax2)
    resultado.push(x1)
    resultado.push(x2)

    return resultado
}

/*console.log(bhaskara(1,3,2))
console.log(bhaskara(3,1,2))*/

/** Exercicio 08 
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
*/
/*  R, 1
    P, 3*/
let pontuacao = "30, 40, 20, 35, 51, 25, 42, 38, 56, 100" //Lista em array das pontuações

function avaliaPontuacao(pontuacao){// criando a função e recebendo as pontuações
    
    let pontuacoes = pontuacao.split(", ") //Variavel recebe a lista com .split para converter em array
    
    let qtdQuebradeRecords = 0 //recordes Quebrados = 0
    
    let piorJogo = 1 // Pior jogo começa com 1 pois é o de inicio
    
    let maiorPontuacao = pontuacoes[0] // Maior pontuação recebe a primeira pontuação, ponto de partida
    
    let menorPontuacao = pontuacoes[0] // Menor pontuação recebe a primeira pontuação, ponto de partida

    for(let i = 1; i < pontuacoes.length; i++){ // Utilizando o for para percorrer o array

        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){ /*transformando em int e comparando 
            pontuação atual com o valor da maior pontuação*/

            maiorPontuacao = pontuacoes[i] // recebendo a maior pontuação

            qtdQuebradeRecords++ // adicionando ao numero de recordes quebrados
        } 
        else if(parseInt(pontuacoes[i]) < parseInt(menorPontuacao)){
            
            menorPontuacao = pontuacoes[i] /** Após comparação, recebe o valor da menor
            pontuação e armazena */
            
            piorJogo = i+1; //Adiciona a posição mais 1, para sabermos qual jogo foi o pior
        }
    }
    return [qtdQuebradeRecords, piorJogo] // Returna o array com Quantidade de recordes e qual foi o pior jogo
}

//console.log(avaliaPontuacao(pontuacao)) //Chamando a função recebendo a lista.


/** Exercicio 09 */

function calculaNota(nota){
    let notaArredondada = arredondar(nota)
    if(notaArredondada >= 40 ){
        return `Aluno aprovado com nota ${notaArredondada}`
    }else{
        return `Aluno reprovado com nota ${notaArredondada}`
    }
}

function arredondar(nota){
    if(nota % 5 > 2){        
        return nota + (5 - (nota % 5))
    } else{
        return nota
    }
}

/*
console.log(calculaNota(40))
console.log(calculaNota(29))
console.log(calculaNota(100))
console.log(calculaNota(98)) 
*/

/** Exercicio 10 */

function divisivelPorTres(numero){
    if(numero % 3 === 0){
        return true
    }else {
        return false
    }
}
//console.log(divisivelPorTres(19))

/** Exercicio 11 */

function anoBissexto(ano){
    if(ano <= 0){
        return false
    }else if(ano % 400 == 0){
       return true
    }else if(ano % 100 == 0){
        return false
    }else if(ano % 4 == 0){
        return true
    }else{
        return false
    }
}
//console.log(anoBissexto(2024))

/** Exercicio 12 */

function fatorial(numero){
    if(numero == 0){
        return 1
    }else{
        return numero * fatorial(numero -1)
    }
}
//console.log(fatorial(10))

/** Exercicio 13 */

function diaDaSemana(dia){
    switch(dia){
        case 1: 
            return 'Fim de semana' 
        case 2: case 3: case 4: case 5: case 6:
            return 'Dia útil'
        case 7: 
            return 'Fim de semana'
        default:
            return 'Dia Inválido'
    }
}
//console.log(diaDaSemana(1))

/** Exercicio 14 */

function fruta(nomeFruta){
    switch(nomeFruta){
        case'Maçã':
            return 'Não vendemos esta fruta aqui'
            break
        case 'Kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'Melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Erro, Não encontramos o que procura!'
    }
}
//console.log(fruta('Melancia'))

// Segunda

/** Exercicio 15 */
function compraVeiculo(carro){
    switch(carro){
        case 'Hatch':
            console.log("Compra efetuada com sucesso!")
            break
        case 'Sedans': case 'Motocicleta': case 'Caminhonete':
            console.log("Tem certeza que não prefere este modelo?")
            break
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
    }
}
/*compraVeiculo('Hatch')
compraVeiculo('Caminhonete')
compraVeiculo('Motocicleta')
compraVeiculo('Sedans')
compraVeiculo('Jetsky')*/

/** Exercicio 16 */

function calculadora(num1, operador, num2){
    switch(operador){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Operação invalida!'
    }
}
/*
console.log(calculadora(2, '+', 2))
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));*/

/** Exercicio 17 */

function aumentoSalario(plano, salarioAtual){
    switch(plano){
        case 'A':
            return salarioAtual = salarioAtual + (salarioAtual * 0.10)
        case 'B':
            return salarioAtual = salarioAtual + (salarioAtual * 0.15)
        case 'C':
            return salarioAtual = salarioAtual + (salarioAtual * 0.20)
        default:
            return 'Plano Invalido'
    }
}
/*
console.log(aumentoSalario('A', 1800))
console.log(aumentoSalario('B', 1800))
console.log(aumentoSalario('C', 1800))
console.log(aumentoSalario('D', 1800))*/

/** Exercicio 18 */
function numeroPorExtenso(numero){
    switch(numero){
        case 0:
            return 'Zero'
        case 1:
            return 'Um'
        case 2:
            return 'Dois'
        case 3:
            return 'Três'
        case 4:
            return 'Quatro'
        case 5:
            return 'Cinco'
        case 6:
            return 'Seis'
        case 7:
            return 'Sete'
        case 8:
            return 'Oito'
        case 9:
            return 'Nove'
        case 10:
            return 'Dez'
        default:
            return 'Número fora do intervalo.'
    }
}/*
console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(4))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(6))
console.log(numeroPorExtenso(7))
console.log(numeroPorExtenso(8))
console.log(numeroPorExtenso(9))
console.log(numeroPorExtenso(10))
console.log(numeroPorExtenso(11))*/

/** Exercicio 19 */

function calculoProduto(codItem, qtdItem){
    switch(codItem){
        case 100:
            console.log(`R$${qtdItem * 3.00}`)
            break
        case 200:
            console.log(`R$${qtdItem * 4.00}`)
            break
        case 300:
            console.log(`R$${qtdItem * 5.50}`)
            break
        case 400:
            console.log(`R$${qtdItem * 7.50}`)
            break
        case 500:
            console.log(`R$${qtdItem * 3.50}`)
            break
        case 600:
            console.log(`R$${qtdItem * 2.80}`)
            break
        default:
            console.log('Produto não existente')
    }
}

/*calculoProduto(150,2)
calculoProduto(100,2)
calculoProduto(200,2)
calculoProduto(300,2)
calculoProduto(400,2)
calculoProduto(500,2)
calculoProduto(600,2)*/

/** Exercicio 20*/

function sacarDinheiro(valorSaque){ /** Aqui criamos uma função que recebe como paramêtro o valor a ser sacado*/
    let contador100 = 0;
    let contador50 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;
    /** Acima, esta declarado as cedulas disponiveis, como contadoras, = 0 
     * Abaixo está declarado uma variavel, que recebe a função com o parametro
    */
    let valorNota = calcularValorNota(valorSaque)
    /** Aqui temos  */
    while(valorSaque >= valorNota){
        switch(valorNota){
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -=50
                contador50++
                break
            case 10:
                valorSaque -=10
                contador10++
                break
            case 5: 
                valorSaque -=5
                contador5++
                break
            case 1:
                valorSaque -= 1
                contador1++
                break 
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

    function calcularValorNota(valorSaque){
        if(valorSaque >= 100){
            return 100
        }else if(valorSaque >= 50){
            return 50
        }else if(valorSaque >= 10){
            return 10
        }else if(valorSaque >= 5){
            return 5
        }else if(valorSaque >= 1){
            return 1
        }         
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1){
    let resultado = ''

    if(contador100 > 0){
        resultado +=` ${contador100} nota(s) de R$ 100.`
    }
    if (contador50 > 0) {
        resultado += ` ${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += ` ${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += ` ${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += ` ${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

//console.log(sacarDinheiro(153));

/** Exercicio 21 */
function planoSaude(idade){
    let convenio = 100
    if(idade >= 0 && idade < 10){
        return `O valor a ser pago pela criança é R$ ${convenio + 80},00`
    } else if(idade >= 10 && idade <=30){
        return `O valor a ser pago pela pessoa é de R$ ${convenio + 50},00`
    } else if(idade > 30 && idade <= 60){
        return `O valor a ser pago pela pessoa é de R$ ${convenio + 95},00`
    } else if(idade > 60){
        return `O valor ser pago pela pessoa é de R$ ${convenio + 130},00` 
    }else{
        return `Insira uma idade valida`
    }
}

//console.log(planoSaude(-15))

/** Exercicio 22 */

function calculaValor(mes, valor){
    if(mes > 0 && mes < 13){
        atraso = mes -1
        return (valor *((1 + (5/100))** atraso)).toFixed(2)
    } else{
        'Mês Invalido'
    }
}

//console.log(calculaValor(12, 250))

/** Exercicio 23*/

function calculaNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] *3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. Média ${mediaFinal} ${mediaFinal < 5 ? 'Reprovado': 'Aprovado'} `)
}

//calculaNotaFinal(52457, 2.8, 6, 3.5)

/**Exercicio 24 */

function helloWorld(){
    let i= 1
    while(i < 12){
        console.log('Hello Word', i)
        i++;
    }
}
//helloWorld()


/** Exercicio 25 */

function umCinquenta(){
    for(let i = 1; i <= 50; i++){
        console.log(i)
    }
}
//umCinquenta()

/** Exercicio 26 */

function pares(){
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}
//pares()

/** Exercico 27 */

function calcularCrescimento(altura1, taxa1, altura2, taxa2){
    if(altura1 == altura2){
        if(taxa1 > taxa2) {
            return 'A criança 1 ultrapassara a criança 2 em 1 ano.'
        }else if(taxa1 < taxa2){
            return 'A criança 2 ultrapassara a criança 1 em 1 ano'
        }else {
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if(altura1 > altura2){
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        } else{
            if(taxa2 >= taxa1) {
                return 'A criança menor não ultrapassará a maior'
            }else{
                return `A criança menor ultrapassará a maior em ${calcularTempo(altura1,taxa1, altura2, taxa2)}` 
            }
        }
    }
}


function calcularTempo(alturaMenor, TaxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while(alturaMenor < alturaMaior){
        alturaMenor += TaxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}

//console.log(calcularCrescimento(150, 2, 130, 4))

/** Exercicio 28 */

const vetor = [1,2,3,5,4,7,8,8,4,5,7,8,9,5,6]

function imprimePareImpar(vetor){
    let qtdImpar = 0
    let qtdPares = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            qtdPares++
        } else{
            qtdImpar++
        }
    }
    console.log(`${qtdPares}, numeros pares e ${qtdImpar} numeros impares`)
}

//imprimePareImpar(vetor)

/** Exercicio 29 */

const vetor2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]

function validaQtd(vetor2){
    let qtdDentro = 0
    let qtdFora = 0
    for(let i = 0; i < vetor2.length; i++){
        if(vetor2[i] >= 10 && vetor2[i] <= 20){
            qtdDentro++
        } else{
            qtdFora++
        }
    }
    
    console.log(`${qtdDentro} Numeros dentro do intervalo de 10 a 20, e ${qtdFora} numeros fora`)
}

//validaQtd(vetor2)

/** Exercicio 30 */

const vetor3 = [10,2,4,5,2,6,4,7,7,89,894,568,754,265,5,26,1,2,0,34,6,888]

function maiorMenor(vetor3){
    let maior = vetor3[0]
    let menor = vetor3[0]

    for(let i = 0; i < vetor3.length; i++){
        if(vetor3[i] > maior){
            maior = vetor3[i]
        }else if(vetor3[i] < menor){
            menor = vetor3[i] 
        }
    }
    return[maior, menor]
    //console.log(`O Maior numero é ${maior}, e o menor numero é ${menor}`)
}
//console.log(maiorMenor(vetor3))

/** Exercicio 31 */

const vetor4 = [-1,-2,-4,-6,-8,-7,0,4,5,6,8,-7,-5,-10,-45,45,-5]

function numsNegativos(vetor4){
    let numNegativo = 0
    for(let i = 0; i < vetor4.length; i++){
        if(vetor4[i] < 0){
            numNegativo++
        }
    }
    console.log(numNegativo)
}
//numsNegativos(vetor4)

/** Exrecicio 32 */

const aritimetica = [2,3,3,5,7,10]

function calculaMediaAritimetica(aritimetica){
    let nota = 0, totalNotas = 0, media
    for(let i = 0; i < aritimetica.length; i++){
        totalNotas++
         nota += aritimetica[i] 
         media = nota / totalNotas
    }
    console.log(media)
}
//calculaMediaAritimetica(aritimetica)

/** Outro jeito de fazer o exercicio 32 */

function mediaVetor(aritimetica){
    let soma = 0
    for(let i = 0; i < aritimetica.length; i++){
        soma += aritimetica[i]
    }
    return soma/aritimetica.length
}
//console.log(mediaVetor(aritimetica))

/** Exercicio 33 */

const vetorInteiro = [1,2,3,4]
const vetorString = ['Ana','Julio','Paulo','Ricardo']
const vetorDouble = [1.7, 1.4, 1.8, 1.75]
const todos = vetorInteiro.concat(vetorString, vetorDouble)

function concatenar(...args){
    resultado = []
    for(let i =0; i< arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

/*console.log(concatenar(vetorInteiro, vetorDouble))

console.log(concatenar(vetorDouble, vetorString))

console.log(todos)*/

/** Exercicio 34 */

function retornString(string1, string2){
   let estaContido = true;
   for(let i = 0; i < string1.length; i++){
        let caracteresString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caracteresString2 = string2.charAt(j).toLowerCase()
            if(caracteresString1 == caracteresString2){
                estaContido = true
                break
            } else{
                estaContido = false
            }
        }
        if(!estaContido){
            return estaContido
        }
   }
   for(let i = 0; i < string2.length; i++){
        let caracteresString2 = string2.charAt(i).toLowerCase()
        for(let j = 0; j < string1.length; j++){
            let caracteresString1 = string1.charAt(i).toLowerCase()
            if(caracteresString2 == caracteresString1){
                estaContido = true
                break
            } else{
                estaContido = false
            }
        }
        if(!estaContido){
            return estaContido
        }
   }
   return estaContido
}

//console.log(retornString('Paulo', 'paula'))
/** Exercicio 35 */

const vetorPilha = [1,2,3,4,5]
const vetorAdiciona = [6,7,8,9,10]

function adicionaVetor(vetorPilha, vetorAdiciona){
    for(let i = 0; i < vetorAdiciona.length; i++){
        vetorPilha.push(vetorAdiciona[i])
    }
    return vetorPilha
}

//console.log(adicionaVetor(vetorPilha, vetorAdiciona))
