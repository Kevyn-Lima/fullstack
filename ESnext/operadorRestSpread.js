/** Rest ele junta e Spread ele espalha */
// Usar rest com parametro de função.

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12459.00}
const clone = {ativo: true, ...funcionario} /** Aqui estamos atribuindo todos os atributos do Objeto
funcionario para o objeto clone, atraves do spread(...), tudo o que for feito dentro de clone
não sofrerá nenhuma alteração dentro de funcionario */

console.log(clone)
clone.salario = 2000.00
console.log(funcionario)
console.log(clone)

// usar o spread com array
const grupoA = ['Ana', 'Pedro', 'João', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)

/** O rest se utiliza em ambito de parametros de função, para passar valores, juntar,
 * o spread como nos exemplos acima.
 */