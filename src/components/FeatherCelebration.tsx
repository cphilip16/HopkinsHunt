import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

interface CanvasParticle {
  id: number;
  type: 'feather' | 'star' | 'stamp' | 'heart' | 'ribbon';
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vRotation: number;
  scale: number;
  color: string;
  wobblePhase: number;
  wobbleSpeed: number;
  wobbleAmp: number;
  cosWobble: number;
  cosWobbleSpeed: number;
  opacity: number;
}

// Helper to draw a 5-point star on canvas
function drawStar(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number,
  fillColor: string,
  strokeColor: string
) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.fill();
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = 1;
  ctx.stroke();
}

export const FeatherCelebration: React.FC = () => {
  const { profile } = useApp();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<CanvasParticle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const prevCountRef = useRef(profile.visitedPlaceIds.length);

  // Resize canvas to match display viewport with HiDPI support
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x to save GPU memory
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    }
  };

  const spawnParticles = () => {
    // Respect user reduced-motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const width = window.innerWidth;
    const colors = ['#68ACE5', '#002D72', '#F1C400', '#0056B3', '#10B981', '#FB7185', '#F59E0B'];
    const types: ('feather' | 'star' | 'stamp' | 'heart' | 'ribbon')[] = [
      'feather',
      'feather',
      'feather',
      'star',
      'star',
      'stamp',
      'heart',
      'ribbon',
      'ribbon',
    ];

    const count = 28; // Optimal balance: rich festive atmosphere with zero frame drops
    const newParticles: CanvasParticle[] = [];

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      newParticles.push({
        id: Date.now() + i + Math.random(),
        type,
        x: Math.random() * (width - 40) + 20,
        y: Math.random() * -60 - 20, // Staggered entry above screen
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 1.8 + 1.8, // Smooth terminal velocity
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.05,
        scale: Math.random() * 0.4 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.04 + 0.02,
        wobbleAmp: Math.random() * 1.2 + 0.8,
        cosWobble: Math.random() * Math.PI,
        cosWobbleSpeed: Math.random() * 0.06 + 0.03,
        opacity: 1,
      });
    }

    particlesRef.current = [...particlesRef.current, ...newParticles];

    // Ensure animation loop is running
    if (!animFrameRef.current) {
      startRenderLoop();
    }
  };

  const startRenderLoop = () => {
    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      const activeParticles: CanvasParticle[] = [];

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];

        // Physics step
        p.wobblePhase += p.wobbleSpeed;
        p.cosWobble += p.cosWobbleSpeed;
        p.x += p.vx + Math.sin(p.wobblePhase) * p.wobbleAmp;
        p.y += p.vy;
        p.rotation += p.vRotation;

        // Fade out slightly near the bottom edge
        if (p.y > height - 80) {
          p.opacity -= 0.025;
        }

        if (p.y < height + 60 && p.opacity > 0.01) {
          activeParticles.push(p);

          // Render Particle
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);

          if (p.type === 'feather') {
            // Blue Jay Feather
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            const flipScale = Math.cos(p.cosWobble);
            ctx.scale(p.scale * flipScale, p.scale);

            // Outer Vane
            ctx.beginPath();
            ctx.moveTo(0, -22);
            ctx.bezierCurveTo(-12, -10, -14, 12, 0, 22);
            ctx.bezierCurveTo(14, 12, 12, -10, 0, -22);
            ctx.fillStyle = p.color;
            ctx.fill();

            // Inner Translucent Highlights
            ctx.beginPath();
            ctx.moveTo(0, -20);
            ctx.bezierCurveTo(-6, -10, -6, 4, 0, 10);
            ctx.bezierCurveTo(6, 4, 6, -10, 0, -20);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.fill();

            // White Central Shaft / Rachis
            ctx.beginPath();
            ctx.moveTo(0, -24);
            ctx.lineTo(0, 25);
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 1.6;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Gold Calamus Quill Tip
            ctx.beginPath();
            ctx.moveTo(0, 21);
            ctx.lineTo(0, 28);
            ctx.strokeStyle = '#F1C400';
            ctx.lineWidth = 2.2;
            ctx.lineCap = 'round';
            ctx.stroke();
          } else if (p.type === 'star') {
            // Golden Sparkle Star
            drawStar(ctx, p.x, p.y, 5, 11 * p.scale, 5 * p.scale, '#FDE047', '#D97706');
          } else if (p.type === 'stamp') {
            // Passport Stamp Seal
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.scale(p.scale, p.scale);

            ctx.beginPath();
            ctx.arc(0, 0, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(209, 250, 229, 0.92)';
            ctx.fill();
            ctx.lineWidth = 1.8;
            ctx.strokeStyle = '#059669';
            ctx.setLineDash([3, 2]);
            ctx.stroke();
            ctx.setLineDash([]);

            // Checkmark
            ctx.beginPath();
            ctx.moveTo(-4, 0);
            ctx.lineTo(-1, 3.5);
            ctx.lineTo(4.5, -3.5);
            ctx.strokeStyle = '#047857';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();
          } else if (p.type === 'heart') {
            // Celebratory Heart
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.scale(p.scale * 0.85, p.scale * 0.85);

            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.moveTo(0, 3);
            ctx.bezierCurveTo(-7, -7, -13, 2, 0, 12);
            ctx.bezierCurveTo(13, 2, 7, -7, 0, 3);
            ctx.fill();
          } else {
            // Ribbon Confetti Flitter (3D perspective flip)
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            const flipScale = Math.cos(p.cosWobble);
            ctx.scale(p.scale * flipScale, p.scale);

            ctx.fillStyle = p.color;
            ctx.fillRect(-6, -3.5, 12, 7);
          }

          ctx.restore();
        }
      }

      particlesRef.current = activeParticles;

      // Continue or gracefully terminate loop when empty
      if (activeParticles.length > 0) {
        animFrameRef.current = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(render);
  };

  // Check for visited places count increase
  useEffect(() => {
    if (profile.visitedPlaceIds.length > prevCountRef.current) {
      resizeCanvas();
      spawnParticles();
    }
    prevCountRef.current = profile.visitedPlaceIds.length;
  }, [profile.visitedPlaceIds.length]);

  // Window resize listener
  useEffect(() => {
    window.addEventListener('resize', resizeCanvas, { passive: true });
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 select-none"
      aria-hidden="true"
    />
  );
};
