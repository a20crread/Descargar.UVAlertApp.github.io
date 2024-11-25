const container = document.querySelector('.background');

// Crear partículas dinámicamente
for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  // Asignar posiciones y animaciones aleatorias
  particle.style.left = `${Math.random() * 100}vw`; // Posición inicial X
  particle.style.top = `${Math.random() * 100}vh`; // Posición inicial Y
  particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Velocidad aleatoria
  particle.style.animationDelay = `${Math.random() * 5}s`; // Inicio desfasado

  container.appendChild(particle);
}

// Movimiento y rebote
const keyframes = `
@keyframes moveParticle {
  0% { transform: translate(0, 0); }
  25% { transform: translate(100vw, 100vh); }
  50% { transform: translate(-100vw, 100vh); }
  75% { transform: translate(-100vw, -100vh); }
  100% { transform: translate(0, 0); }
}`;

// Agregar keyframes al CSS dinámicamente
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = keyframes;
document.head.appendChild(styleSheet);
