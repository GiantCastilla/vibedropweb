document.addEventListener("DOMContentLoaded", () => {
    const baseDatosZapatillas = {
        "Vibe Max 90": { 
            img: "../Img/Vibe Max 90.png", 
            desc: "Comodidad urbana absoluta. Incorpora nuestra famosa y clásica cámara de aire visible en la suela para amortiguación premium." 
        },
        "Drop Retro": { 
            img: "../Img/Drop Retro.png", 
            desc: "Un clásico de estilo retro adaptado para la comodidad diaria. Silueta robusta y durabilidad garantizada." 
        },
        "Jordan 1 Premium": { 
            img: "../Img/Air Jordan 1.png", 
            desc: "El Santo Grial del streetwear. Cuero de alta calidad con el diseño clásico que definió una era en el básquet y la moda." 
        },
        "Adidas Samba": { 
            img: "../Img/adidas-samba.png", 
            desc: "El clásico indiscutible de las calles. Diseño atemporal en cuero con su clásica suela de goma retro." 
        },
        "Adidas VL Court": { 
            img: "../Img/adidas-vl-court.png", 
            desc: "Estilo urbano con raíces de skate. Cuenta con una punta en T y suela tipo cupsole de gran tracción." 
        },
        "Adidas Campus": { 
            img: "../Img/adidas-campus.png", 
            desc: "Un icono contracultural de los 80s. Gamuza premium, franjas marcadas y un look audaz para cualquier outfit." 
        }
    };

    const selectModelo = document.getElementById('modelo');
    const imgProducto = document.getElementById('img-producto');
    const tituloProducto = document.getElementById('titulo-producto');
    const descProducto = document.getElementById('desc-producto');

    // Listener para cambiar la foto e info dinámicamente
    selectModelo.addEventListener('change', (e) => {
        const info = baseDatosZapatillas[e.target.value];
        if (info) {
            imgProducto.src = info.img;
            tituloProducto.innerText = e.target.value;
            descProducto.innerText = info.desc;
        }
    });

    // LÓGICA DE FORMULARIO
    const form = document.getElementById('form-checkout');
    const radiosDestino = document.querySelectorAll('input[name="destino"]');
    const lblNombre = document.getElementById('lbl-nombre');
    const lblCelular = document.getElementById('lbl-celular');
    const lblCorreo = document.getElementById('lbl-correo');
    const mensajeExito = document.getElementById('mensaje-exito');

    radiosDestino.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'regalo') {
                lblNombre.innerText = "Nombres de quien recibe el regalo:";
                lblCelular.innerText = "Celular del afortunado/a:";
                lblCorreo.innerText = "Tu Correo Electrónico (Para enviarte la boleta):";
            } else {
                lblNombre.innerText = "Nombres y Apellidos:";
                lblCelular.innerText = "Número de Celular:";
                lblCorreo.innerText = "Correo Electrónico:";
            }
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const destinoSeleccionado = document.querySelector('input[name="destino"]:checked').value;
        const nombreCliente = document.getElementById('nombre').value;

        if (destinoSeleccionado === 'personal') {
            mensajeExito.innerText = `¡FELICIDADES ${nombreCliente.toUpperCase()}! Tu compra se ha realizado correctamente.`;
        } else {
            mensajeExito.innerText = "¡FELICIDADES! Tu regalo estará en camino próximamente.";
        }

        mensajeExito.style.display = "block";
        form.reset();
        
        lblNombre.innerText = "Nombres y Apellidos:";
        lblCelular.innerText = "Número de Celular:";
        lblCorreo.innerText = "Correo Electrónico:";
    });
});