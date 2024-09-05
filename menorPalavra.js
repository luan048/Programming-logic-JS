let menssagem = 'Espero que esteja tudo bem com você'

let arrayMenssagem = menssagem.split(' ')
let tamanho = arrayMenssagem.length

let menor = arrayMenssagem[0]

for(let i = 1; i < tamanho; i++) {
    if(arrayMenssagem[i].length < menor.length) {
        menor = arrayMenssagem[i]
    }
}

console.log(menor)