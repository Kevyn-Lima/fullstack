/** Outro modulo dentro de Node que pode exportar dados */

module.exports = { // Se não for da forma module.exports, não será possível realizar a exportação dos dados.
    bomDia: 'Bom dia',
    boaNoite(){
        return 'Boa noite'
    }
}