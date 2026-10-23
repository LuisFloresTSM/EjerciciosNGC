// ========================================================
// EJEMPLO EVENT LISTENER: PANEL DE NAVE ESPACIAL
// ========================================================

// 1. Atrapamos el monitor y los 3 botones por su ID
let monitor = document.getElementById("monitor");
let btnEscudos = document.getElementById("btnEscudos");
let btnMotores = document.getElementById("btnMotores");
let btnLaseres = document.getElementById("btnLaseres");

// Texto inicial en el monitor
monitor.textContent = "> SISTEMA LISTO EN ESPERA DE ORDENES...";

// 2. Evento para el boton ESCUDOS
btnEscudos.addEventListener("click", function() {
  let reporte = "¡ESCUDOS ACTIVADOS AL 100%!";
  
  // Cambiamos el texto del monitor con .textContent
  monitor.textContent = "> " + reporte;
  
  // Cambiamos el color del texto con .style.color
  monitor.style.color = "#00f0ff";
  
  // Enviamos mensaje interactivo a la consola
  console.log("Comando ejecutado: " + reporte);
});

// 3. Evento para el boton MOTORES
btnMotores.addEventListener("click", function() {
  let reporte = "¡MOTORES DE HIPERESPACIO ACTIVADOS!";
  
  // Cambiamos el texto del monitor con .textContent
  monitor.textContent = "> " + reporte;
  
  // Cambiamos el color del texto con .style.color
  monitor.style.color = "#00ff66";
  
  // Enviamos mensaje interactivo a la consola
  console.log("Comando ejecutado: " + reporte);
});

// 4. Evento para el boton LASERES
btnLaseres.addEventListener("click", function() {
  let reporte = "¡LASERES DE PLASMA CARGADOS Y LISTOS!";
  
  // Cambiamos el texto del monitor con .textContent
  monitor.textContent = "> " + reporte;
  
  // Cambiamos el color del texto con .style.color
  monitor.style.color = "#ff0055";
  
  // Enviamos mensaje interactivo a la consola
  console.log("Comando ejecutado: " + reporte);
});
