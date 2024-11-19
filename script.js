//Mostrar e esconder senha

pwShowHide = document.querySelectorAll('.pw_hide');

pwShowHide.forEach((icon) => {
  icon.addEventListener('click', () => {
    let getPwInput = icon.parentElement.querySelector('input');
    if (getPwInput.type === 'password') {
      getPwInput.type = 'text';
      icon.classList.replace('uil-eye-slash', 'uil-eye');
    } else {
      getPwInput.type = 'password';
      icon.classList.replace('uil-eye', 'uil-eye-slash');
    }
  });
});

// Floating Placeholder

// Função para verificar o estado do input e atualizar o label
function updateFloatingLabels() {
  document.querySelectorAll('.input_box input').forEach((input) => {
    const label = input.nextElementSibling;

    // Adiciona a classe 'active' se o input tiver valor
    if (input.value.trim() !== '') {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }

    // Adiciona eventos de foco e blur para comportamento dinâmico
    input.addEventListener('focus', () => label.classList.add('active'));
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        label.classList.remove('active');
      }
    });
  });
}

// Chama a função no carregamento da página
document.addEventListener('DOMContentLoaded', updateFloatingLabels);
