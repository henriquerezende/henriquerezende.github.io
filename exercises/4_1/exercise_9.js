let a = 3
let b = 3
let c = 5

const numImpar = (a, b, c) => (a%2==0 | b%2==0 | c%2==0) ? false : true

console.log(numImpar(a, b, c))