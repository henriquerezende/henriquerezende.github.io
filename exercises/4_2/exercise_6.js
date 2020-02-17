let num = 200
let ePrimo = true

for(let cont = 3; cont<num; cont+=2){
    console.log(cont)
    if(num%cont == 0){
        ePrimo = false;
    }    
}
(ePrimo==true) ? console.log("É primo") : console.log("Não é primo")