const addListeners = (li) => {
  li.addEventListener('dblclick', function () {
    if (li.classList.contains('completed')) {
      li.classList.remove('completed');
    } else {
      li.classList.add('completed');
    }
  });
  li.addEventListener('click', (element) => {
    if (document.getElementsByClassName('selected')[0] != null) { document.getElementsByClassName('selected')[0].classList.remove('selected'); }
    element.toElement.classList.add('selected');
  });
  li.style.cursor = 'pointer';
};

document.getElementById('criar-tarefa').addEventListener('click', () => {
  if (document.getElementById('texto-tarefa').value) {
    const li = document.createElement('li');
    li.textContent = document.getElementById('texto-tarefa').value;
    addListeners(li);
    document.getElementById('lista-tarefas').appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  }
});

document.getElementById('apaga-tudo').addEventListener('click', () => {
  document.querySelectorAll('li').forEach(function (e) { e.remove(); });
});

document.getElementById('remover-finalizados').addEventListener('click', () => {
  document.querySelectorAll('li').forEach(function (e) { if (e.classList.contains('completed')) { e.remove(); } });
});

document.getElementById('salvar-tarefas').addEventListener('click', () => {
  localStorage.setItem('Lista de Tarefas', document.getElementById('lista-tarefas').innerHTML);
});

if (window.localStorage.getItem('Lista de Tarefas')) {
  document.getElementById('lista-tarefas').innerHTML = window.localStorage.getItem('Lista de Tarefas');
  document.querySelectorAll('li').forEach(function (li) { addListeners(li); });
}

document.getElementById('mover-cima').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (selected.previousElementSibling) {
      selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    }
  }
});

document.getElementById('mover-baixo').addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    if (selected.nextElementSibling) {
      selected.parentNode.insertBefore(selected.nextElementSibling, selected);
    }
  }
});

document.getElementById('remover-selecionado').addEventListener('click', () => {
  if (document.querySelector('.selected')) {
    document.querySelector('.selected').remove();
  }
});
