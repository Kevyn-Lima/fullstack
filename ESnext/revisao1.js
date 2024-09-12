/** Uma Revisão sobre ECMA Script */

/** Destructuring */
const [l,e, ...tras] = "Cod3r"
console.log(l,e,tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome:'Kevyn', idade: 28}
console.log(nome, i)