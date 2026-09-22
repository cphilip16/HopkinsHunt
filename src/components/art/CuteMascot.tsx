import React from 'react';
import { Sparkles } from 'lucide-react';

export type CuteMascotPose = 'waving' | 'snapping' | 'cheering' | 'explorer' | 'scholar' | 'snacking';

interface CuteMascotProps {
  pose?: CuteMascotPose;
  size?: number;
  className?: string;
  bubbleText?: string;
  speechBubble?: string;
}

export const CuteMascot: React.FC<CuteMascotProps> = ({
  pose = 'waving',
  size = 110,
  className = '',
  bubbleText,
  speechBubble,
}) => {
  const activeBubble = speechBubble || bubbleText;

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${className}`}>
      {/* Interactive Speech / Thought Bubble */}
      {activeBubble && (
        <div className="mb-2 px-3 py-1.5 rounded-2xl bg-white text-slate-800 text-[11px] font-black shadow-lg border-2 border-sky-200 flex items-center space-x-1.5 animate-bounce z-20">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400 flex-shrink-0" />
          <span>{activeBubble}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-b-2 border-r-2 border-sky-200 rotate-45" />
        </div>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md transform transition-transform hover:scale-105 duration-200"
      >
        <style>
          {`
            @keyframes mascotNaturalBlink {
              0%, 88%, 100% { transform: scaleY(1); }
              93% { transform: scaleY(0.12); }
            }
            @keyframes mascotGentleFloat {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-4px); }
            }
            @keyframes mascotShadowPulse {
              0%, 100% { transform: scaleX(1); opacity: 0.15; }
              50% { transform: scaleX(0.85); opacity: 0.08; }
            }
            @keyframes mascotWaveWing {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-22deg); }
            }
            @keyframes cameraFlashPop {
              0%, 100% { opacity: 0; transform: scale(0.5); }
              45%, 55% { opacity: 1; transform: scale(1.3); }
              60% { opacity: 0; transform: scale(1.5); }
            }
            @keyframes cheerHop {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              40% { transform: translateY(-8px) rotate(-3deg); }
              60% { transform: translateY(-8px) rotate(3deg); }
            }
            @keyframes heartFloatPulse {
              0%, 100% { transform: scale(1) translateY(0); }
              50% { transform: scale(1.25) translateY(-5px); }
            }

            .anim-mascot-blink {
              transform-origin: 70px 52px;
              animation: mascotNaturalBlink 3.8s infinite ease-in-out;
            }
            .anim-mascot-float {
              animation: mascotGentleFloat 2.6s infinite ease-in-out;
            }
            .anim-mascot-shadow {
              transform-origin: 70px 132px;
              animation: mascotShadowPulse 2.6s infinite ease-in-out;
            }
            .anim-mascot-wave {
              transform-origin: 94px 76px;
              animation: mascotWaveWing 1.2s infinite ease-in-out;
            }
            .anim-camera-flash {
              transform-origin: 84px 64px;
              animation: cameraFlashPop 2.8s infinite ease-out;
            }
            .anim-cheer-hop {
              animation: cheerHop 1.6s infinite ease-in-out;
            }
            .anim-heart-float {
              transform-origin: 22px 28px;
              animation: heartFloatPulse 1.8s infinite ease-in-out;
            }
          `}
        </style>

        <defs>
          <linearGradient id="chibiBody" x1="20" y1="20" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8AC6F9" />
            <stop offset="50%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
          <linearGradient id="chibiHat" x1="40" y1="10" x2="100" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <radialGradient id="rosyCheek" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="70" cy="132" rx="26" ry="4" fill="#0F172A" className="anim-mascot-shadow" />

        {/* ================= MAIN CHARACTER GROUP ================= */}
        <g className={pose === 'cheering' ? 'anim-cheer-hop' : 'anim-mascot-float'}>

          {/* Tail Feathers */}
          <path
            d="M 36 100 C 18 114 12 128 10 134 C 18 132 32 124 44 112 Z"
            fill="#002D72"
            stroke="#001845"
            strokeWidth="1.5"
          />
          <path
            d="M 30 106 C 14 120 10 132 8 138 C 16 135 28 128 38 116 Z"
            fill="#68ACE5"
          />

          {/* Plump Chibi Body */}
          <ellipse cx="70" cy="85" rx="38" ry="34" fill="url(#chibiBody)" />

          {/* Soft White Tummy Belly */}
          <ellipse cx="70" cy="94" rx="24" ry="20" fill="#FFFFFF" opacity="0.95" />

          {/* Chibi Head / Round Silhouette */}
          <circle cx="70" cy="54" r="36" fill="url(#chibiBody)" />

          {/* White Cheek Facial Patches */}
          <path
            d="M 44 54 C 42 68 52 78 68 76 C 60 66 54 58 44 54 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 96 54 C 98 68 88 78 72 76 C 80 66 86 58 96 54 Z"
            fill="#FFFFFF"
          />

          {/* Rosy Kawaii Blushing Cheeks */}
          <ellipse cx="48" cy="62" rx="7" ry="4.5" fill="url(#rosyCheek)" />
          <ellipse cx="92" cy="62" rx="7" ry="4.5" fill="url(#rosyCheek)" />

          {/* Big Sparkling Kawaii Eyes with Natural Blink Animation */}
          <g className="anim-mascot-blink">
            {/* Left Eye */}
            <circle cx="56" cy="52" r="7.5" fill="#0F172A" />
            <circle cx="54" cy="49.5" r="3.2" fill="#FFFFFF" />
            <circle cx="58.5" cy="54" r="1.4" fill="#FFFFFF" />

            {/* Right Eye */}
            <circle cx="84" cy="52" r="7.5" fill="#0F172A" />
            <circle cx="82" cy="49.5" r="3.2" fill="#FFFFFF" />
            <circle cx="86.5" cy="54" r="1.4" fill="#FFFFFF" />
          </g>

          {/* Cute Yellow Beak */}
          <path
            d="M 65 56 Q 70 54 75 56 Q 70 65 65 56 Z"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="1"
          />

          {/* Head Feather Crest */}
          <path
            d="M 64 22 C 58 12 66 2 76 4 C 74 12 76 18 80 24 Z"
            fill="#4A90E2"
          />
          <path
            d="M 58 24 C 54 16 60 8 70 10 C 66 16 68 20 72 26 Z"
            fill="#8AC6F9"
          />

          {/* Headwear: Mortarboard cap for scholar, Safari Hat for other poses */}
          {pose === 'scholar' ? (
            <g transform="translate(42, 6)">
              {/* Cap Skull cap */}
              <ellipse cx="28" cy="18" rx="14" ry="5" fill="#001D4A" />
              {/* Diamond Mortarboard Top */}
              <polygon points="28,4 52,14 28,22 4,14" fill="#002D72" stroke="#001845" strokeWidth="1.2" />
              {/* Golden Button & Swinging Tassel */}
              <circle cx="28" cy="14" r="2.2" fill="#F1C400" />
              <path d="M 28 14 Q 40 18 42 28" stroke="#F1C400" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              <circle cx="42" cy="29" r="2" fill="#D97706" />
            </g>
          ) : (
            <g transform="translate(48, 8)">
              {/* Hat Brim */}
              <ellipse cx="22" cy="18" rx="24" ry="6" fill="url(#chibiHat)" stroke="#B45309" strokeWidth="1.2" />
              {/* Hat Crown */}
              <path d="M 8 18 Q 8 6 22 6 Q 36 6 36 18 Z" fill="url(#chibiHat)" stroke="#B45309" strokeWidth="1.2" />
              {/* Hat Ribbon band in JHU Heritage Navy */}
              <path d="M 8 16 Q 22 20 36 16 L 36 18 Q 22 22 8 18 Z" fill="#002D72" />
            </g>
          )}

          {/* Little Yellow Feet */}
          <path d="M 56 118 L 52 126 M 56 118 L 56 127 M 56 118 L 60 126" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 84 118 L 80 126 M 84 118 L 84 127 M 84 118 L 88 126" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

          {/* ================= POSE DETAILS ================= */}

          {/* POSE 1: WAVING */}
          {pose === 'waving' && (
            <g id="chibi-pose-waving">
              {/* Animated Waving Right Wing */}
              <g className="anim-mascot-wave">
                <path
                  d="M 94 76 Q 116 60 118 46 Q 110 44 98 65 Z"
                  fill="#4A90E2"
                  stroke="#002D72"
                  strokeWidth="1.5"
                />
              </g>
              {/* Left Resting Wing */}
              <path
                d="M 44 78 Q 30 88 38 102 Q 48 100 50 85 Z"
                fill="#4A90E2"
                stroke="#002D72"
                strokeWidth="1.5"
              />
              {/* Miniature Leather Travel Bag Strap */}
              <path d="M 52 70 Q 70 85 86 102" stroke="#92400E" strokeWidth="2.4" strokeLinecap="round" />
              <rect x="80" y="96" width="15" height="13" rx="3.5" fill="#D97706" stroke="#78350F" strokeWidth="1.2" />
              <circle cx="87.5" cy="102" r="1.5" fill="#FEF3C7" />
            </g>
          )}

          {/* POSE 2: SNAPPING (Taking a photo) */}
          {pose === 'snapping' && (
            <g id="chibi-pose-snapping">
              {/* Wings holding camera */}
              <path
                d="M 46 82 Q 54 74 64 78 M 94 82 Q 86 74 76 78"
                stroke="#4A90E2"
                strokeWidth="6"
                strokeLinecap="round"
              />
              {/* Mini Vintage Camera */}
              <g transform="translate(54, 70)">
                <rect x="0" y="0" width="32" height="22" rx="5" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
                <rect x="0" y="0" width="32" height="6" rx="2" fill="#94A3B8" />
                <rect x="5" y="-3" width="6" height="3" rx="1" fill="#EF4444" />
                <circle cx="16" cy="12" r="6.5" fill="#0284C7" stroke="#E2E8F0" strokeWidth="1.5" />
                <circle cx="15" cy="10.5" r="2" fill="#FFFFFF" opacity="0.9" />

                {/* Animated Camera Flash Burst */}
                <g className="anim-camera-flash">
                  <circle cx="30" cy="-2" r="10" fill="#FDE047" opacity="0.4" />
                  <path d="M 30 -8 L 32 -3 L 37 -4 L 33 0 L 37 3 L 32 3 L 31 7 L 28 4 L 24 6 L 26 1 Z" fill="#FEF08A" />
                </g>
              </g>
            </g>
          )}

          {/* POSE 3: CHEERING (Level-Up Joy) */}
          {pose === 'cheering' && (
            <g id="chibi-pose-cheering">
              {/* Both Wings Raised in Joy */}
              <path
                d="M 46 76 Q 24 55 26 40 Q 36 42 48 64 Z"
                fill="#4A90E2"
                stroke="#002D72"
                strokeWidth="1.5"
              />
              <path
                d="M 94 76 Q 116 55 114 40 Q 104 42 92 64 Z"
                fill="#4A90E2"
                stroke="#002D72"
                strokeWidth="1.5"
              />
              {/* Floating Animated Hearts & Stars */}
              <g className="anim-heart-float">
                <path d="M 22 28 Q 22 22 26 22 Q 30 22 30 26 Q 30 31 26 34 L 22 38 L 18 34 Q 14 31 14 26 Q 14 22 18 22 Q 22 22 22 28 Z" fill="#F43F5E" />
              </g>
              <g className="anim-heart-float" style={{ animationDelay: '0.6s' }}>
                <path d="M 116 26 L 119 32 L 125 32 L 120 36 L 122 42 L 116 38 L 110 42 L 112 36 L 107 32 L 113 32 Z" fill="#FBBF24" />
              </g>
            </g>
          )}

          {/* POSE 4: EXPLORER (With Map) */}
          {pose === 'explorer' && (
            <g id="chibi-pose-explorer">
              {/* Explorer Backpack on back */}
              <rect x="24" y="68" width="16" height="24" rx="5" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <path d="M 24 74 L 40 74" stroke="#B45309" strokeWidth="1.5" />
              
              {/* Rolled Treasure Map in hands */}
              <g transform="translate(50, 78)">
                <rect x="0" y="0" width="40" height="18" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" transform="rotate(-6)" />
                <line x1="8" y1="4" x2="32" y2="4" stroke="#B45309" strokeWidth="1.5" strokeDasharray="2 2" transform="rotate(-6)" />
                <path d="M 22 8 L 28 14 M 28 8 L 22 14" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" transform="rotate(-6)" />
              </g>

              {/* Wings holding map */}
              <path
                d="M 44 80 Q 48 94 54 90 M 96 80 Q 92 94 86 90"
                stroke="#4A90E2"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </g>
          )}

          {/* POSE 5: SCHOLAR (Reading JHU Textbook with Glasses) */}
          {pose === 'scholar' && (
            <g id="chibi-pose-scholar">
              {/* Wire-Rimmed Round Glasses */}
              <circle cx="56" cy="52" r="9.5" fill="none" stroke="#D97706" strokeWidth="1.6" />
              <circle cx="84" cy="52" r="9.5" fill="none" stroke="#D97706" strokeWidth="1.6" />
              <line x1="65.5" y1="52" x2="74.5" y2="52" stroke="#D97706" strokeWidth="1.8" />

              {/* Open JHU Veritas Book */}
              <g transform="translate(42, 74)">
                <rect x="0" y="0" width="56" height="26" rx="3" fill="#002D72" stroke="#001845" strokeWidth="1.2" />
                <path d="M 2 2 H 26 V 24 H 2 Z" fill="#FFFDF0" />
                <path d="M 30 2 H 54 V 24 H 30 Z" fill="#FFFDF0" />
                <line x1="28" y1="2" x2="28" y2="24" stroke="#D97706" strokeWidth="1.5" />
                {/* Book text lines */}
                <line x1="6" y1="7" x2="22" y2="7" stroke="#94A3B8" strokeWidth="1" />
                <line x1="6" y1="12" x2="22" y2="12" stroke="#94A3B8" strokeWidth="1" />
                <line x1="6" y1="17" x2="18" y2="17" stroke="#94A3B8" strokeWidth="1" />
                <line x1="34" y1="7" x2="50" y2="7" stroke="#94A3B8" strokeWidth="1" />
                <line x1="34" y1="12" x2="50" y2="12" stroke="#94A3B8" strokeWidth="1" />
                <line x1="34" y1="17" x2="44" y2="17" stroke="#94A3B8" strokeWidth="1" />
              </g>

              {/* Wings holding book */}
              <path d="M 42 78 Q 46 88 50 82 M 98 78 Q 94 88 90 82" stroke="#4A90E2" strokeWidth="5" strokeLinecap="round" />
            </g>
          )}

          {/* POSE 6: SNACKING (Eating Baltimore Berger Cookie with Heart Eyes) */}
          {pose === 'snacking' && (
            <g id="chibi-pose-snacking">
              {/* Kawaii Heart Eyes */}
              <g transform="translate(50, 46)">
                <path d="M 6 6 Q 6 2 9 2 Q 12 2 12 5 Q 12 9 6 12 Q 0 9 0 5 Q 0 2 3 2 Q 6 2 6 6 Z" fill="#F43F5E" />
              </g>
              <g transform="translate(78, 46)">
                <path d="M 6 6 Q 6 2 9 2 Q 12 2 12 5 Q 12 9 6 12 Q 0 9 0 5 Q 0 2 3 2 Q 6 2 6 6 Z" fill="#F43F5E" />
              </g>

              {/* Thick Chocolate-Dipped Baltimore Berger Cookie */}
              <g transform="translate(56, 72)">
                <circle cx="14" cy="14" r="14" fill="#FDE68A" stroke="#B45309" strokeWidth="1.2" />
                <path d="M 2 14 C 2 7 8 2 14 2 C 21 2 26 7 26 14 C 26 18 20 18 14 20 C 8 22 2 18 2 14 Z" fill="#451A03" />
                {/* Bite Mark */}
                <circle cx="24" cy="6" r="4" fill="#002D72" />
              </g>

              {/* Little Crumbs */}
              <circle cx="50" cy="94" r="1.5" fill="#451A03" />
              <circle cx="86" cy="92" r="1.2" fill="#B45309" />

              {/* Both wings holding cookie */}
              <path d="M 48 76 Q 58 84 62 78 M 92 76 Q 82 84 78 78" stroke="#4A90E2" strokeWidth="5" strokeLinecap="round" />
            </g>
          )}

        </g>
      </svg>
    </div>
  );
};
