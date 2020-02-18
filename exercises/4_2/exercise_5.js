
n = 7;
let string = [];

for (let cont = 0; cont < n; cont++) {
  string[cont] = " ";
}

let meio1 = Math.trunc(n/2)
let meio2 = meio1
for (let cont3 = 0; cont3 < n; cont3+=2){
  string[meio1]="*"
  string[meio2]="*"  
  if(cont3>=n-1){
    for(cont2 = 0; cont2<n; cont2++){
        string[cont2]="*"
    }
  }
  let arrayToString = string.join("");
  console.log(arrayToString)  
  string[meio1]=" "
  string[meio2]=" "
  meio1++
  meio2--  
}