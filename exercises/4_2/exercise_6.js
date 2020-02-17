let num = 1
let ePrimo = true

if(num==2 || num<1) { ePrimo = false }

for(let cont = 3; cont<num; cont+=2){
    if(num%cont == 0){
        ePrimo = false;
    }    
}
(ePrimo==true) ? console.log("É primo") : console.log("Não é primo")