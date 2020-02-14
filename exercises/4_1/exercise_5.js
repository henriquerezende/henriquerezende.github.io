let a = 50
let b = 50
let c = 80


const triangulo = (a, b, c) => {
    //testa se angulo <0 e se a soma dos angulos = 180
    return (a<=0 | b<=0 | c<= 0) ? false : (((a+b+c)==180) ? true : false)
}

triangulo(a,b,c)==true ? console.log("É um triangulo") : console.log("Erro: Não é um triangulo")

