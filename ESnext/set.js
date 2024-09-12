/** Estrtura de conjunto, não indexida e que não aceita repetição */
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians').add('Flamengo')
times.add('Vasco')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)