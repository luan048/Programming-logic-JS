const rl = require('readline-sync')

let nota1 = 0
let nota2 = 0
let nota3 = 0
let nota4 = 0
let resp = 'nao'

do {

    const aluno = rl.question('Nome do aluno: ')

    nota1 = parseFloat(rl.question('Digite a nota 1: '))
    nota2 = parseFloat(rl.question('Digite a nota 2: '))
    nota3 = parseFloat(rl.question('Digite a nota 3: '))
    nota4 = parseFloat(rl.question('Digite a nota 4: '))

    const media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1)

    console.log(`A media do aluno ${aluno} foi de ${media}`)
    resp = rl.question('Deseja continuar? ')

} while(resp.toLowerCase() === 'sim') //Aceita qualquer formato de 'sim'