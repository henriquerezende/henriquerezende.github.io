//Escreva um programa que recebe o nome de uma peça de xadrez e retorna os movimentos que ela faz.

//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas; sem aumentar a quantidade de condicionais.

//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

const movimentosXadrez = (peca) => {
    switch(peca.toLowerCase()){
        case "rei":
            return "1 espaço para qualquer lado"
        case "rainha":
            return "Número ilimitado de casas para qualquer lado"
        case "peão":
            return "Até duas casas para frente caso seja a primeira vez que o peão anda ou uma casa caso contrario. Come na diagonal"
        case "cavalo":
            return "Anda em 'L'."
        case "bispo": 
            return "Anda na diagonal"
        case "torre":
            return "Anda em linha reta"
        default: 
            return "Não é uma peça de Xadrez"
    }
}

console.log(movimentosXadrez("Torre"))