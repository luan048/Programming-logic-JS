const frase = 'o rato roeu a ropa do rei de roma'

const arrayFrase = frase.trim().split(' ')
const obj = {}

for(let palavra of arrayFrase) {
    const firstLetter = palavra[0]

    if(obj[firstLetter]) {
        obj[firstLetter]++
    }
    else {
        obj[firstLetter] = 1
    }
}

console.log(obj)