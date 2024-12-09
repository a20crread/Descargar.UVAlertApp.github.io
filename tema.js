// Obtener el tema guardado o usar "light" por defecto
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

// Establecer el estado inicial del interruptor
const switchInput = document.getElementById('switch');
if (switchInput) {
    switchInput.checked = savedTheme === 'light';

    // Forzar el tema al cargar la página
    const forceTheme = () => {
        document.body.setAttribute('data-theme', savedTheme);
        localStorage.setItem('theme', savedTheme);
    };

    forceTheme();

    // Cambiar el tema al usar el botón
    switchInput.addEventListener('change', () => {
        const newTheme = switchInput.checked ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Guardar la preferencia
    });
}

// Deshabilitar detección automática del tema del navegador
window.matchMedia('(prefers-color-scheme: dark)').removeEventListener(() => {});
window.matchMedia('(prefers-color-scheme: light)').removeEventListener(() => {});
