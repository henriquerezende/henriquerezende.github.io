//Crie uma função que recebe uma string word e outra string ending. Verifique se a string ending é o final da string word.
//Considere que a string ending sempre sera menor que a string word.

//Valor de teste: "trybe" e "be"
//Valor esperado no retorno da função: true
//verificaFimPalavra("trybe", "be");
//Retorno esperado: true
//verificaFimPalavra("joaofernando", "fernan");
//Retorno esperado: false

let string = "trybe"
let fim = "be"

verificaFimPalavra = (string, fim) => {
    indiceString = (string.length - 1) - fim.length
    let resp = true
    for(letra in fim){
        if(string[parseInt(letra) + (indiceString) + 1]!=fim[letra]){            
            resp = false;
            break
        }
    }
    return resp
}

console.log(verificaFimPalavra(string,fim))