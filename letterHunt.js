function cacaLetra(letter, phrase) {
   let arrayLetter = phrase.split('')
   let tamanho = arrayLetter.length

   let count = 0

   for(let i = 0; i < tamanho; i++) {
    if(arrayLetter[i] === letter) {
        count++
    }
   }

   console.log(`A letra ${letter} aparece ${count} vezes`)
}

cacaLetra('r', 'o rato roeu a ropa do rei de roma')
