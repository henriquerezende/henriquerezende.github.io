//Crie uma função que recebe um número inteiro N e retorna o somatório de todos os números de 1 até N.

//Valor de teste: N = 5.

//Valor esperado no retorno da função: 1+2+3+4+5 = 15.

const soma = (num) => {
    let somatoria = 0 
    for(let cont = 1; cont <= num; cont++){
        somatoria += cont
    }
    return somatoria
}

console.log(soma(5))