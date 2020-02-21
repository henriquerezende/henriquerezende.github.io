//(Difícil) Faça um programa que recebe uma string em algarismos romanos e retorna o número que a string representa.
//E atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

//Dicas:

//A função .split("") transforma uma string em um array de caracteres, em que cada elemento do array é uma letra.
//O valor de cada numeral romano é:

//Copiar
//| I   | 1    |
//| --- | ---- |
//| IV  | 4    |
//| V   | 5    |
//| IX  | 9    |
//| X   | 10   |
//| XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associa cada letra a um numeral para fácil consulta?

// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. 
//Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele,
// ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

// LXXXVIII = 88
const romToDec = string => {
    let romToDec = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    return romToDec[string]
}

const somaRomanos = (string) => {
    let array = []
    let soma = 0
    for(Letra of string){
        array.push(romToDec(Letra))        
    }
    console.log(array)
    for(indNum in array){
        if(array[parseInt(indNum)+1]>array[indNum]){
            soma -= array[indNum]
        } else {
            soma += array[indNum]
        }
    }
    return soma
}

console.log(somaRomanos("LXXXIV"))