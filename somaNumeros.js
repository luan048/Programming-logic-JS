const rl = require('readline-sync')

let valor1 = parseInt(rl.question('Valor 1: '))
let valor2 = parseInt(rl.question('Valor 2: '))

const soma = valor1 + valor2

console.log(soma)