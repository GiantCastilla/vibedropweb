document.addEventListener("DOMContentLoaded", () => {

    // ── 1. Animación de scroll para secciones ────────────────────────────
    const bloques = document.querySelectorAll('.animar-scroll');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('mostrar');
            }
        });
    }, { threshold: 0.15 });

    bloques.forEach(bloque => observador.observe(bloque));


    // ── 2. Animación de entrada para la sección promo ────────────────────
    const seccionPromo = document.querySelector('.seccion-promo');

    if (seccionPromo) {
        const observadorPromo = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    seccionPromo.classList.add('visible');
                    observadorPromo.unobserve(seccionPromo);
                }
            });
        }, { threshold: 0.2 });

        observadorPromo.observe(seccionPromo);
    }


    // ── 3. Menú hamburguesa responsivo ───────────────────────────────────
    //  Basado en classList.toggle (igual que los apuntes del curso)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {

        // Al hacer clic cambia entre barras ☰ y X según el estado
        menuToggle.onclick = function () {
            navMenu.classList.toggle('activo');

            const icono = menuToggle.querySelector('i');
            if (navMenu.classList.contains('activo')) {
                icono.className = 'fa-solid fa-xmark';
            } else {
                icono.className = 'fa-solid fa-bars';
            }
        };

        // Cerrar menú automáticamente al hacer clic en cualquier enlace
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('activo');
                menuToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }


    // ── 4. Sombra en el header al hacer scroll ───────────────────────────
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });


    // ── 5. Botón "volver arriba" ─────────────────────────────────────────
    const btnTop = document.getElementById('btn-top');

    if (btnTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                btnTop.classList.add('visible');
            } else {
                btnTop.classList.remove('visible');
            }
        });

        btnTop.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }


    // ── 6. Formulario de contacto con mensaje de éxito (JS) ──────────────
    const formContacto = document.getElementById('form-contacto');
    const msgExito = document.getElementById('msg-exito');

    if (formContacto && msgExito) {

        formContacto.addEventListener('submit', function (e) {
            e.preventDefault(); // Evitar que recargue la página

            // --- INTEGRACIÓN SESIÓN 11: Acceso por atributo 'name' ---
            const nombre = document.formularioContacto.nombre.value;

            // Insertar mensaje dinámico con el nombre del usuario
            msgExito.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> ¡Gracias, <strong>' +
                nombre + '</strong>! Tu mensaje fue recibido. Te contactaremos pronto.';

            msgExito.classList.add('mostrar');
            formContacto.reset();

            // Ocultar mensaje después de 5 segundos
            setTimeout(function () {
                msgExito.classList.remove('mostrar');
            }, 5000);
        });
    }

});
