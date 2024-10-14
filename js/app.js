// Función para validar el campo de asunto
function validarAsunto() {
    const asuntoInput = document.getElementById('asunto');
    const asuntoError = document.getElementById('asuntoError');

    if (asuntoInput.value.trim() === "") {
        asuntoInput.classList.add('incorrecto');
        asuntoInput.classList.remove('correcto');
        asuntoError.textContent = "El asunto no puede estar vacío.";
        asuntoError.style.display = "block";
    } else {
        asuntoInput.classList.add('correcto');
        asuntoInput.classList.remove('incorrecto');
        asuntoError.textContent = "";
        asuntoError.style.display = "none";
    }
}

// Función para validar el campo de CC (correo electrónico)
function validarCC() {
    const ccInput = document.getElementById('cc');
    const ccError = document.getElementById('ccError');
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo

    if (!regexCorreo.test(ccInput.value.trim())) {
        ccInput.classList.add('incorrecto');
        ccInput.classList.remove('correcto');
        ccError.textContent = "Debe introducir un correo electrónico válido.";
        ccError.style.display = "block";
    } else {
        ccInput.classList.add('correcto');
        ccInput.classList.remove('incorrecto');
        ccError.textContent = "";
        ccError.style.display = "none";
    }
}

// Función para validar el cuerpo del mensaje
function validarCuerpo() {
    const cuerpoInput = document.getElementById('cuerpo');
    const cuerpoError = document.getElementById('cuerpoError');

    if (cuerpoInput.value.trim() === "") {
        cuerpoInput.classList.add('incorrecto');
        cuerpoInput.classList.remove('correcto');
        cuerpoError.textContent = "El cuerpo del mensaje no puede estar vacío.";
        cuerpoError.style.display = "block";
    } else {
        cuerpoInput.classList.add('correcto');
        cuerpoInput.classList.remove('incorrecto');
        cuerpoError.textContent = "";
        cuerpoError.style.display = "none";
    }
}

// Asignar eventos blur a los inputs para validar cuando pierden el foco
document.getElementById('asunto').addEventListener('blur', validarAsunto);
document.getElementById('cc').addEventListener('blur', validarCC);
document.getElementById('cuerpo').addEventListener('blur', validarCuerpo);

// Validación final al enviar el formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    validarAsunto();
    validarCC();
    validarCuerpo();

    // Prevenir el envío si hay campos incorrectos
    const inputsIncorrectos = document.querySelectorAll('.incorrecto');
    if (inputsIncorrectos.length > 0) {
        event.preventDefault(); // Evita el envío del formulario si hay errores
    }
});
