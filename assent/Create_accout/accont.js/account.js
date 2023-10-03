// Capturando elementos do DOM.
const formulary = document.querySelector('.form');
const buttonC = document.querySelector('.buttonC');
const buttonV = document.querySelector('.buttonV');

// Adicionar um ouvinte de evento para o formulário
formulary.addEventListener('submit', function (event) {
  event.preventDefault();

  const login = document.querySelector('.login').value;
  const password = document.querySelector('.password').value;

  getData(login, password);
});

// Adicionar um ouvinte de evento para o botão de criação de conta
buttonC.addEventListener('click', function () {
  saveAccount();
});

// Função para obter dados.
function getData(login, password) {
  const data = [login, password];
}

// Função para salvar conta no localStorage
function saveAccount() {
  const login = document.querySelector('.login').value;
  const password = document.querySelector('.password').value;

  // Recuperar os dados existentes do localStorage ou inicializar uma nova lista
  const existingData = localStorage.getItem('addData');
  const dataList = existingData ? JSON.parse(existingData) : [];

  // Adicionar os novos dados à lista
  dataList.push([login, password]);

  // Salvar a lista atualizada no localStorage
  localStorage.setItem('addData', JSON.stringify(dataList));

  // Limpar os campos de login e senha após salvar
  document.querySelector('.login').value = '';
  document.querySelector('.password').value = '';
}