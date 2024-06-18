
document.addEventListener('DOMContentLoaded', function() {
    const botonesComprar = document.querySelectorAll('button');

    botonesComprar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            alert('Producto añadido al carrito.');
        });
    });

    const formularioContacto = document.getElementById('contacto-form');
    if (formularioContacto) {  // Verifica si el formulario existe antes de añadir el evento
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');
        });
    }
});

