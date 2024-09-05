/** Classe em JS */
class lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamentos(...lancamento){ /** Spread */
        lancamento.forEach(l => this.lancamento.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2024)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

/** Um Segundo exemplo de classe com Herança em JS*/

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)