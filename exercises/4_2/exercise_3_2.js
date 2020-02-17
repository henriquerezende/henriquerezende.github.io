n = 5;
let string = [];

for (let cont = 0; cont < n; cont++) {
  string[cont] = " ";
}

for (let cont3 = n-1; cont3 >= 0; cont3--){
  string[cont3]="*"
  let arrayToString = string.join("");
  console.log(arrayToString)
}