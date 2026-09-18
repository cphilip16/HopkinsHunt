import React from 'react';

export type CuteMascotPose = 'waving' | 'snapping' | 'cheering' | 'explorer';

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
      {/* Optional Speech / Thought Bubble */}
      {activeBubble && (
        <div className="mb-1.5 px-3 py-1 rounded-2xl bg-white text-slate-800 text-[11px] font-extrabold shadow-md border border-sky-100 flex items-center space-x-1 animate-bounce">
          <span>✨</span>
          <span>{activeBubble}</span>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white border-b border-r border-sky-100 rotate-45" />
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
        <defs>
          <linearGradient id="chibiBody" x1="20" y1="20" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8AC6F9" />
            <stop offset="60%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
          <linearGradient id="chibiHat" x1="40" y1="10" x2="100" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <radialGradient id="rosyCheek" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FB7185" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FB7185" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ================= BABY BLUE JAY BASE ================= */}
        
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

        {/* Big Sparkling Kawaii Eyes */}
        {/* Left Eye */}
        <circle cx="56" cy="52" r="7.5" fill="#0F172A" />
        <circle cx="54" cy="50" r="3.2" fill="#FFFFFF" />
        <circle cx="58.5" cy="54" r="1.4" fill="#FFFFFF" />

        {/* Right Eye */}
        <circle cx="84" cy="52" r="7.5" fill="#0F172A" />
        <circle cx="82" cy="50" r="3.2" fill="#FFFFFF" />
        <circle cx="86.5" cy="54" r="1.4" fill="#FFFFFF" />

        {/* Cute Beak */}
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

        {/* Mini Explorer Hat on Top */}
        <g transform="translate(48, 8)">
          {/* Hat Brim */}
          <ellipse cx="22" cy="18" rx="24" ry="6" fill="url(#chibiHat)" stroke="#B45309" strokeWidth="1.2" />
          {/* Hat Crown */}
          <path d="M 8 18 Q 8 6 22 6 Q 36 6 36 18 Z" fill="url(#chibiHat)" stroke="#B45309" strokeWidth="1.2" />
          {/* Hat Ribbon band in JHU Blue */}
          <path d="M 8 16 Q 22 20 36 16 L 36 18 Q 22 22 8 18 Z" fill="#002D72" />
        </g>

        {/* Little Yellow Bird Feet */}
        <path d="M 56 118 L 52 126 M 56 118 L 56 127 M 56 118 L 60 126" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 84 118 L 80 126 M 84 118 L 84 127 M 84 118 L 88 126" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

        {/* ================= POSE DETAILS ================= */}

        {/* POSE 1: WAVING */}
        {pose === 'waving' && (
          <g id="chibi-pose-waving">
            {/* Waving Right Wing */}
            <path
              d="M 94 76 Q 116 60 118 46 Q 110 44 98 65 Z"
              fill="#4A90E2"
              stroke="#002D72"
              strokeWidth="1.5"
            />
            {/* Left Resting Wing */}
            <path
              d="M 44 78 Q 30 88 38 102 Q 48 100 50 85 Z"
              fill="#4A90E2"
              stroke="#002D72"
              strokeWidth="1.5"
            />
            {/* Miniature Brown Travel Bag Strap */}
            <path d="M 52 70 Q 70 85 86 102" stroke="#92400E" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="80" y="96" width="14" height="12" rx="3" fill="#D97706" stroke="#78350F" strokeWidth="1.2" />
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
            {/* Mini Vintage Camera in Hands */}
            <g transform="translate(54, 70)">
              {/* Camera Body */}
              <rect x="0" y="0" width="32" height="22" rx="5" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
              {/* Silver top plate */}
              <rect x="0" y="0" width="32" height="6" rx="2" fill="#94A3B8" />
              {/* Shutter button */}
              <rect x="5" y="-3" width="6" height="3" rx="1" fill="#EF4444" />
              {/* Lens */}
              <circle cx="16" cy="12" r="6.5" fill="#0284C7" stroke="#E2E8F0" strokeWidth="1.5" />
              <circle cx="15" cy="10.5" r="2" fill="#FFFFFF" opacity="0.9" />
              {/* Camera Flash Sparkle */}
              <path d="M 30 -6 L 33 -2 L 37 -3 L 34 1 L 38 4 L 33 4 L 32 8 L 29 5 L 25 7 L 27 2 Z" fill="#FDE047" />
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
            {/* Floating Sparkles & Hearts */}
            <path d="M 22 28 Q 22 22 26 22 Q 30 22 30 26 Q 30 31 26 34 L 22 38 L 18 34 Q 14 31 14 26 Q 14 22 18 22 Q 22 22 22 28 Z" fill="#F43F5E" />
            <path d="M 116 26 L 119 32 L 125 32 L 120 36 L 122 42 L 116 38 L 110 42 L 112 36 L 107 32 L 113 32 Z" fill="#FBBF24" />
          </g>
        )}

        {/* POSE 4: EXPLORER (With Map) */}
        {pose === 'explorer' && (
          <g id="chibi-pose-explorer">
            {/* Backpack on back */}
            <rect x="24" y="68" width="16" height="24" rx="5" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
            <path d="M 24 74 L 40 74" stroke="#B45309" strokeWidth="1.5" />
            
            {/* Rolled Treasure Map in hands */}
            <g transform="translate(50, 78)">
              <rect x="0" y="0" width="40" height="18" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" transform="rotate(-6)" />
              <line x1="8" y1="4" x2="32" y2="4" stroke="#B45309" strokeWidth="1.5" strokeDasharray="2 2" transform="rotate(-6)" />
              {/* Red X on map */}
              <path d="M 22 8 L 28 14 M 28 8 L 22 14" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" transform="rotate(-6)" />
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

      </svg>
    </div>
  );
};
