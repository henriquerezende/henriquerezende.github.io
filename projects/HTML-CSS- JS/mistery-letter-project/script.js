window.onload = () => {
  const classes = [['newspaper', 'magazine1', 'magazine2'], ['medium', 'big', 'reallybig'], ['rotateleft', 'rotateright'], ['skewleft', 'skewright']];

  document.getElementById('criar-carta').addEventListener('click', () => {
    const randomNumber = (max) => Math.trunc(max * Math.random());
    const randomClass = () => `${classes[0][randomNumber(3)]} ${classes[1][randomNumber(3)]} ${classes[2][randomNumber(2)]} ${classes[3][randomNumber(2)]}`;
    document.getElementById('carta-gerada').innerHTML = '';
    const palavras = document.getElementById('carta-texto').value.split(' ');
    document.getElementById('carta-contador').textContent = palavras.length;
    palavras.forEach((element) => {
      const span = document.createElement('span');
      span.textContent = element;
      span.classList = randomClass();
      span.addEventListener('click', (event) => { event.target.classList = randomClass(); });
      document.getElementById('carta-gerada').appendChild(span);
    });
  });
};
