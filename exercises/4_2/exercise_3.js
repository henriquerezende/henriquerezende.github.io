n = 5
let asterisco = ""
let vazio = ""

for(let cont = 0; cont < n; cont++){
    asterisco += "*"
    vazio += " "
}

for(let cont = n-1; cont >=0; cont--){
    console.log((vazio.substring(0, cont)).concat(asterisco.substring(cont, 5)))
}