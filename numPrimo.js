let num = 2
let count = 0

for(let i = 0; i <= num; i++) {
    if(num%i==0) {
        count++
    }
}

if(count == 2) {
    console.log('Número Primo')
}
else {
    console.log('Número Composto')
}