// ========================================================
// EJEMPLO CSS GRID: INTERACTIVIDAD DE CARTAS MAGICAS
// ========================================================

// 1. Atrapamos cada una de las 6 cartas por su ID unico
let carta1 = document.getElementById("carta1");
let carta2 = document.getElementById("carta2");
let carta3 = document.getElementById("carta3");
let carta4 = document.getElementById("carta4");
let carta5 = document.getElementById("carta5");
let carta6 = document.getElementById("carta6");

let infoCarta = document.getElementById("infoCarta");

// 2. Eventos individuales para cada carta
carta1.addEventListener("click", function() {
  let nombre = "Carta de Fuego";
  infoCarta.textContent = "Seleccionaste: " + nombre + " (Poder 95)";
  infoCarta.style.color = "#ff0055";
  console.log("Elegiste: " + nombre);
});

carta2.addEventListener("click", function() {
  let nombre = "Carta de Hielo";
  infoCarta.textContent = "Seleccionaste: " + nombre + " (Poder 88)";
  infoCarta.style.color = "#00f0ff";
  console.log("Elegiste: " + nombre);
});

carta3.addEventListener("click", function() {
  let nombre = "Carta de Rayo";
  infoCarta.textContent = "Seleccionaste: " + nombre + " (Poder 99)";
  infoCarta.style.color = "#ffcc00";
  console.log("Elegiste: " + nombre);
});

carta4.addEventListener("click", function() {
  let nombre = "Carta de Veneno";
  infoCarta.textContent = "Seleccionaste: " + nombre + " (Poder 75)";
  infoCarta.style.color = "#00ff66";
  console.log("Elegiste: " + nombre);
});

carta5.addEventListener("click", function() {
  let nombre = "Carta de Luz";
  infoCarta.textContent = "Seleccionaste: " + nombre + " (Poder 90)";
  infoCarta.style.color = "#ff8800";
  console.log("Elegiste: " + nombre);
});

carta6.addEventListener("click", function() {
  let nombre = "Carta de Sombra";
  infoCarta.textContent = "Seleccionaste: " + nombre + " (Poder 96)";
  infoCarta.style.color = "#bf5af2";
  console.log("Elegiste: " + nombre);
});
