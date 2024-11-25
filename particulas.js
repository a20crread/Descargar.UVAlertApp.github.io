// Seleccionar el contenedor
const container = document.querySelector('.background');

// Crear partículas dinámicamente
const particleCount = 50; // Número de partículas
const particles = [];

// Crear partículas y configurarlas
for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Posición inicial aleatoria
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;

  // Propiedades de movimiento
  const velocity = {
    x: (Math.random() - 0.5) * 2, // Velocidad X aleatoria (-1 a 1)
    y: (Math.random() - 0.5) * 2, // Velocidad Y aleatoria (-1 a 1)
  };

  particles.push({ element: particle, velocity });
  container.appendChild(particle);
}

// Animar las partículas
function animateParticles() {
  particles.forEach((p) => {
    const { element, velocity } = p;

    // Obtener posiciones actuales
    let x = parseFloat(element.style.left);
    let y = parseFloat(element.style.top);

    // Actualizar posiciones
    x += velocity.x;
    y += velocity.y;

    // Rebotar contra los bordes
    if (x <= 0 || x >= window.innerWidth) velocity.x *= -1;
    if (y <= 0 || y >= window.innerHeight) velocity.y *= -1;

    // Aplicar nuevas posiciones
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  });

  // Llamar de nuevo a la animación
  requestAnimationFrame(animateParticles);
}

// Iniciar la animación
animateParticles();
