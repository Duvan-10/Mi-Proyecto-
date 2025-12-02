let contadorProductos = 1;

document.getElementById("productoForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const sku = document.getElementById("sku").value;
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const impuesto = parseFloat(document.getElementById("impuesto").value);
  const stock = parseInt(document.getElementById("stock").value);

  // Validación básica de SKU
  if (!/^[A-Za-z0-9\-]+$/.test(sku)) {
    alert("El SKU debe ser alfanumérico (puede incluir guiones).");
    return;
  }

  // Insertar fila en tabla
  const tabla = document.getElementById("productosTable");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${contadorProductos++}</td>
    <td>${sku}</td>
    <td>${nombre}</td>
    <td>$${precio.toFixed(2)}</td>
    <td>${impuesto}%</td>
    <td>${stock}</td>
  `;
  tabla.appendChild(fila);

  // Reset formulario
  document.getElementById("productoForm").reset();
});
