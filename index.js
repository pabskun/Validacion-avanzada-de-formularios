const titulo = document.querySelector("h1");
const lista = document.querySelector(".lista-productos");
const tareas = [
  { nombre: "Estudiar JS", hecha: false },
  { nombre: "Sacar la basura", hecha: true },
  { nombre: "Hacer ejercicio", hecha: false }
];
console.log(titulo.textContent);

titulo.textContent = "Hola mundo";

const productos = ["Tronaditas", "Coca Cola", "Jabón", "Computadora"];
const htmlProductos = productos.map(producto => `<li>${producto}</li>`).join("");

lista.innerHTML = htmlProductos;

//1
const encabezado2 = document.querySelector("#encabezado");
const listaTareas = document.querySelector(".lista-tareas");
//2
console.log(encabezado2.textContent);

//3
encabezado2.textContent = "Tareas para hoy";

//4
const htmlTareas = tareas.map(tarea => `<li>${tarea.hecha ? "✅" : "🕰"} ${tarea.nombre}</li>`).join("");

listaTareas.innerHTML = htmlTareas;
/*
1. Seleccionar los elementos del dom relacionados al h2 y al ul usando document.querySelector
2. Mostrar en consola el texto actual del encabezado
3. Cambiar el texto del encabezado a "Tareas para hoy"
4.Con base al json de tareas mostrar en pantalla dentro del ul  si la tarea esta hecha y el nombre de la tarea. Usando el map como el ejemplo y el string template


*/

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

