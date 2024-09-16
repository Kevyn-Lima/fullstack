const fs = require('fs')
const path = require('path')


function leituraDados(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

leituraDados(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `o valor final é: ${conteudo}`)
    .then(console.log)