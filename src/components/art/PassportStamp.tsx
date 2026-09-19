import React from 'react';

interface PassportStampProps {
  date?: string;
  visitedDate?: string;
  neighborhood?: string;
  size?: number;
  rotation?: number;
  color?: 'emerald' | 'sapphire' | 'crimson' | 'amber';
  className?: string;
  animate?: boolean;
}

export const PassportStamp: React.FC<PassportStampProps> = ({
  date = 'STAMPED',
  visitedDate,
  neighborhood = 'BALTIMORE',
  size = 80,
  rotation = -12,
  color = 'emerald',
  className = '',
  animate = false,
}) => {
  const displayDate = visitedDate || date;

  const colorMap = {
    emerald: {
      primary: '#059669',
      border: '#047857',
      bg: 'rgba(16, 185, 129, 0.08)',
      shadow: 'rgba(5, 150, 105, 0.25)',
    },
    sapphire: {
      primary: '#002D72',
      border: '#001845',
      bg: 'rgba(0, 45, 114, 0.08)',
      shadow: 'rgba(0, 45, 114, 0.25)',
    },
    crimson: {
      primary: '#DC2626',
      border: '#B91C1C',
      bg: 'rgba(220, 38, 38, 0.08)',
      shadow: 'rgba(220, 38, 38, 0.25)',
    },
    amber: {
      primary: '#D97706',
      border: '#B45309',
      bg: 'rgba(217, 119, 6, 0.08)',
      shadow: 'rgba(217, 119, 6, 0.25)',
    },
  };

  const activeColor = colorMap[color];

  return (
    <div
      className={`inline-flex items-center justify-center select-none pointer-events-none transform-gpu ${
        animate ? 'animate-stamp-slam' : ''
      } ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-95 transition-transform duration-300 hover:scale-105"
      >
        <style>
          {`
            @keyframes stampSlamDown {
              0% { transform: scale(2.0) rotate(-28deg); opacity: 0; }
              65% { transform: scale(0.96) rotate(${rotation}deg); opacity: 1; }
              85% { transform: scale(1.02) rotate(${rotation}deg); }
              100% { transform: scale(1) rotate(${rotation}deg); opacity: 0.95; }
            }
            .animate-stamp-slam {
              animation: stampSlamDown 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards;
              will-change: transform, opacity;
            }
          `}
        </style>

        {/* Group with Lightweight Hardware-Accelerated Vector Weathering */}
        <g>
          {/* Weathered Outer Stamped Circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke={activeColor.primary}
            strokeWidth="3.2"
            strokeDasharray="14 2 10 2 18 3"
            fill={activeColor.bg}
          />

          {/* Inner Stamped Ring */}
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke={activeColor.primary}
            strokeWidth="1.4"
            strokeDasharray="5 2"
          />

          {/* Subtle Authentic Ink Distress Specks (Zero filter overhead) */}
          <circle cx="16" cy="48" r="0.8" fill={activeColor.primary} opacity="0.6" />
          <circle cx="84" cy="52" r="0.7" fill={activeColor.primary} opacity="0.6" />
          <circle cx="50" cy="12" r="0.9" fill={activeColor.primary} opacity="0.5" />
          <circle cx="48" cy="88" r="0.8" fill={activeColor.primary} opacity="0.6" />

          {/* Curved Stamp Header Text Path */}
          <path
            id="textPathTop"
            d="M 18 50 A 32 32 0 0 1 82 50"
            fill="none"
          />
          <text fontSize="7" fontWeight="900" fill={activeColor.primary} letterSpacing="0.8">
            <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
              ★ JHU TRAVEL PASSPORT ★
            </textPath>
          </text>

          {/* Curved Stamp Footer Text Path */}
          <path
            id="textPathBottom"
            d="M 82 50 A 32 32 0 0 1 18 50"
            fill="none"
          />
          <text fontSize="6.5" fontWeight="900" fill={activeColor.primary} letterSpacing="1">
            <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
              {neighborhood.toUpperCase()} &bull; VISITED
            </textPath>
          </text>

          {/* Center Passport Icon / Verified Star & Hopkins Blue Jay Wing */}
          <g transform="translate(35, 36)">
            <path
              d="M 15 4 L 18 10 L 25 11 L 20 16 L 21 23 L 15 19 L 9 23 L 10 16 L 5 11 L 12 10 Z"
              fill={activeColor.primary}
              opacity="0.9"
            />
          </g>

          {/* Date Box / Stamp Entry */}
          <rect
            x="24"
            y="62"
            width="52"
            height="13"
            rx="3"
            stroke={activeColor.primary}
            strokeWidth="1.4"
            fill="none"
          />
          <text
            x="50"
            y="71.5"
            fontSize="7"
            fontWeight="900"
            fill={activeColor.primary}
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            {displayDate.toUpperCase()}
          </text>

          {/* Authentic Postal Cancellation Wavy Lines on Right */}
          <path
            d="M 88 38 Q 93 42 98 38 M 88 45 Q 93 49 98 45 M 88 52 Q 93 56 98 52"
            stroke={activeColor.primary}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>
      </svg>
    </div>
  );
};
