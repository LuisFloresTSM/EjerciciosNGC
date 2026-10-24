// 1. Atrapamos el pergamino (usando getElementById)
const pergamino = document.getElementById("pergamino");

// 2. Atrapamos los botones
const btnMagia = document.getElementById("btn-magia");
const btnBorrar = document.getElementById("btn-borrar");

// 3. Evento del botón mágico
btnMagia.addEventListener("click", function() {
    
    // Aquí usamos .textContent para cambiar el texto
    pergamino.textContent = "¡Abracadabra! El dragón ha despertado.";
    
    // (Toque extra visual): Cambiamos el color del texto a rojo
    pergamino.style.color = "#cc0000";
    pergamino.style.borderColor = "#cc0000";
});

// 4. Evento del botón borrar
btnBorrar.addEventListener("click", function() {
    
    // Vaciamos el texto (dos comillas sin espacio significa vacío)
    pergamino.textContent = "";
    
    // Regresamos los colores a la normalidad
    pergamino.style.color = "#333";
    pergamino.style.borderColor = "#8b5a2b";
});