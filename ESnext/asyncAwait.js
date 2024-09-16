//Com promise...
const http = require('http')

const getTurma = letra =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject) => {
        http.get(url,res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            

            res.on('end', ()=> {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
   })
}

/** Recurso do ES8  
 * utiliza Promise e tem como objetivo, simplificar o uso de promises...
 * Tornando ele um código de assincrono para um código sincrono
*/

let obterAlunos = async () => { // para uma função async é obrigatorio ter o async no começo se não, ela não funciona com o await
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return [].concat(tA, tB, tC)
}//Retorna um objeto AsyncFunction e em cima dele que se chama o metodo then, para ser executado.
    
    obterAlunos()
.then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))