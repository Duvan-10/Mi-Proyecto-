// app.js
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const statusEl = document.querySelector('.status');
const toggleBtn = document.getElementById('togglePassword');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
  toggleBtn.textContent = isPassword ? 'Ocultar' : 'Mostrar';
  passwordInput.focus();
});

function showError(input, message) {
  const errorEl = document.querySelector(`.error[data-error-for="${input.id}"]`);
  if (errorEl) errorEl.textContent = message || '';
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  statusEl.textContent = '';

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  let valid = true;

  if (!email) {
    showError(emailInput, 'El correo es obligatorio.');
    valid = false;
  } else if (!validateEmail(email)) {
    showError(emailInput, 'Ingresa un correo válido.');
    valid = false;
  } else {
    showError(emailInput, '');
  }

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

  // Simulación de solicitud de login (reemplaza con tu API)
  const remember = document.getElementById('remember').checked;

  // Ejemplo de cuerpo para tu backend
  const payload = { email, password, remember };

  try {
    // Reemplaza URL con tu endpoint real
    // const res = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(payload),
    // });
    // const data = await res.json();

    // Simulado:
    await new Promise(r => setTimeout(r, 800));
    const ok = email === 'user@empresa.com' && password === '12345678';

    if (ok) {
      statusEl.textContent = 'Inicio de sesión correcto. Redirigiendo...';
      // window.location.href = '/dashboard';
    } else {
      statusEl.textContent = 'Credenciales inválidas. Verifica tu correo y contraseña.';
    }
  } catch (err) {
    statusEl.textContent = 'Error de conexión. Inténtalo de nuevo.';
  }
});


