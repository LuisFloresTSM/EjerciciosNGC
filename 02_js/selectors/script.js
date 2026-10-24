// 1. Atrapamos el botón con el que vamos a interactuar (usando el ID)
const btnApagar = document.getElementById("btn-apagar");

// 2. Atrapamos TODOS los focos (usando querySelectorAll por su clase)
const todosLosFocos = document.querySelectorAll(".foco");

// 3. El botón escucha el clic
btnApagar.addEventListener("click", function() {
    
    // 4. Recorremos la lista de focos con forEach
    todosLosFocos.forEach(function(foco) {
        // A cada foco de la lista, le cambiamos el color a gris oscuro
        foco.style.backgroundColor = "#333";
        foco.style.boxShadow = "none";
    });

    // Opcional: un mensaje en la consola
    console.log("Se apagaron " + todosLosFocos.length + " focos");
});