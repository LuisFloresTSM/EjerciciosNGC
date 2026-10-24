// 1. Atrapamos la pantalla y los botones
const pantallaCodigo = document.getElementById("codigo-acumulado");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

// 2. LA MEMORIA (Variable de estado)
// Empieza vacía para que podamos concatenar
let codigoSecreto = "";

// 3. La función que concatena y actualiza la pantalla
function agregarDigito(digito) {
  // Si el código ya tiene 3 números, no dejamos que escriban más
  if (codigoSecreto.length >= 3) {
    return; 
  }
  
  // Concatenamos: Lo que ya había + el nuevo número
  codigoSecreto = codigoSecreto + digito;
  
  // Lo mostramos en pantalla
  pantallaCodigo.textContent = codigoSecreto;
  
  // (Toque visual extra): Si llega a 3 dígitos, mostramos mensaje
  if (codigoSecreto.length === 3) {
    setTimeout(function() {
      pantallaCodigo.textContent = "ABIERTA";
      pantallaCodigo.style.color = "#ffcc00";
    }, 500); // Espera medio segundo antes de abrir
  }
}

// 4. Los Eventos llamando a nuestra función
btn1.addEventListener("click", function() {
  agregarDigito("1");
});

btn2.addEventListener("click", function() {
  agregarDigito("2");
});

btn3.addEventListener("click", function() {
  agregarDigito("3");
});
