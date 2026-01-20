// script.js
// ------------------------------------------------------
// Archivo principal de JavaScript para la actividad DOM.
// Cada sección resuelve uno de los 4 ejercicios de la guía.
// El código está comentado en español para tus alumnos.
// ------------------------------------------------------

// Esperar a que el DOM esté listo antes de buscar elementos
document.addEventListener("DOMContentLoaded", () => {
  // 1) REPETIR PALABRA ---------------------------------

  const inputPalabra = document.getElementById("palabra");
  const inputVeces = document.getElementById("veces");
  const btnRepetir = document.getElementById("btnRepetir");
  const resultadoRepetir = document.getElementById("resultadoRepetir");

  // Al hacer clic en "REPETIR"
  btnRepetir.addEventListener("click", () => {
    const palabra = inputPalabra.value.trim(); // quitamos espacios extra
    const veces = parseInt(inputVeces.value, 10);

    // Validaciones básicas
    if (!palabra) {
      alert("Por favor ingrese una palabra.");
      return;
    }

    if (isNaN(veces) || veces <= 0) {
      alert("Ingrese un número de veces mayor que 0.");
      return;
    }

    // Repetimos la palabra separada por espacios
    const resultado = Array(veces).fill(palabra).join(" ");
    resultadoRepetir.textContent = resultado;
  });

  // 2) APLICAR COLOR DE FONDO ---------------------------

  const inputColorFondo = document.getElementById("colorFondo");
  const btnAplicarColor = document.getElementById("btnAplicarColor");
  const parrafoColor = document.getElementById("parrafoColor");

  // Al hacer clic en "APLICAR"
  btnAplicarColor.addEventListener("click", () => {
    const colorSeleccionado = inputColorFondo.value;

    // Validación mínima: asegurarse de que existe un valor
    if (!colorSeleccionado) {
      alert("Seleccione un color para aplicar.");
      return;
    }

    // Cambiamos el color de fondo del párrafo
    parrafoColor.style.backgroundColor = colorSeleccionado;
  });

  // 3) OPERACIONES CON DOS NÚMEROS ----------------------

  const inputNum1 = document.getElementById("num1");
  const inputNum2 = document.getElementById("num2");
  const btnCalcular = document.getElementById("btnCalcular");
  const resultadoCalculos = document.getElementById("resultadoCalculos");

  btnCalcular.addEventListener("click", () => {
    // parseFloat para permitir decimales
    const num1 = parseFloat(inputNum1.value);
    const num2 = parseFloat(inputNum2.value);

    // Validaciones de entrada
    if (isNaN(num1) || isNaN(num2)) {
      alert("Debe ingresar ambos números para calcular.");
      return;
    }

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero";

    // Generamos el texto de resultados
    let html = "";
    html += `${num1} + ${num2} = ${suma}<br>`;
    html += `${num1} - ${num2} = ${resta}<br>`;
    html += `${num1} * ${num2} = ${multiplicacion}<br>`;
    html += `${num1} / ${num2} = ${division}<br>`;
    html += `<br>La suma de los resultados es ${
      typeof division === "number"
        ? suma + resta + multiplicacion + division
        : suma + resta + multiplicacion
    }`;

    // Insertamos usando innerHTML porque necesitamos saltos de línea
    resultadoCalculos.innerHTML = html;
  });

  // 4) INVERTIR TEXTO -----------------------------------

  const inputTextoOriginal = document.getElementById("textoOriginal");
  const btnInvertir = document.getElementById("btnInvertir");
  const textoInvertido = document.getElementById("textoInvertido");

  btnInvertir.addEventListener("click", () => {
    const texto = inputTextoOriginal.value;

    if (!texto) {
      alert("Ingrese un texto para invertir.");
      return;
    }

    // Convertimos el string a arreglo, lo invertimos y volvemos a unir
    const invertido = texto.split("").reverse().join("");
    textoInvertido.textContent = invertido;
  });
});
