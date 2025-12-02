// app.js
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const statusEl = document.querySelector('.status');
const toggleBtn = document.getElementById('togglePassword');

// Mostrar/ocultar contraseña
toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
  toggleBtn.textContent = isPassword ? 'Ocultar' : 'Mostrar';
  passwordInput.focus();
});

// Mostrar errores
function showError(input, message) {
  const errorEl = document.querySelector(`.error[data-error-for="${input.id}"]`);
  if (errorEl) errorEl.textContent = message || '';
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

// Validar email
function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Usuario simulado (para pruebas)
const usuarioPrueba = {
  email: "duvan.10dma@gmail.com",
  password: "12345678" // mínimo 8 caracteres para pasar la validación
};

// Evento submit del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();
  statusEl.textContent = '';

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let valid = true;

  // Validación de correo
  if (!email) {
    showError(emailInput, 'El correo es obligatorio.');
    valid = false;
  } else if (!validateEmail(email)) {
    showError(emailInput, 'Ingresa un correo válido.');
    valid = false;
  } else {
    showError(emailInput, '');
  }

  // Validación de contraseña
  if (!password) {
    showError(passwordInput, 'La contraseña es obligatoria.');
    valid = false;
  } else if (password.length < 8) {
    showError(passwordInput, 'La contraseña debe tener al menos 8 caracteres.');
    valid = false;
  } else {
    showError(passwordInput, '');
  }

  if (!valid) return;

  // Validación contra usuario simulado
  if (email === usuarioPrueba.email && password === usuarioPrueba.password) {
    localStorage.setItem("usuario", email); // guardar sesión
    statusEl.textContent = "Inicio de sesión correcto. Redirigiendo...";
    setTimeout(() => {
      window.location.href = "index.html"; // o dashboard.html
    }, 1000);
  } else {
    statusEl.textContent = "Credenciales inválidas. Intenta de nuevo.";
  }
});
