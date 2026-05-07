// Mensaje de consola para verificar que funciona
console.log("Sitio de Iglesia Fuente de Vida cargado correctamente");

// Ejemplo de una función simple para los botones de registro
const botonesRegistro = document.querySelectorAll('.btn-naranja');

botonesRegistro.forEach(boton => {
    boton.addEventListener('click', () => {
        alert("¡Gracias por tu interés! Pronto abriremos el formulario de registro.");
    });
});