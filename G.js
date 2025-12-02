let contador = 1;

document.getElementById("facturaForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const cliente = document.getElementById("cliente").value;
  const rut = document.getElementById("rut").value;
  const producto = document.getElementById("producto").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const precio = parseFloat(document.getElementById("precio").value);

  // Cálculo automático
  const total = cantidad * precio;

  // Insertar fila en tabla
  const tabla = document.getElementById("facturasTable");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${contador++}</td>
    <td>${cliente}</td>
    <td>${producto}</td>
    <td>$${total.toFixed(2)}</td>
    <td>Emitida</td>
  `;
  tabla.appendChild(fila);

  // Reset formulario
  document.getElementById("facturaForm").reset();
});
