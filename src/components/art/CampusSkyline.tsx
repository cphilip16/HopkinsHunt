import React from 'react';

interface CampusSkylineProps {
  className?: string;
  variant?: 'silhouette' | 'detailed';
  opacity?: number;
}

export const CampusSkyline: React.FC<CampusSkylineProps> = ({
  className = '',
  variant = 'detailed',
  opacity = 0.18,
}) => {
  return (
    <div
      className={`w-full pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 1000 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#68ACE5" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
        </defs>

        {/* Far Background: Baltimore Skyline Silhouettes (Inner Harbor & Downtown) */}
        <g fill="currentColor" opacity="0.35">
          {/* Downtown Office Towers */}
          <rect x="740" y="90" width="35" height="150" />
          <rect x="785" y="60" width="45" height="180" />
          <polygon points="785,60 807,35 830,60" />
          <rect x="840" y="80" width="40" height="160" />
          <rect x="890" y="105" width="55" height="135" />
          <polygon points="917,105 917,65 921,65 921,105" />
          <rect x="955" y="120" width="45" height="120" />
        </g>

        {/* Midground: Johns Hopkins Landmarks & Baltimore Monuments */}
        <g fill="currentColor" opacity="0.65">
          
          {/* 1. Washington Monument (Mount Vernon) */}
          <rect x="180" y="80" width="16" height="160" />
          <polygon points="175,80 188,40 201,80" />
          <circle cx="188" cy="35" r="5" />
          <rect x="165" y="220" width="46" height="20" />

          {/* 2. Johns Hopkins Hospital Historic Billings Dome (East Baltimore) */}
          <path
            d="M 620 240 L 620 150 L 635 150 L 635 120 Q 665 80 695 120 L 695 150 L 710 150 L 710 240 Z"
          />
          {/* Dome Cupola Spire */}
          <polygon points="660,82 665,45 670,82" />
          <circle cx="665" cy="42" r="3" />
          <rect x="642" y="125" width="46" height="6" />

          {/* 3. Homewood Campus: GILMAN HALL CLOCK TOWER (The Primary Hero Monument) */}
          <g id="gilman-hall">
            {/* Gilman Base Hall Structure */}
            <rect x="360" y="160" width="200" height="80" />
            <polygon points="340,160 460,115 580,160" />

            {/* Main Tower Tier 1 */}
            <rect x="430" y="110" width="60" height="50" />
            
            {/* Tower Tier 2 with Arches */}
            <rect x="438" y="75" width="44" height="35" />
            <circle cx="460" cy="92" r="10" fill="#FFFFFF" opacity="0.4" />
            {/* Clock Hands */}
            <line x1="460" y1="92" x2="460" y2="86" stroke="currentColor" strokeWidth="2" />
            <line x1="460" y1="92" x2="465" y2="92" stroke="currentColor" strokeWidth="2" />

            {/* Tower Tier 3 (Bell Tower Open Columns) */}
            <rect x="444" y="48" width="32" height="27" />
            <line x1="448" y1="48" x2="448" y2="75" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
            <line x1="460" y1="48" x2="460" y2="75" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />
            <line x1="472" y1="48" x2="472" y2="75" stroke="#FFFFFF" strokeWidth="2" opacity="0.5" />

            {/* Octagonal Cupola Dome & Weather Vane */}
            <path d="M 442 48 Q 460 25 478 48 Z" />
            <line x1="460" y1="26" x2="460" y2="6" stroke="currentColor" strokeWidth="2.5" />
            <polygon points="460,10 472,14 460,18" />
          </g>

          {/* 4. Georgian Brick Academic Colonnades (Homewood Quad) */}
          <rect x="250" y="175" width="80" height="65" />
          <polygon points="245,175 290,150 335,175" />
          <line x1="265" y1="185" x2="265" y2="235" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" />
          <line x1="290" y1="185" x2="290" y2="235" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" />
          <line x1="315" y1="185" x2="315" y2="235" stroke="#FFFFFF" strokeWidth="3" opacity="0.4" />

          {/* 5. Baltimore Waterfront / Historic Ships Mast Silhouettes */}
          <line x1="70" y1="110" x2="70" y2="240" stroke="currentColor" strokeWidth="3" />
          <line x1="95" y1="90" x2="95" y2="240" stroke="currentColor" strokeWidth="3.5" />
          <line x1="120" y1="120" x2="120" y2="240" stroke="currentColor" strokeWidth="2.5" />
          {/* Mast Crossbars */}
          <line x1="75" y1="120" x2="115" y2="120" stroke="currentColor" strokeWidth="2" />
          <line x1="80" y1="145" x2="110" y2="145" stroke="currentColor" strokeWidth="2" />
        </g>

        {/* Ground Line / Patapsco Harbor & Homewood Green Ground */}
        <line x1="0" y1="238" x2="1000" y2="238" stroke="currentColor" strokeWidth="4" />
      </svg>
    </div>
  );
};

