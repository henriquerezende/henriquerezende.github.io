arrayTeste = [2, 3, 6, 7, 10, 1]

//retorna o índice do maior valor
const maiorValor = (array) => {
    let maior = 0
    for(i in array){
        if(array[i]>array[maior]){
            maior = i
        }
    }
    return maior
}

console.log(maiorValor(arrayTeste))