document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los bloques que tengan la clase animar-scroll
    const bloques = document.querySelectorAll('.animar-scroll');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            // Cuando el bloque entra en la vista del navegador
            if (entrada.isIntersecting) {
                entrada.target.classList.add('mostrar'); // Activa la animación CSS
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando se visualiza el 15% de la sección
    });

    // Registramos cada bloque en el observador
    bloques.forEach(bloque => observador.observe(bloque));
});