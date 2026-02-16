# ⚡ Validación Avanzada de Formularios con JavaScript Moderno

<div align="center">

![Stars](https://img.shields.io/github/stars/pabskun/Validacion-avanzada-de-formularios?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/pabskun/Validacion-avanzada-de-formularios?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/pabskun/Validacion-avanzada-de-formularios?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML-5-orange?style=for-the-badge)
![Estado](https://img.shields.io/badge/Estado-Listo_para_Uso-brightgreen?style=for-the-badge)

</div>

---

## ✨ Descripción General

Proyecto académico que demuestra la implementación de buenas prácticas modernas en validación de formularios utilizando JavaScript ES6+.

Incluye:

- 🔎 Validación en tiempo real utilizando **Constraint Validation API**
- 🎯 Personalización de mensajes de error
- ⚡ Envío asincrónico mediante `fetch`
- 🧹 Manejo profesional de errores con `try / catch / finally`
- 🔄 Control del estado de interfaz (loading state)
- 📦 Captura moderna de datos con `FormData`

Diseñado para entornos educativos y como ejemplo práctico de frontend profesional.

---

## 🚀 Flujo de Funcionamiento

1. El usuario ingresa datos en el formulario.
2. El navegador ejecuta la validación nativa automáticamente.
3. JavaScript personaliza los mensajes de error.
4. Si el formulario es válido:
   - Se capturan los datos con `FormData`.
   - Se envían mediante `fetch` a un endpoint.
5. Se maneja la respuesta del servidor.
6. Se controla el estado del botón (loading / disabled).
7. Se gestionan errores con `try / catch`.

---

## 🧠 Características Principales

| Funcionalidad | Descripción |
|---------------|------------|
| 🔎 Validación en tiempo real | Usa validaciones nativas del navegador |
| 🎯 Mensajes personalizados | Reemplaza mensajes por defecto |
| ⚡ Async/Await | Código asincrónico limpio y legible |
| 🌐 Fetch API | Envío de datos a endpoint REST |
| 🛡 Manejo de errores | Control estructurado con try/catch |
| 🔄 Control de estado UI | Evita doble envío y mejora UX |

---

## 📂 Estructura del Proyecto

```
.
├── index.html
├── index.js
└── README.md
```

---

## 🏗️ Arquitectura HTML

Formulario con validación nativa:

```html
<form id="registrationForm">
    <input type="email" id="txtCorreo" required>
    <input type="text" id="txtNombre" required>
    <button type="submit">Registrar</button>
</form>
```

### ¿Por qué usar `required`?

Activa las validaciones internas del navegador antes de ejecutar la lógica JavaScript.

El navegador detecta automáticamente:

- Campos vacíos  
- Formato incorrecto en email  
- Tipos inválidos  

Esto reduce código manual innecesario.

---

## ⚙️ Lógica JavaScript Explicada

### 🔹 Selección de Elementos del DOM

```javascript
const correoInput = document.querySelector('#txtCorreo');
const form = document.querySelector('#registrationForm');
```

**`querySelector()`**

- Permite seleccionar elementos usando selectores CSS.
- Devuelve el primer elemento que coincida.
- Es la base para manipular el DOM dinámicamente.

---

### 🔹 Validación en Tiempo Real

```javascript
correoInput.addEventListener('input', (event) => {
    const input = event.target;

    if (input.validity.typeMismatch) {
        input.setCustomValidity('Formato de correo inválido 📧');
    } else if (input.validity.valueMissing) {
        input.setCustomValidity('El correo es obligatorio');
    } else {
        input.setCustomValidity('');
    }
});
```

#### Métodos utilizados

- `addEventListener()`
- `validity.typeMismatch`
- `validity.valueMissing`
- `setCustomValidity()`

---

### 📌 Uso de `validity`

| Propiedad        | Función                                  |
|------------------|------------------------------------------|
| `typeMismatch`   | Detecta formato incorrecto               |
| `valueMissing`   | Detecta campo obligatorio vacío          |
| `patternMismatch`| No cumple con expresión regular          |
| `tooShort`       | No alcanza la longitud mínima requerida  |

---

## 📦 Captura de Datos con FormData

```javascript
const formData = new FormData(form);
```

### Ventajas

- Captura automática de todos los campos.
- Compatible con archivos.
- Ideal para enviar datos con `fetch`.

---

## 🌐 Envío Asincrónico con Fetch

```javascript
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = form.querySelector('button');
    button.disabled = true;
    button.textContent = 'Enviando...';

    try {
        const formData = new FormData(form);

        const response = await fetch('https://api.ejemplo.com/registro', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        const data = await response.json();
        console.log('Registro exitoso:', data);

    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        button.disabled = false;
        button.textContent = 'Registrar';
    }
});
```

---

## 🛡 Manejo Profesional de Errores

### `try`
Contiene el código que puede fallar (peticiones HTTP, parseo de datos, etc.).

### `catch`
Captura el error y evita que la aplicación se detenga.

### `finally`
Se ejecuta siempre, haya error o no.

Ideal para:

- Restaurar botones  
- Ocultar loaders  
- Limpiar estados visuales  

---

## 🔄 Control del Estado de Interfaz

Buenas prácticas aplicadas:

- Deshabilitar botón durante envío.
- Cambiar texto a “Enviando…”.
- Evitar doble envío accidental.
- Restaurar estado original al finalizar.

Esto mejora significativamente la experiencia de usuario (UX).

---

## 🎯 Buenas Prácticas Aplicadas

- Separación clara entre HTML y JS.
- Uso de APIs modernas del navegador.
- Código limpio y legible.
- Manejo estructurado de errores.
- Uso de async/await en lugar de promesas encadenadas.
- Validación híbrida (nativa + personalizada).

---

## 📚 Conceptos Clave Utilizados

- Constraint Validation API  
- DOM Manipulation  
- Event Handling  
- Async/Await  
- Fetch API  
- FormData  
- UI State Management  

---

## 🏁 Estado del Proyecto

🟢 Listo para uso educativo  
🟢 Código modular y claro  
🟢 Compatible con navegadores modernos  

---

## 👨‍💻 Autor

Proyecto desarrollado por Pablo Monestel con fines académicos para demostrar validación avanzada en frontend moderno.

---

## 📄 Licencia

Uso educativo y demostrativo.
