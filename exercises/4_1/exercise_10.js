//Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro
// (em números absolutos) a empresa terá ao vender mil desses produtos.

//Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no calculo do lucro.

//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor 
//que zero.

let custo = 1
let valorVenda = 2

const lucro = (custo, valorVenda) => (custo<0 || valorVenda<0) ? "Erro: Valor de entrada errado." : (valorVenda*1000) - (custo*1200)

console.log(lucro(custo, valorVenda))