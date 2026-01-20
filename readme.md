# Actividad de aprendizaje: DOM

Este proyecto contiene 4 ejercicios para practicar **manipulación del DOM** y **manejo de eventos** con JavaScript.

Cada ejercicio está pensado para reforzar:

- Selección de elementos (`getElementById`)
- Lectura de valores desde inputs
- Modificación del contenido y estilos
- Uso de eventos (`click`, `DOMContentLoaded`)
- Validación básica de datos

---

## Archivos

- `index.html`: Estructura de la página y los formularios de cada ejercicio.
- `styles.css`: Estilos básicos para que la actividad se vea clara y ordenada.
- `script.js`: Lógica de JavaScript que resuelve los 4 ejercicios.
- `README.md`: Explicación para el profesor y los estudiantes.

---

## Ejercicio 1: Repetir palabra

**Objetivo:** Leer una palabra y un número, y mostrar la palabra repetida esa cantidad de veces.

1. Se obtiene la palabra del input `#palabra`.
2. Se obtiene la cantidad de repeticiones del input `#veces`.
3. Se valida que haya palabra y que el número sea mayor a 0.
4. Se crea un arreglo con `Array(veces).fill(palabra)` y se une con espacios.
5. El resultado se muestra en el párrafo `#resultadoRepetir` usando `textContent`.

Puntos clave:

- Uso de `addEventListener("click", ...)`.
- Validación con `trim()` e `isNaN`.

---

## Ejercicio 2: Aplicar color

**Objetivo:** Cambiar el color de fondo de un párrafo usando un `input type="color"`.

1. El usuario elige un color en `#colorFondo`.
2. Al hacer clic en `#btnAplicarColor`, se toma el valor del input.
3. Se aplica al estilo del párrafo `#parrafoColor` con:
   ```js
   parrafoColor.style.backgroundColor = colorSeleccionado;
