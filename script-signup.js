document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateInputs()) {
    // Pega os valores do formulário
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Salva no localStorage
    localStorage.setItem('username', email);
    localStorage.setItem('password', password);

    // Redireciona para a página de login
    window.location.href = 'index.html';
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const email = document.getElementById('signup-email');
  const password = document.getElementById('signup-password');
  const password2 = document.getElementById('signup-confirm-password');

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  let isValid = true;

  if (emailValue === '') {
    setError(email, 'Email é necessário');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Entre com um email válido.');
    isValid = false;
  } else {
    setSuccess(email);
  }

  if (passwordValue === '') {
    setError(password, 'Senha é necessária');
    isValid = false;
  } else if (passwordValue.length < 8) {
    setError(password, 'Senha com ao menos 8 caracteres.');
    isValid = false;
  } else {
    setSuccess(password);
  }

  if (password2Value === '') {
    setError(password2, 'Por favor, confirme sua senha.');
    isValid = false;
  } else if (password2Value !== passwordValue) {
    setError(password2, 'Senha diferente.');
    isValid = false;
  } else {
    setSuccess(password2);
  }

  return isValid;
};
