//Faça um programa que define três variáveis com os valores dos três angulos internos de um triangulo. Retorne true se os angulos representarem os angulos de um triangulo e false caso contrário.

//Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos o programa deve retornar uma mensagem de erro.

let a = 0
let b = 180
let c = -80


const triangulo = (a, b, c) => {
    //testa se angulo <0 e se a soma dos angulos = 180
    return (a<=0 || b<=0 || c<= 0) ? false : (((a+b+c)==180) ? true : false)
}


triangulo(a,b,c)==true ? console.log("É um triangulo") : console.log("Erro: Não é um triangulo")

