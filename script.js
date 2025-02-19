// Función para mostrar la información detallada
function mostrarInfo(id) {
    const info = document.getElementById(`info-${id}`);
    info.style.display = 'block'; // Muestra la información
}

// Función para cerrar la información detallada
function cerrarInfo(id) {
    const info = document.getElementById(`info-${id}`);
    info.style.display = 'none'; // Oculta la información
}

// Registro de formulario
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert('Registro exitoso!'); // Mensaje de éxito (puedes cambiarlo por lógica real)
});