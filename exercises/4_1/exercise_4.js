//Faça um programa que, dado um valor definido numa variável, retorne “positive” se esse valor for positivo, “negative” se for negativo e “zero” caso contrário.

let a = 0
const sinal = (a) => {
    if(a>0){
        return "positive"
    } else if(a<0){
        return "negative"
    } else {
        return "zero"
    }
}
console.log(sinal(a))