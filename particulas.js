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
    x: (Math.random() - 0.5) * 4, // Velocidad X aleatoria (-2 a 2)
    y: (Math.random() - 0.5) * 4, // Velocidad Y aleatoria (-2 a 2)
  };

  particles.push({ element: particle, x, y, velocity });
  container.appendChild(particle);
}

// Animar las partículas
function animateParticles() {
  particles.forEach((p) => {
    const { element, velocity } = p;
        bolas.forEach((bola2) => {
            let dx = bola2.x - bola.x;
            let dy = bola2.y - bola.y;
            let dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (dist < 300) {
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y);
                ctx.lineTo(bola2.x, bola2.y);
                ctx.stroke();
                ctx.closePath();
            }
        });
        bola.dibujar();
        bola.mover();
    }

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
animateParticles();
