/** forOf intera em cima de valor, ao inver do indice, como o forIn*/
// Primeiro exemplo, interando em cima de uma string

const lacoForin = []
const lacoForof = []

for(let letra in "cod3r"){
    lacoForin.push(letra)
}
console.log(lacoForin)
for(let letra of "cod3r"){
    lacoForof.push(letra)
}
console.log(lacoForof)

const assuntosECMA = ['Map', 'Set', 'Promise']

for(let i in assuntosECMA){
    console.log(i)
}
for(let assunto of assuntosECMA){
    console.log(assunto)
} 

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado:false}]
])



for(let[ch,vl] of assuntosMap){
    /** Caso, desejado, pode ser utilizado o destructuring para 
    acessar chave valor sem o entries()
    seria como esse exemplo */
    console.log(ch,vl)
}
for(let assunto of assuntosMap){ 
    console.log(assunto)
}
for(let chaves of assuntosMap.keys()){
    console.log(chaves)
}
for(let valores of assuntosMap.values()){
    console.log(valores)
}
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a','b','c'])
for(let letra of s){
    console.log(letra)
}
