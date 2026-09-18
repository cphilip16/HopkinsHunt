import React from 'react';

interface HopkinsShieldProps {
  className?: string;
  size?: number;
  showMotto?: boolean;
}

export const HopkinsShield: React.FC<HopkinsShieldProps> = ({
  className = '',
  size = 40,
  showMotto = false,
}) => {
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={size}
        height={size * 1.18}
        viewBox="0 0 100 118"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <defs>
          <linearGradient id="shieldBg" x1="0" y1="0" x2="100" y2="118" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#001D4A" />
            <stop offset="50%" stopColor="#002D72" />
            <stop offset="100%" stopColor="#0A479D" />
          </linearGradient>
          <linearGradient id="goldAccent" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF1A8" />
            <stop offset="50%" stopColor="#F1C400" />
            <stop offset="100%" stopColor="#D4A100" />
          </linearGradient>
          <linearGradient id="spiritGradient" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#68ACE5" />
            <stop offset="100%" stopColor="#A4D2F6" />
          </linearGradient>
        </defs>

        {/* Outer Shield Outline */}
        <path
          d="M 50 3 Q 86 3 94 20 C 94 65 75 96 50 115 C 25 96 6 65 6 20 Q 14 3 50 3 Z"
          fill="url(#shieldBg)"
          stroke="url(#goldAccent)"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Border Inset */}
        <path
          d="M 50 8 Q 82 8 89 23 C 89 62 72 90 50 107 C 28 90 11 62 11 23 Q 18 8 50 8 Z"
          fill="none"
          stroke="#68ACE5"
          strokeWidth="1.2"
          opacity="0.75"
        />

        {/* Heraldic Chief / Upper Division: Sunburst / Academic Laurel */}
        <path
          d="M 12 36 Q 50 38 88 36"
          stroke="url(#goldAccent)"
          strokeWidth="2"
        />

        {/* Laurel Branches (Left & Right) */}
        <path
          d="M 28 20 Q 22 26 28 32 M 72 20 Q 78 26 72 32"
          stroke="url(#goldAccent)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* Center Top: 1876 Foundation Stars */}
        <circle cx="40" cy="22" r="2.2" fill="#F1C400" />
        <circle cx="50" cy="18" r="2.8" fill="#F1C400" />
        <circle cx="60" cy="22" r="2.2" fill="#F1C400" />

        {/* The Open Veritas Book (Center) */}
        <g transform="translate(23, 44)">
          {/* Book Spine & Pages Left */}
          <path
            d="M 27 6 C 21 3 8 2 2 5 L 2 28 C 8 25 21 26 27 29 Z"
            fill="#FFFFFF"
            stroke="#002D72"
            strokeWidth="1.5"
          />
          {/* Book Spine & Pages Right */}
          <path
            d="M 27 6 C 33 3 46 2 52 5 L 52 28 C 46 25 33 26 27 29 Z"
            fill="#F4F8FD"
            stroke="#002D72"
            strokeWidth="1.5"
          />
          {/* Book Center Binding */}
          <line x1="27" y1="5" x2="27" y2="29" stroke="#F1C400" strokeWidth="2" />

          {/* Veritas Text Lines */}
          <line x1="7" y1="11" x2="22" y2="12" stroke="#002D72" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="7" y1="16" x2="22" y2="17" stroke="#002D72" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="7" y1="21" x2="19" y2="22" stroke="#002D72" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

          <line x1="32" y1="12" x2="47" y2="11" stroke="#002D72" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="32" y1="17" x2="47" y2="16" stroke="#002D72" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <line x1="32" y1="22" x2="44" y2="21" stroke="#002D72" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        </g>

        {/* Terrestrial Globe & Meridian (Bottom Center) */}
        <circle cx="50" cy="88" r="12" fill="#001845" stroke="url(#goldAccent)" strokeWidth="1.8" />
        <ellipse cx="50" cy="88" rx="6" ry="12" fill="none" stroke="#68ACE5" strokeWidth="1.2" opacity="0.8" />
        <line x1="38" y1="88" x2="62" y2="88" stroke="#68ACE5" strokeWidth="1.2" opacity="0.8" />
        <line x1="50" y1="76" x2="50" y2="100" stroke="#F1C400" strokeWidth="1.2" />

      </svg>

      {showMotto && (
        <span className="text-[9px] font-black uppercase tracking-widest text-hopkins-spirit mt-1 font-serif">
          Veritas Vos Liberabit
        </span>
      )}
    </div>
  );
};
