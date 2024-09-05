const rl = require('readline-sync')

let base = 0
let altura = 0

base = parseFloat(rl.question("Digite a base em cm: "))
altura = parseFloat(rl.question("Digite a altura em cm: "))

let areaTriangulo = (base*altura)/2

console.log(areaTriangulo)