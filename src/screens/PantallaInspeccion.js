document.getElementById("inspectionForm").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Formulario enviado correctamente.");
});

document.querySelector(".cancelar").addEventListener("click", () => {
  if (confirm("¿Deseas cancelar la inspección?")) {
    document.getElementById("inspectionForm").reset();
  }
});
