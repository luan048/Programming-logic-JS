function fibonacciCasos(x) {
    if (x == 0) {
        return 0
    } 
    else if (x == 1) {
        return 1
    } 
    else {
        return fibonacciCasos(x - 1) + fibonacciCasos(x - 2)
    }
}

// Acumulador para Recursividade em cauda
function fibonacci(x) {
    return fibonacciCasos(x)
}

let numero = 10

console.log(`O Fibonacci de ${numero} é igual a: ${fibonacci(numero)}`)
