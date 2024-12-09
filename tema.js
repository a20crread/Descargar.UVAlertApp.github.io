// Obtener tema guardado o usar "light" por defecto
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

// Referenciar el checkbox del interruptor
const switchInput = document.getElementById('switch');

// Configurar estado inicial del interruptor
if (switchInput) {
    switchInput.checked = savedTheme === 'light';

    // Agregar evento para alternar el tema
    switchInput.addEventListener('change', () => {
        const newTheme = switchInput.checked ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Guardar preferencia
    });
}
window.matchMedia('(prefers-color-scheme: dark)').removeEventListener(() => {});
window.matchMedia('(prefers-color-scheme: light)').removeEventListener(() => {});
