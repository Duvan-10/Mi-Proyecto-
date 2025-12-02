let contadorReportes = 1;

// Simulación de datos
const datosSimulados = [
  { cliente: "Juan Pérez", producto: "Laptop", fecha: "2025-12-01", total: 1200 },
  { cliente: "María Gómez", producto: "Impresora", fecha: "2025-12-01", total: 300 },
  { cliente: "Carlos Ruiz", producto: "Mouse", fecha: "2025-11-30", total: 25 }
];

document.getElementById("filterForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const inicio = document.getElementById("fechaInicio").value;
  const fin = document.getElementById("fechaFin").value;

  const tabla = document.getElementById("reportesTable");
  tabla.innerHTML = ""; // limpiar resultados

  datosSimulados.forEach(dato => {
    if (dato.fecha >= inicio && dato.fecha <= fin) {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${contadorReportes++}</td>
        <td>${dato.cliente}</td>
        <td>${dato.producto}</td>
        <td>${dato.fecha}</td>
        <td>$${dato.total.toFixed(2)}</td>
      `;
      tabla.appendChild(fila);
    }
  });
});

// Exportar a CSV
function exportarCSV() {
  let csv = "Cliente,Producto,Fecha,Total\n";
  const filas = document.querySelectorAll("#reportesTable tr");
  filas.forEach(fila => {
    const celdas = fila.querySelectorAll("td");
    const datos = Array.from(celdas).map(celda => celda.textContent).slice(1); // omitir #
    csv += datos.join(",") + "\n";
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "reportes.csv";
  a.click();
}
