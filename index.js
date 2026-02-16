
// 1. Selección de elementos (Asegúrate de que estos IDs existan en tu HTML)
const correoInput = document.querySelector('#txtCorreo');
const nombreInput = document.querySelector('#txtNombre');
const form = document.querySelector('#registrationForm');

// 2. Validación en tiempo real (Constraint Validation API)
correoInput.addEventListener('input', (event) => {
    const input = event.target;

    if (input.validity.typeMismatch) {
        input.setCustomValidity('¡Ups! El formato del correo no es válido 📧');
    } else if (input.validity.valueMissing) {
        input.setCustomValidity('Este campo es obligatorio, no lo olvides.');
        
    } else {
        // Limpiamos el error para permitir el envío
        input.setCustomValidity('');
    }
});

/**
 * 3. Función de envío asincrónico (Clean Code & Async/Await)
 */
async function postData(payload) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const submitBtn = form.querySelector('button[type="submit"]');
    
    try {
        // UI: Estado de carga
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const result = await response.json();
        
        console.log('Respuesta del servidor:', result);
        alert('✅ ¡Registro exitoso! ID: ' + result.id);
        form.reset(); // Limpia el formulario tras el éxito

    } catch (error) {
        console.error('Fallo en postData:', error.message);
        alert('❌ Error al enviar: ' + error.message);
    } finally {
        // Siempre reactivamos el botón
        submitBtn.disabled = false;
        submitBtn.textContent = 'Registrar';
    }
}

// 4. Único Event Listener para el envío
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Verificación manual final antes de procesar
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Captura de datos moderna
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    await postData(data);
});

