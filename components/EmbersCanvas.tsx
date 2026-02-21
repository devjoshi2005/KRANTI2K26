"use client";

import { useEffect, useRef } from "react";

export default function EmbersCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ... ember logic ...
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Ember Class
    class Ember {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      fadeRate: number = 0;
      color: string = "";
      life: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = -(Math.random() * 2 + 0.5);
        this.opacity = Math.random() * 0.8 + 0.2;
        this.fadeRate = Math.random() * 0.005 + 0.002;
        this.color =
          Math.random() > 0.5
            ? `rgba(0, 240, 255, ${this.opacity})` // Vibrant Cyan
            : `rgba(255, 255, 255, ${this.opacity})`; // White
        this.life = 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.fadeRate;

        if (this.life <= 0 || this.y < -10) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.life * this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const embers = Array.from({ length: 60 }, () => new Ember());

    function animateEmbers() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      embers.forEach((ember) => {
        ember.update();
        ember.draw();
      });
      animationFrameId = requestAnimationFrame(animateEmbers);
    }
    animateEmbers();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="embers-canvas"
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    />
  );
}
