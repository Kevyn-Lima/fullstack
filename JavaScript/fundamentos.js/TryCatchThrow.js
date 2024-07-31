/*Então Aqui criaremos uma outra função para tratar o erro, e utilizaremos Try Catch Throw em um bloco de código onde sabemos que pode ou não
trazer algum erro, ou que imaginamos que possa ocorrer algum erro ali*/

function tratarErroELancar(erro){
    //throw new Error("Ocooreu um erro imprimindo algo do objeto") embaixo entra como podemos colocar o nome do erro mensagem e a data.
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

/* Primeiro estamos criando uma função onde está realizando a impressão de um nome, vinda de um objeto,
porem os parametros, são diferentes, logo terá erro*/

function printName(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    }catch(e){
        tratarErroELancar(e)
        }finally{
            console.log("Final")
        }
    
}

const obj = {nome:"Kevyn"}
printName(obj)

/** muito interessante e importante, não deixar a mensagem grande e informações de infra-estrutura para o usuario ver, seria bom, se possível gerar um hash
 * e podemos utilizar do mesmo soliciantando ao usuario, para que ele encaminhe e assim, podemos identificar onde está o erro dentro do sistema como um todo
 * ou um erro geral.
 */