import React from 'react';

interface PassportStampProps {
  date?: string;
  visitedDate?: string;
  neighborhood?: string;
  size?: number;
  rotation?: number;
  color?: 'emerald' | 'sapphire' | 'crimson' | 'amber';
  className?: string;
}

export const PassportStamp: React.FC<PassportStampProps> = ({
  date = 'STAMPED',
  visitedDate,
  neighborhood = 'BALTIMORE',
  size = 80,
  rotation = -12,
  color = 'emerald',
  className = '',
}) => {
  const displayDate = visitedDate || date;
  const colorMap = {
    emerald: {
      primary: '#059669',
      border: '#047857',
      bg: 'rgba(16, 185, 129, 0.08)',
    },
    sapphire: {
      primary: '#002D72',
      border: '#001845',
      bg: 'rgba(0, 45, 114, 0.08)',
    },
    crimson: {
      primary: '#DC2626',
      border: '#B91C1C',
      bg: 'rgba(220, 38, 38, 0.08)',
    },
    amber: {
      primary: '#D97706',
      border: '#B45309',
      bg: 'rgba(217, 119, 6, 0.08)',
    },
  };

  const activeColor = colorMap[color];

  return (
    <div
      className={`inline-flex items-center justify-center select-none pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm opacity-90 transition-transform duration-300 hover:scale-105"
      >
        {/* Weathered Outer Stamped Circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={activeColor.primary}
          strokeWidth="3"
          strokeDasharray="12 2 8 2 16 3"
          fill={activeColor.bg}
        />

        {/* Inner Stamped Ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          stroke={activeColor.primary}
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />

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

        {/* Center Passport Icon / Verified Check & Date */}
        <g transform="translate(35, 36)">
          {/* Blue Jay Wing / Stamp Star */}
          <path
            d="M 15 4 L 18 10 L 25 11 L 20 16 L 21 23 L 15 19 L 9 23 L 10 16 L 5 11 L 12 10 Z"
            fill={activeColor.primary}
            opacity="0.85"
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
          strokeWidth="1.2"
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
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    </div>
  );
};
