/** Express será nosso FrameWork para criação de servidor Web services */

const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser') // precisa instalar o body-parser

// Middleware para parsear dados URL-encoded

app.use(bodyParser.urlencoded({extended: true}))

/** bodyParser, Especifico do Express.js
 *  ele é um Middleware que lida com requisições no servidor HTTP 
 *  que converte o ps dados do corpo em objeto, JS para que possa ser acessado e utilizado com facilidade
*/

/** Para que serve o BodyParser 
 * Quando um cliente (como um navegador ou uma aplicação de front-end)
 * envia dados para o servidor por meio de uma requisição HTTP, os dados podem vir no
 * corpo da requisição (por exemplo, ao submeter um formulário ou enviar dados em JSON). 
 * No entanto, o Node.js e o Express não processam automaticamente esses dados.
 * O body-parser entra aqui para "traduzir" os dados recebidos em um formato
 * que o servidor consiga entender.
*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // Converte em JSON
})

app.get('/produtos/:id',(req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //res(request) onde vem os parametros, utilizando params, para acessar os atributos
})

app.post('/produtos',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Converterá em JSON
})

app.put('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Converterá em JSON
})

app.delete('/produtos/:id',(req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Converterá em JSON
})

app.listen(porta, ()=> {
    console.log(`Servidor executando na porta ${porta}`)
})
