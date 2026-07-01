document.addEventListener("DOMContentLoaded", () => {
    
    // --- INTEGRACIÓN SESIÓN 12: Arreglos y Objetos ---
    const catalogoStock = [
        { modelo: "Adidas Samba", stock: 8 },
        { modelo: "Adidas VL Court", stock: 12 },
        { modelo: "Adidas Campus", stock: 6 },
        { modelo: "Vibe Max 90", stock: 10 },
        { modelo: "Drop Retro", stock: 5 },
        { modelo: "Jordan 1 Premium", stock: 5 }
    ];

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

    // --- INTEGRACIÓN SESIÓN 12: Bucle for para llenar la tabla ---
    function cargarTablaStock() {
        const tbody = document.getElementById('cuerpo-tabla-stock');
        if (tbody) {
            tbody.innerHTML = ""; 
            for (let i = 0; i < catalogoStock.length; i++) {
                const item = catalogoStock[i];
                // Sesión 13: Manipulación de HTML (innerHTML)
                tbody.innerHTML += `<tr><td>${item.modelo}</td><td>${item.stock} pares</td></tr>`;
            }
        }
    }

    cargarTablaStock();

    const selectModelo = document.getElementById('modelo');
    const imgProducto = document.getElementById('img-producto');
    const tituloProducto = document.getElementById('titulo-producto');
    const descProducto = document.getElementById('desc-producto');

    // Cambio dinámico de producto
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
    const contenedorTicket = document.getElementById('contenedor-ticket');

    // --- INTEGRACIÓN SESIÓN 13: Modificación dinámica de Estilos ---
    radiosDestino.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'regalo') {
                lblNombre.innerText = "🎁 Nombres de quien recibe el regalo:";
                lblCelular.innerText = "📱 Celular del afortunado/a:";
                lblCorreo.innerText = "📧 Tu Correo (Para enviarte la boleta):";
                
                // Estilos dinámicos desde JS
                lblNombre.style.color = "#ff4f00";
                lblNombre.style.fontWeight = "bold";
                lblCelular.style.color = "#ff4f00";
                lblCelular.style.fontWeight = "bold";
            } else {
                lblNombre.innerText = "Nombres y Apellidos:";
                lblCelular.innerText = "Número de Celular:";
                lblCorreo.innerText = "Correo Electrónico:";
                
                // Revertir estilos
                lblNombre.style.color = "";
                lblNombre.style.fontWeight = "";
                lblCelular.style.color = "";
                lblCelular.style.fontWeight = "";
            }
        });
    });

    // --- PROCESO DE COMPRA (Sesiones 11, 12, 13) ---
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        // --- INTEGRACIÓN SESIÓN 11: Acceso por atributo 'name' ---
        const f = document.formularioCheckout;
        const nombreVal = f.nombre.value;
        const modeloVal = f.modelo.value;
        const tallaVal = f.talla.value;
        const correoVal = f.correo.value;
        const destinoVal = f.destino.value;

        // --- INTEGRACIÓN SESIÓN 12: prompt() ---
        let descuento = 0;
        const cupon = prompt("¿Tienes un código de descuento? (Opcional)", "VIBE2026");
        if (cupon === "VIBE2026") {
            descuento = 10;
            alert("✅ ¡Código aplicado! Has obtenido un 10% de descuento simbólico.");
        }

        // --- INTEGRACIÓN SESIÓN 12: confirm() ---
        const mensajeConfirm = `¿Confirmas tu pedido de ${modeloVal} (Talla ${tallaVal} US) para ${nombreVal}?`;
        const usuarioConfirma = confirm(mensajeConfirm);

        if (usuarioConfirma) {
            
            // Mostrar mensaje de éxito
            if (destinoVal === 'personal') {
                mensajeExito.innerText = `¡FELICIDADES ${nombreVal.toUpperCase()}! Tu compra se ha realizado correctamente.`;
            } else {
                mensajeExito.innerText = "¡FELICIDADES! Tu regalo estará en camino próximamente.";
            }
            mensajeExito.style.display = "block";

            // --- INTEGRACIÓN SESIÓN 13: createElement() para el Ticket ---
            contenedorTicket.innerHTML = ""; // Limpiar previo
            const ticket = document.createElement("div");
            ticket.className = "ticket-compra";
            
            ticket.innerHTML = `
                <h4>🎟️ Ticket de Compra - Vibe Drop</h4>
                <p><strong>Cliente:</strong> ${nombreVal}</p>
                <p><strong>Producto:</strong> ${modeloVal}</p>
                <p><strong>Talla:</strong> ${tallaVal} US</p>
                <p><strong>Descuento:</strong> ${descuento}% aplicado</p>
                <p><strong>Destino:</strong> ${destinoVal === 'regalo' ? 'Para Regalo 🎁' : 'Uso Personal'}</p>
                <p><strong>Enviado a:</strong> ${correoVal}</p>
                <button class="btn-cerrar-ticket" onclick="this.parentElement.remove()">Cerrar Ticket</button>
            `;
            
            contenedorTicket.appendChild(ticket);

            // --- INTEGRACIÓN SESIÓN 12: alert() ---
            alert("¡Pedido procesado con éxito!");

            form.reset();
            // Resetear estilos y etiquetas
            lblNombre.innerText = "Nombres y Apellidos:";
            lblCelular.innerText = "Número de Celular:";
            lblCorreo.innerText = "Correo Electrónico:";
            lblNombre.style.color = "";
            lblCelular.style.color = "";
        } else {
            alert("Operación cancelada. Puedes revisar tus datos.");
        }
    });
});