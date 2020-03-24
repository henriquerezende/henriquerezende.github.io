document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
  document.getElementById('user-email-phone').value = '';
  document.getElementById('user-password').value = '';
});

document.getElementById('facebook-register').addEventListener('click', function () {
  let validForm = true;
  const notEmpty = (element) => {
    if (element.value === '') {
      alert(`O campo ${element.placeholder} está vazio!`);
      validForm = false;
    }
  };
  notEmpty(document.getElementById('name'));
  notEmpty(document.getElementById('last-name'));
  notEmpty(document.getElementById('phone-email'));
  notEmpty(document.getElementById('new-password'));
  notEmpty(document.getElementById('datepicker'));
  if (document.querySelector('input[name="genre"]:checked') === null) {
    alert('Voce não preencheu seu gênero!');
    validForm = false;
  }
  if (!document.getElementById('datepicker').value.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)) {
    alert('A data de nascimento fornecida não é válida');
    validForm = false;
  }
  if (validForm) {
    alert(`Nome: ${document.getElementById('name').value} ${document.getElementById('last-name').value}
    \nCelular ou E-mail: ${document.getElementById('phone-email').value}
    \nData de nascimento: ${document.getElementById('datepicker').value}
    \nGênero: ${document.querySelector('input[name="genre"]:checked').value}`);
  }
});
