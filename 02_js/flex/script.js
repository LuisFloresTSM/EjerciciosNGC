// ========================================================
// EJEMPLO FLEXBOX: INTERACTIVIDAD DE LA CONSOLA DJ
// ========================================================

// 1. Atrapamos los botones y elementos usando SOLO getElementById()
let botonPlay = document.getElementById("btnPlay");
let botonAnterior = document.getElementById("btnAnterior");
let botonSiguiente = document.getElementById("btnSiguiente");
let mensajeEstado = document.getElementById("mensajeEstado");

// 2. Variable simple let para controlar si la musica suena
let estaSonando = "no";

// 3. Evento para el boton PLAY
botonPlay.addEventListener("click", function() {
  if (estaSonando == "no") {
    estaSonando = "si";
    // Cambiamos el texto y el color del boton
    botonPlay.textContent = "PAUSA";
    botonPlay.style.backgroundColor = "#ff007f";
    mensajeEstado.textContent = "Estado de musica: ¡Sonando en vivo!";
    mensajeEstado.style.color = "#00ff66";
    console.log("DJ: Musica iniciada.");
  } else {
    estaSonando = "no";
    // Restauramos el texto y el color del boton
    botonPlay.textContent = "PLAY";
    botonPlay.style.backgroundColor = "#00f3ff";
    mensajeEstado.textContent = "Estado de musica: En pausa";
    mensajeEstado.style.color = "#aaaaaa";
    console.log("DJ: Musica pausada.");
  }
});

// 4. Evento para el boton Anterior
botonAnterior.addEventListener("click", function() {
  let pista = "Pista Anterior";
  console.log("DJ: Cambiaste a la " + pista);
  alert("Cambiando a la " + pista);
});

// 5. Evento para el boton Siguiente
botonSiguiente.addEventListener("click", function() {
  let pista = "Pista Siguiente";
  console.log("DJ: Cambiaste a la " + pista);
  alert("Cambiando a la " + pista);
});
