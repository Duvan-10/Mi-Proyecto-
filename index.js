// Ejemplo de comportamiento interactivo
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function() {
    mostrarMensaje("info", `Navegando a ${this.textContent}...`);
  });
});

// Reutilizamos la función global de mensajes (puedes copiarla de ui.js)
function mostrarMensaje(tipo, texto) {
  const mensaje = document.createElement("div");
  mensaje.textContent = texto;
  mensaje.style.position = "fixed";
  mensaje.style.bottom = "20px";
  mensaje.style.right = "20px";
  mensaje.style.padding = "10px 20px";
  mensaje.style.borderRadius = "5px";
  mensaje.style.color = "#fff";
  mensaje.style.zIndex = "1000";
  mensaje.style.backgroundColor = tipo === "info" ? "#2c2c2c" : "#00c853";

  document.body.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 2000);

  document.getElementById("logout").addEventListener("click", function() {
  localStorage.removeItem("usuario"); // limpiar sesión
  window.location.href = "login.html"; // volver al login
});

}
