let a = 3
let b = 3
let c = 5

const numPar = (a, b, c) => (a%2==0 | b%2==0 | c%2==0) ? true : false

console.log(numPar(a, b, c))

