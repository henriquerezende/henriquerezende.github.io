arrayTeste = [2, 3, 2, 5, 8, 2, 3];

//retorna a moda de um array com inteiros
const modaInteiro = array => {
  let modaCont = 0;
  let moda = 0;
  for (i in array) {
    let cont = 0;
    for (x in array) {
      if (array[i] == array[x]) {
        cont++;
      }
    }
    if (cont > modaCont) {
      modaCont = cont;
      moda = i;
    }
  }
  return array[moda];
};

console.log(modaInteiro(arrayTeste));
