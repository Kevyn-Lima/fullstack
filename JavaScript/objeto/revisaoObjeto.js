/** Coleção dinâmica de pares chave/valor */

const produto = new Object
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'Cronos',
    valor: 73000,
    proprietario:{
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        },
        condutores:[{
            nome:'Kevyn',
            idade:19
        },{
            nome:'Henrique',
            idade: 26
        }]
    }
}

console.log(carro)