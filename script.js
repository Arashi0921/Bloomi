// Función para mostrar/ocultar el menú en dispositivos móviles
document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});

// Función para mostrar la información detallada
function mostrarInfo(id) {
    const info = document.getElementById(`info-${id}`);
    info.style.display = 'block';
}

// Función para cerrar la información detallada
function cerrarInfo(id) {
    const info = document.getElementById(`info-${id}`);
    info.style.display = 'none';
}

// Registro de formulario
document.getElementById('form-registro').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Registro exitoso!');
});
