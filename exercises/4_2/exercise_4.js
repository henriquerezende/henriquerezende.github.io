
n = 5;
let string = [];

for (let cont = 0; cont < n; cont++) {
  string[cont] = " ";
}

let meio1 = Math.round(n/2)
let meio2 = meio1
for (let cont3 = 0; cont3 < n; cont3+=2){
  string[meio1]="*"
  string[meio2]="*"
  meio1++
  meio2--
  let arrayToString = string.join("");
  console.log(arrayToString)
}