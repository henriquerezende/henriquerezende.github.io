
n = 7;
let string = [];

for (let cont = 0; cont < n; cont++) {
  string[cont] = " ";
}

let meio = Math.trunc(n/2)
for (let cont3 = 0; cont3 < n/2; cont3++){
  string[meio + cont3]="*"
  string[meio - cont3]="*"  
  
  console.log(string.join(""))  
  string[meio + cont3]=" "
  string[meio - cont3]=" "
}