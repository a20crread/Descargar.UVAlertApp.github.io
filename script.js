import { Particula } from './particle.js';

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulas = [];

// Crear partículas
for (let i = 0; i < 50; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    particulas.push(new Particula(x, y));
}

// Animar las partículas
function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach((particula) => {
        particula.dibujar(ctx);
        particula.mover(canvas);
    });
    requestAnimationFrame(animar);
}

// Iniciar animación
animar();
