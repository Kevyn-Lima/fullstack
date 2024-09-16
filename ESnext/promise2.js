function gerarNumerosEntre(min, max, tempo){
    if(min>max) [max,min] = [min, max]
     return new Promise(resolve => {
        setTimeout(() =>{
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros(){
   return Promise.all([
        gerarNumerosEntre(15, 20, 1000), 
        gerarNumerosEntre(15, 20, 500), 
        gerarNumerosEntre(15, 20, 2000)
    ])
}

//console.time('promise')

/*gerarVariosNumeros().then(console.log)
 .then(() =>{
     console.timeEnd ('promise')
 }) */

 function funcionaOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try {
                //con.log('temp')
                if(Math.random() < chanceDeErro){
                    reject('Ocorreu um erro!')
                }else{
                    resolve(valor)
                }
            }
        catch(e){
            reject(e)
        }
    })
 }

 funcionaOuNao('testando...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp: ${err}`)
    )
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))