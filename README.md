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

Proyecto académico que demuestra la implementación de:

- 🔎 Validación en tiempo real utilizando **Constraint Validation API**
- 🎯 Personalización de mensajes de error
- ⚡ Envío asincrónico mediante `fetch`
- 🧹 Manejo profesional de errores con `try / catch / finally`
- 🔄 Control del estado de interfaz (loading state)
- 📦 Captura moderna de datos con `FormData`

Diseñado para entornos educativos y como ejemplo de buenas prácticas en desarrollo frontend moderno.

---

## 🚀 Flujo de Funcionamiento


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

.
├── index.html
├── index.js
└── README.md


---

# 🏗️ Arquitectura HTML

Formulario con validación nativa:

```html
<form id="registrationForm">
    <input type="email" id="txtCorreo" required>
    <input type="text" id="txtNombre" required>
    <button type="submit">Registrar</button>
</form>

¿Por qué usar required?

Activa las validaciones internas del navegador antes de ejecutar la lógica JavaScript.

⚙️ Lógica JavaScript Explicada
🔹 Selección de Elementos del DOM

```javascript
const correoInput = document.querySelector('#txtCorreo');
const form = document.querySelector('#registrationForm');

querySelector()

Permite seleccionar elementos usando selectores CSS.

Devuelve el primer elemento que coincida.

Base para manipular el DOM dinámicamente.

🔹 Validación en Tiempo Real

```javascript
correoInput.addEventListener('input', (event) => {

Métodos utilizados:

- addEventListener()

- validity.typeMismatch

- validity.valueMissing

- setCustomValidity()

📌 Uso de validity

```javascript
if (input.validity.typeMismatch) {
    input.setCustomValidity('Formato de correo inválido 📧');
}


| Propiedad      | Función                         |
| -------------- | ------------------------------- |
| `typeMismatch` | Detecta formato incorrecto      |
| `valueMissing` | Detecta campo obligatorio vacío |
