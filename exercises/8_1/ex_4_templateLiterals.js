const changeX = (string) => `Tryber ${string} aqui!\nTudo bem?`;
const array = ['\n-Javascript', '\n-Html', '\n-CSS', '\n-Shell Script', '\n-Github'];
const concSkills = (string) => `${string}\n\nMinhas cinco principais habilidades são:\n${array.sort()}\n\n#goTrybe`;

console.log(concSkills(changeX('Henrique')));