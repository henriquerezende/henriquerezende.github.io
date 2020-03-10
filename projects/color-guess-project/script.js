// Cria número de 0 a max
const randomNumber = (max) => 0 + Math.floor((max - 0) * Math.random());

// Cria cores aleatórias
const randomColor = () => `(${randomNumber(255)} ,${randomNumber(255)} ,${randomNumber(255)})`;

const answer = randomNumber(6);
let firstScore = 0;

document.querySelectorAll('.ball').forEach((e) => {
  const randomClr = randomColor();
  e.style.backgroundColor = `rgb${randomClr}`;
  if (e === document.querySelectorAll('.ball')[answer]) {
    document.getElementById('rgb-color').textContent = randomClr;
  }
  e.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === document.querySelectorAll('.ball')[answer].style.backgroundColor) {
      document.getElementById('answer').textContent = 'Acertou!';
      if (localStorage.getItem('Score')) {
        if (firstScore === 0) {
          let score = parseInt(localStorage.getItem('Score'), 10);
          score += 3;
          localStorage.setItem('Score', score);
          firstScore = 1;
        }
      } else {
        localStorage.setItem('Score', 3);
      }
      document.getElementById('score').textContent = localStorage.getItem('Score');
    } else {
      document.getElementById('answer').textContent = 'Errou! Tente novamente!';
    }
  });
});

document.getElementById('reset-game').addEventListener('click', function () { window.location.reload(); });

if (localStorage.getItem('Score')) {
  document.getElementById('score').textContent = localStorage.getItem('Score');
}
