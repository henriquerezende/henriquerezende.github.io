
n = 9;
let string = [];

for (let cont = 0; cont < n; cont++) {
  string[cont] = " ";
}

for (let cont3 = 0; cont3 < n/2; cont3++){
  string[Math.round(n/2) + cont3]="*"
  string[Math.round(n/2) - cont3]="*"
  console.log(string.join(""))
}