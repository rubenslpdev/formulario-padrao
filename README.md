## Local storage

Aqui está um exemplo simples de como estruturar as páginas de **login** e **signup** usando HTML, CSS e JavaScript para armazenar os dados do usuário no `localStorage` e preencher o formulário de login automaticamente.

### 1. Página de Signup

**HTML (signup.html):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Signup</title>
  </head>
  <body>
    <h2>Cadastro</h2>
    <form id="signupForm">
      <label for="signupUsername">Usuário:</label>
      <input type="text" id="signupUsername" required />
      <br />
      <label for="signupPassword">Senha:</label>
      <input type="password" id="signupPassword" required />
      <br />
      <button type="submit">Cadastrar</button>
    </form>

    <script>
      document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Pega os valores do formulário
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;

        // Salva no localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Cadastro realizado com sucesso!');
        // Redireciona para a página de login
        window.location.href = 'login.html';
      });
    </script>
  </body>
</html>
```

### 2. Página de Login

**HTML (login.html):**

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login</title>
  </head>
  <body>
    <h2>Login</h2>
    <form id="loginForm">
      <label for="loginUsername">Usuário:</label>
      <input type="text" id="loginUsername" required />
      <br />
      <label for="loginPassword">Senha:</label>
      <input type="password" id="loginPassword" required />
      <br />
      <button type="submit">Entrar</button>
    </form>

    <script>
      // Preenche automaticamente o formulário de login se os dados existirem no localStorage
      document.addEventListener('DOMContentLoaded', function () {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (savedUsername && savedPassword) {
          document.getElementById('loginUsername').value = savedUsername;
          document.getElementById('loginPassword').value = savedPassword;
        }
      });

      document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Pega os valores do formulário de login
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Verifica se os dados correspondem aos salvos no localStorage
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (username === savedUsername && password === savedPassword) {
          alert('Login bem-sucedido!');
        } else {
          alert('Usuário ou senha incorretos.');
        }
      });
    </script>
  </body>
</html>
```

### Explicação do Funcionamento

1. **Página de Signup**: O formulário salva o usuário e senha no `localStorage` ao ser submetido. Em seguida, redireciona para a página de login.

2. **Página de Login**: Ao carregar a página, o JavaScript preenche automaticamente o formulário de login se encontrar dados no `localStorage`. Depois, ao submeter o formulário de login, ele verifica se o usuário e senha batem com os valores no `localStorage`.
