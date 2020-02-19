arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

//retorna a palavra com mais letras
const maiorString = (array) => {
    let maior = 0
    for(i in array){
        if(array[i].length>array[maior].length){
            maior = i
        }
    }
    return array[maior]
}

console.log(maiorString(arrayTeste))