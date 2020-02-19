let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim"
};

console.log("Bem vinda, ", info.personagem);

for (chave in info) {
  console.log(chave);
}

for (valor in info) {
  console.log(info[valor]);
}

let info2 = {
  personagem: "Margarida e Tio Patinhas",
  origem:
    "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota:
    "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
  recorrente: "Ambos recorrentes"
};

for (valor in info2) {
    console.log(info2[valor]);
  }