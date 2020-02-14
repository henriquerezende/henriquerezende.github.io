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