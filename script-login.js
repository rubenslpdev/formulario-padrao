// Preenche automaticamente os campos de login com os valores salvos no localStorage
document.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    document.getElementById('login-email').value = savedUsername;
    document.getElementById('login-password').value = savedPassword;
  }
});

// Seleciona elementos do DOM
const form = document.getElementById('login-form');
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const alertSuccess = document.querySelector('.alert-success');

// Função para exibir mensagem de erro
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

// Função para exibir mensagem de sucesso
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

// Valida os campos e exibe mensagem de sucesso ou erro
const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  let isEmailValid = true;
  let isPasswordValid = true;

  // Validação do e-mail
  if (emailValue === '') {
    setError(email, 'Email é obrigatório');
    isEmailValid = false;
  } else if (emailValue !== savedUsername) {
    setError(email, 'Email não encontrado');
    isEmailValid = false;
  } else {
    setSuccess(email);
  }

  // Validação da senha (somente se o e-mail for válido)
  if (isEmailValid) {
    if (passwordValue === '') {
      setError(password, 'Senha é obrigatória');
      isPasswordValid = false;
    } else if (passwordValue !== savedPassword) {
      setError(password, 'Senha incorreta');
      isPasswordValid = false;
    } else {
      setSuccess(password);
    }
  } else {
    // Limpa o estado da senha se o e-mail for inválido
    password.parentElement.classList.remove('success', 'error');
    password.parentElement.querySelector('.error').innerText = '';
    isPasswordValid = false; // Não tenta validar a senha
  }

  // Exibe o alerta de sucesso se ambas as validações forem verdadeiras
  if (isEmailValid && isPasswordValid) {
    const progressBar = alertSuccess.querySelector('.progress-bar');

    // Exibe o alerta
    alertSuccess.style.display = 'block';

    // Anima a barra de progresso
    setTimeout(() => {
      progressBar.style.width = '100%'; // Preenche a barra ao longo de 3s
    }, 0);

    // Oculta o alerta após 3 segundos
    setTimeout(() => {
      alertSuccess.style.display = 'none';
      progressBar.style.width = '0'; // Reseta a barra para uso futuro
    }, 3000);
  }
};

// Adiciona evento de submissão ao formulário
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
