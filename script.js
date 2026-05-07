// Mensaje de consola para verificar que funciona
console.log("Sitio de Iglesia Fuente de Vida cargado correctamente");

// Ejemplo de una función simple para los botones de registro
const botonesRegistro = document.querySelectorAll('.btn-naranja');

botonesRegistro.forEach(boton => {
    boton.addEventListener('click', () => {
        alert("¡Gracias por tu interés! Pronto abriremos el formulario de registro.");
    });
});

let currentSlide = 0;

function moveSlide(direction) {
    const slide = document.querySelector('.carousel-slide');
    const totalSlides = document.querySelectorAll('.foto-item').length;
    
    currentSlide += direction;

    // Si llegamos al final, vuelve al inicio
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    // Si estamos al inicio y damos atrás, ve al final
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const offset = -currentSlide * 100;
    slide.style.transform = `translateX(${offset}%)`;
}