import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

interface CelebrationParticle {
  id: number;
  type: 'feather' | 'star' | 'stamp' | 'heart';
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
  speedY: number;
  speedX: number;
  rotationSpeed: number;
  wobbleSpeed: number;
  wobbleOffset: number;
}

export const FeatherCelebration: React.FC = () => {
  const { profile } = useApp();
  const [particles, setParticles] = useState<CelebrationParticle[]>([]);
  const [prevCount, setPrevCount] = useState(profile.visitedPlaceIds.length);

  const triggerCelebration = () => {
    const colors = ['#68ACE5', '#002D72', '#F1C400', '#0056B3', '#A4D2F6', '#FB7185'];
    const types: ('feather' | 'star' | 'stamp' | 'heart')[] = [
      'feather',
      'feather',
      'feather',
      'star',
      'star',
      'stamp',
      'heart',
    ];
    const newParticles: CelebrationParticle[] = [];

    for (let i = 0; i < 32; i++) {
      newParticles.push({
        id: Date.now() + i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 92 + 4, // 4% to 96% of viewport width
        y: Math.random() * -25 - 5, // Just above viewport
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.7, // 0.7 to 1.2 scale
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.random() * 2.2 + 2.0, // Gentle falling speed
        speedX: (Math.random() - 0.5) * 1.8,
        rotationSpeed: (Math.random() - 0.5) * 4,
        wobbleSpeed: Math.random() * 0.08 + 0.04,
        wobbleOffset: Math.random() * Math.PI * 2,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Trigger whenever visited places count increases
  useEffect(() => {
    if (profile.visitedPlaceIds.length > prevCount) {
      triggerCelebration();
    }
    setPrevCount(profile.visitedPlaceIds.length);
  }, [profile.visitedPlaceIds.length]);

  // Animate particles physics loop
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            y: p.y + p.speedY,
            x: p.x + p.speedX + Math.sin(p.y * p.wobbleSpeed + p.wobbleOffset) * 0.4,
            rotation: p.rotation + p.rotationSpeed,
          }))
          .filter((p) => p.y < 112) // Remove once off bottom
      );
    }, 32);

    return () => clearInterval(interval);
  }, [particles.length]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute will-change-transform"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            transform: `rotate(${p.rotation}deg) scale(${p.scale})`,
          }}
        >
          {/* TYPE 1: BLUE JAY FEATHER */}
          {p.type === 'feather' && (
            <svg
              width="30"
              height="52"
              viewBox="0 0 30 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-sm opacity-95"
            >
              <path
                d="M 15 0 C 5 12 1 30 15 44 C 29 30 25 12 15 0 Z"
                fill={p.color}
                opacity="0.95"
              />
              <path
                d="M 15 0 C 10 6 7 15 15 22 C 23 15 20 6 15 0 Z"
                fill="#FFFFFF"
                opacity="0.35"
              />
              <line x1="15" y1="0" x2="15" y2="52" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
              <line x1="15" y1="44" x2="15" y2="52" stroke="#F1C400" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          )}

          {/* TYPE 2: GOLDEN STAR BURST */}
          {p.type === 'star' && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-md"
            >
              <polygon
                points="12,2 15,9 22,10 17,15 18,22 12,18 6,22 7,15 2,10 9,9"
                fill="#FDE047"
                stroke="#D97706"
                strokeWidth="1"
              />
            </svg>
          )}

          {/* TYPE 3: PASSPORT STAMP DISK */}
          {p.type === 'stamp' && (
            <div className="w-6 h-6 rounded-full border-2 border-dashed border-emerald-500 bg-emerald-100/90 flex items-center justify-center text-[10px] font-black text-emerald-800 shadow-sm">
              ✓
            </div>
          )}

          {/* TYPE 4: CONFETTI VECTOR HEART */}
          {p.type === 'heart' && (
            <svg width="18" height="18" viewBox="0 0 24 24" fill={p.color} className="filter drop-shadow-sm">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
