let a = 7
let b = 6
let c = 5
const larger = (a, b, c) => {
    if(a>b&c){
        return a
    } else if(b>c){
        return b
    } else{
        return c
    }
}
console.log(larger(a,b,c))