import { Particula } from './particle.js';

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particulas = [];

// Crear partículas
for (let i = 0; i < 10; i++) {
    particulas.push(new Particula(canvas.width / 2, canvas.height / 2));
}

function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particulas.forEach((particula) => {
        particulas.forEach((particula) => {
            let dx = particula2.x - particula.x;
            let dy = particula2.y - particula.y;
            let dist = Math.sqrt(dx ** 2 + dy ** 2);

            if (dist < 300) {
                ctx.beginPath();
                ctx.moveTo(bola.x, bola.y);
                ctx.lineTo(bola2.x, bola2.y);
                ctx.stroke();
                ctx.closePath();
            }
        });
        particula.dibujar();
        particula.mover();
    });
    requestAnimationFrame(animar);
}

// Iniciar animación
animar();
