let contadorImpuestos = 1;

document.getElementById("impuestoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombreImpuesto").value;
  const porcentaje = parseFloat(document.getElementById("porcentaje").value);

  // Validación básica
  if (porcentaje < 0 || porcentaje > 100) {
    alert("El porcentaje debe estar entre 0 y 100.");
    return;
  }

  // Insertar fila en tabla
  const tabla = document.getElementById("impuestosTable");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${contadorImpuestos++}</td>
    <td>${nombre}</td>
    <td>${porcentaje}%</td>
  `;
  tabla.appendChild(fila);

  // Reset formulario
  document.getElementById("impuestoForm").reset();
});
