let contadorClientes = 1;

document.getElementById("clienteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const rut = document.getElementById("rut").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;

  // Validación básica de RUT/NIT (ejemplo simple)
  if (!/^[0-9]{6,10}$/.test(rut)) {
    alert("El RUT/NIT debe ser numérico y tener entre 6 y 10 dígitos.");
    return;
  }

  // Insertar fila en tabla
  const tabla = document.getElementById("clientesTable");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${contadorClientes++}</td>
    <td>${nombre}</td>
    <td>${rut}</td>
    <td>${correo}</td>
    <td>${telefono}</td>
  `;
  tabla.appendChild(fila);

  // Reset formulario
  document.getElementById("clienteForm").reset();
});
