document.getElementById('card-btn').addEventListener('click', () => {
    const random = (max) => Math.floor((max) * Math.random());
    const cards = [ 'cartas/cinco-de-ouros.png', 'cartas/nove-de-espadas.png', 'cartas/quatro-de-paus.png', 'cartas/seis-de-copas.png', 'cartas/sete-de-espadas.png', 'cartas/sete-de-paus.png', 'cartas/tres-de-ouros.png' ];
    const classes = [ 'zoom', 'rotate', 'square-rotating' ];
    let newCard = document.createElement('img');
    newCard.src = cards[random(cards.length)];
    newCard.classList.add(classes[random(classes.length)]);
    let newDiv = document.createElement('div');
    document.getElementById('cards').appendChild(newDiv);
    newDiv.appendChild(newCard);
})