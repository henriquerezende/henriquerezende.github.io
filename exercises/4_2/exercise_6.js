let num = 37;
let ePrimo = true;

if (num == 2 || num < 1 || num % 2 == 0) {
  ePrimo = false;
} else {
  for (let cont = 3; cont < num / 2; cont += 2) {
    console.log(cont);
    if (num % cont == 0) {
      ePrimo = false;
    }
  }
}

ePrimo == true ? console.log("É primo") : console.log("Não é primo");
