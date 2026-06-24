document.addEventListener("DOMContentLoaded", () => {
    const bloques = document.querySelectorAll('.animar-scroll');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('mostrar');
            }
        });
    }, {
        threshold: 0.15
    });

    bloques.forEach(bloque => observador.observe(bloque));
});
