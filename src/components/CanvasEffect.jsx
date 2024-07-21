"use client";

import React, { useEffect } from "react";

const CanvasEffect = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = 10;
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const particles = [];
    const angle = Math.PI / 3;
    const length = 2;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(pos) {
        this.pos = pos;
        this.vel = { x: Math.random() * length - length / 2, y: Math.random() * length - length / 2 };
        this.hue = Math.random() * 360;
        this.sat = 100;
        this.val = 100;
        this.lifetime = Math.random() * 100 + 50;
        this.age = 0;
        particles.push(this);
      }

      update() {
        if (this.age >= this.lifetime) {
          const index = particles.indexOf(this);
          if (index > -1) particles.splice(index, 1);
          return;
        }
        this.age += 1;
        this.vel.x += (Math.random() - 0.5) * 0.1;
        this.vel.y += (Math.random() - 0.5) * 0.1;
        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
      }

      draw() {
        ctx.strokeStyle = `hsla(${this.hue}, ${this.sat}%, ${this.val}%, ${1 - this.age / this.lifetime})`;
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x - this.vel.x, this.pos.y - this.vel.y);
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      requestAnimationFrame(animate);
    }

    animate();

    function handleMouseMove(e) {
      for (let i = 0; i < 5; i++) {
        new Particle({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default CanvasEffect;
