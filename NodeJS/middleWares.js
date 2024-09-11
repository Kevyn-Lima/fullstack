// Middleware (Chain of responsability)
/** Um padrão de desenvolvimento muito utilizando, principalmente em Express.js */

const passo1 = (ctx, next)=>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => {
    ctx.valor3 = 'mid3'
}
/** Função que executa o middleware */
const exec = (ctx, ...middlewares) => { // Aqui está recebendo o objeto ctx, e com operador spread 
    /** Está validando uma cadeia de arrays */
    const execPasso = indice => { /** Aqui é uma outra função que executa os passos, tendo como 
        parametro o indice do spread, então será necessario validar ele. */
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, ()=> execPasso(indice + 1))
    } /** Nas linhas acima, está aplicada a logica de execução dos middlewares,
    como funciona;
    
    Ele valida se o middleware primeiramente existe, ou seja, se é true, EE se o indice em 
    que se encontra é menor do que o tamanho do array setado, ou seja, o indice é menor que 
    o middleware.length, se também for verdade, ai ele faz a execução do indice em que se enconta 
    no middleware, trazendo como parametros de execução o ctx, que é o objeto executado, e depois
    o next que seria o proximo passo a executar, passando indice + 1 para que ele mude o indice e 
    refassa a validação novamente. até que atinja o limite do indice e retorne false*/
    execPasso(0)
    /** Na linha de cima, simplesmente estamos puxando a execução com indice(0) */
}

const ctx = {}
exec(ctx, passo1,passo2,passo3)
console.log(ctx)