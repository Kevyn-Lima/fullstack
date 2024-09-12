function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(frase) // Resolve aceita apenas um parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Interessante!').then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e)) /** a Unica diferença aqui é que para tratar o erro, precisamos utiliza
o catch, alem de chamar ele no lugar de resolve, 

interessante, chamar desta forma, o reject, em caso de criar uma função em uma aplicação
onde vai ser chamada apenas em caso de erro, passando o erro ao usuario, cliente ali*/