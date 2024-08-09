/** Exercicios de fundaments, estruturas de controle e funções.*/

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
console.log(anoBissexto(2024))

