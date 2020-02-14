//Escreva um programa que define três números em variáveis no seu começo e retorna true se uma das três for par. Caso contrário, ele retorna false.

//Bonus: use somente um if.

let a = 2
let b = 3
let c = 5

const numPar = (a, b, c) => (a%2==0 || b%2==0 || c%2==0) ? true : false

console.log(numPar(a, b, c))

