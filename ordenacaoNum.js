const tamanho = 5

let array = [10, 4, 8, 2, 6]

for (let i = 0; i < tamanho - 1; i++) {

    for(let j = 0; j < tamanho - i- 1; j++) {

        if(array[j] > array[j + 1]) {

            const temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}

console.log(array)