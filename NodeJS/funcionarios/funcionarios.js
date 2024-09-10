const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') /** Aqui estamos utilizando a biblioteca axios*/

const pais = f => f.pais === 'China' // forma declarativa de uma Arrow function
const mulheres = f => f.genero = 'F'// forma declarativa de uma Arrow function
const salario = (func, funcAtual) => { return func.salario < funcAtual.salario ? func : funcAtual} // forma declarativa de uma Arrow function

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(pais).filter(mulheres).reduce(salario))
})

/** Em cima estamos utilizando a biblioteca axios, para pegar no servidor (url) e utilizando o .then
 * que é uma Promise, onde vai retornar todos os dados do servidor || API
 *  então passando esses dados para uma variavel funcionarios, visto que os dados 
 * é um array com objetos de funcionarios
 * e utilizando o console.log com os metodos filter e reduce, para encontrarmos
 * o menor salario de uma funcionaria chinesa.
 */