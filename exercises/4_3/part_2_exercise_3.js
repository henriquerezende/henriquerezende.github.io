arrayTeste = [2, 4, 6, 7, 10, 0, -3]

//retorna o índice do menor valor
const menorValor = (array) => {
    let maior = 0
    for(i in array){
        if(array[i]<array[maior]){
            maior = i
        }
    }
    return maior
}

console.log(menorValor(arrayTeste))