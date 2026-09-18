import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

interface FeatherParticle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  speedY: number;
  speedX: number;
  rotationSpeed: number;
}

export const FeatherCelebration: React.FC = () => {
  const { profile } = useApp();
  const [particles, setParticles] = useState<FeatherParticle[]>([]);
  const [prevCount, setPrevCount] = useState(profile.visitedPlaceIds.length);

  const triggerFeathers = () => {
    const colors = ['#68ACE5', '#002D72', '#F1C400', '#0056B3', '#A4D2F6'];
    const newParticles: FeatherParticle[] = [];

    for (let i = 0; i < 24; i++) {
      newParticles.push({
        id: Date.now() + i,
        x: Math.random() * 90 + 5, // 5% to 95% of viewport width
        y: Math.random() * -20 - 5, // Just above viewport
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.75, // 0.75 to 1.25 scale
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 2.5 + 2.5, // Falling speed
        speedX: (Math.random() - 0.5) * 2, // Drift left/right
        rotationSpeed: (Math.random() - 0.5) * 4,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Trigger when places visited increases
  useEffect(() => {
    if (profile.visitedPlaceIds.length > prevCount) {
      triggerFeathers();
    }
    setPrevCount(profile.visitedPlaceIds.length);
  }, [profile.visitedPlaceIds.length]);

  // Animate particles down
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles
          .map((p) => ({
            ...p,
            y: p.y + p.speedY,
            x: p.x + p.speedX,
            rotation: p.rotation + p.rotationSpeed,
          }))
          .filter((p) => p.y < 110) // Remove once off screen
      );
    }, 30);

    return () => clearInterval(interval);
  }, [particles.length]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute transition-transform will-change-transform"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
          }}
        >
          {/* Handcrafted Vector Blue Jay Feather */}
          <svg
            width="32"
            height="54"
            viewBox="0 0 32 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm opacity-90"
          >
            {/* Feather Vane (Left & Right) */}
            <path
              d="M 16 0 C 6 12 2 30 16 46 C 30 30 26 12 16 0 Z"
              fill={p.color}
              opacity="0.95"
            />
            {/* Top Spirit Tip Highlight */}
            <path
              d="M 16 0 C 11 6 8 16 16 24 C 24 16 21 6 16 0 Z"
              fill="#FFFFFF"
              opacity="0.3"
            />
            {/* Center Quill / Shaft */}
            <line
              x1="16"
              y1="0"
              x2="16"
              y2="54"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Quill base extension */}
            <line
              x1="16"
              y1="46"
              x2="16"
              y2="54"
              stroke="#F1C400"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

