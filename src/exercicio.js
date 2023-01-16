import carros from "./carros.js"

const main = document.getElementById('main')


// Listagem do ano dos carros

const carrosAntigos = carros.filter( carro => {
    return carro.ano < 2015
})

let totalCarrosAntigos = ''

carrosAntigos.forEach( carros => {
    return totalCarrosAntigos += carros.modelo + ', '
} )

const carrosNovos = carros.filter( carro => {
    return carro.ano >= 2015
})

let totalCarrosNovos = ''

carrosNovos.forEach( carros => {
    return totalCarrosNovos += carros.modelo + ', '
} )

let somaKm = carrosAntigos.reduce((prev, next) => {
    return {km: prev.km + next.km}
})

let somaKmNovo = carrosNovos.reduce((prev, next)=> {
    return {km: prev.km + next.km}
})

const carrosGasolina = carros.filter( carro => {
    return carro.combustivel === 'gasolina'
})

let totalCarrosGasolina = carrosGasolina.map( carro => {
    return carro.modelo
})

const carrosEletricos = carros.filter( carro => {
    return carro.combustivel === 'eletrico'
})

let totalCarrosEletricos = carrosEletricos.map( carro => {
    return carro.modelo
})

console.log(carrosGasolina)


main.innerHTML= 'Total de carros lançados antes de 2015: ' + totalCarrosAntigos + '<br>' + 'Carros lançados em 2015 ou depois: ' + totalCarrosNovos + '<br>' + 'Soma dos km rodados por carros antigos: ' + somaKm.km + '<br>' + 'Soma dos km rodados por carros novos: ' + somaKmNovo.km + '<br>'

main.innerHTML += 'Carros que utilizam gasolina: ' + totalCarrosGasolina.join(', ') + '<br>'
main.innerHTML += 'Carros elétricos: ' + totalCarrosEletricos.join(', ')
