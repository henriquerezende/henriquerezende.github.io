
// Faz com que cor Preta seja a escolhida ao carregar a página
sessionStorage.setItem('SelectedColor', 'black');

// Cria números de 0 a 255
const random255 = () => 0 + Math.floor((255 - 0) * Math.random());

// Cria cores aleatórias
const randomColor = () => `rgb(${random255()} ,${random255()} ,${random255()})`;

// Coloca cores aleatórias na paleta
document.querySelectorAll('.color')[0].style.backgroundColor = 'black';
for (let cont = 1; cont < document.querySelectorAll('.color').length; cont += 1) {
  document.querySelectorAll('.color')[cont].style.backgroundColor = randomColor();
}

// Faz com que a cor selecionada pelo usuário seja definida para colorir
document.querySelectorAll('.color').forEach((element) => element.addEventListener('click', (event) => {
  document.getElementsByClassName('selected')[0].classList.remove('selected');
  sessionStorage.setItem('SelectedColor', event.target.style.backgroundColor);
  element.classList.add('selected');
}));

// Função que adiciona um listener para cada elemento com classe pixel que colore o pixel clicado
const addListenerColor = () => document.querySelectorAll('.pixel').forEach((element) => element.addEventListener('click', function (event) { event.srcElement.style.backgroundColor = sessionStorage.getItem('SelectedColor'); }));

// Adiciona listener que colore de branco todos os pixels da página
document.getElementById('clear-board').addEventListener('click', () => document.querySelectorAll('.pixel').forEach(function (element) { element.style.backgroundColor = 'White'; }));

// Função para criar quadro de pixels de tamanho N por N
const createTable = (size) => {
  document.querySelector('#pixel-board').remove();
  const board = document.createElement('table');
  board.id = 'pixel-board';
  document.getElementById('board-div').appendChild(board);
  for (let c = 0; c < size; c += 1) {
    const line = document.createElement('tr');
    document.getElementById('pixel-board').appendChild(line);
    for (let d = 0; d < size; d += 1) {
      const pixel = document.createElement('td');
      pixel.className = 'pixel';
      document.getElementsByTagName('tr')[c].appendChild(pixel);
    }
  }
};

// Adiciona listener para usuário definir numero de pixels no quadro
document.getElementById('generate-board').addEventListener('click', () => {
  let size = document.getElementById('board-size').value;
  if (size < 5) {
    size = 5;
  }
  if (size > 50) {
    size = 50;
  }
  createTable(size);
  addListenerColor();
});

// Cria tabela 5x5 inicial
createTable(5);

// Adiciona o listener ao inicializar a página
addListenerColor();
