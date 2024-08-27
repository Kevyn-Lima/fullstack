const sequencia = {
    _valor: 1, // Convenção, estou dizendo nas boas praticas, que esse atributo, é pretendido ser apenas utilizado internamente.
    get valor(){return this._valor++}, // Apenas pegando o valor e incrementando ele
    set valor(valor){
        if(valor > this._valor){ /** Ja aqui, estamos fazendo uma validação, apenas para que ele possa percorrer para frente, e não para tras. */
            this._valor = valor
        }    
    }
}

console.log(sequencia.valor, sequencia.valor) // aqui estamos puxando pelo get apenas.
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 
/** Note as seguintes ocorrencias, após setarmos que o valor sera de 1000, ele irá trazer e o set, não deixara retornar para tras, 
 *  mesmo que tentemos utilizar manualmente, não será possivel, pois o validador não o deixa.
 */

console.log(sequencia.valor, sequencia.valor)
