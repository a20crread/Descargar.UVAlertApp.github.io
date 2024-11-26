// Seleccionar el contenedor
const container = document.querySelector('.background');

// Crear partículas dinámicamente
const particleCount = 50; // Número de partículas
const particles = [];

// Crear partículas y configurarlas
for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Posición inicial aleatoria en píxeles
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Propiedades de movimiento
  const velocity = {
    x: (Math.random() - 0.5) * 4 || 0.5, 
    y: (Math.random() - 0.5) * 4 || 0.5, 
  };

  particles.push({ element: particle, x, y, velocity });
  container.appendChild(particle);
}

// Animar las partículas
function animateParticles() {
  particles.forEach((p) => {
    const { element, velocity } = p;

    // Actualizar posiciones
    p.x += velocity.x;
    p.y += velocity.y;

    // Rebotar contra los bordes
    if (p.x <= 0 || p.x >= window.innerWidth - 10) velocity.x *= -1; // Rebotar en X
    if (p.y <= 0 || p.y >= window.innerHeight - 10) velocity.y *= -1; // Rebotar en Y

    // Aplicar nuevas posiciones
    element.style.left = `${p.x}px`;
    element.style.top = `${p.y}px`;
  });

  // Llamar de nuevo a la animación
  requestAnimationFrame(animateParticles);
}

// Iniciar la animación
console.log("Iniciando animación");
animateParticles();
