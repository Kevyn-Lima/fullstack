/** Express será nosso FrameWork para criação de servidor Web services */

const porta = 3003
const express = require('express')
const app = express()



app.get('/produtos', (req, res, next) => {
    res.send({nome:'Notebook', preco: 123.45}) // Converte em JSON
})

app.listen(porta, ()=> {
    console.log(`Servidor executando na porta ${porta}`)
})