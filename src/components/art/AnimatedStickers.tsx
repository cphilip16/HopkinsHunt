import React from 'react';

// ================= 1. ANIMATED BABY JAY STICKER =================
export const BabyJaySticker: React.FC<{ size?: number; className?: string }> = ({
  size = 54,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`} title="Baby Jay the Explorer">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md"
      >
        <style>
          {`
            @keyframes babyJayBlink {
              0%, 90%, 100% { transform: scaleY(1); }
              95% { transform: scaleY(0.1); }
            }
            @keyframes babyJayWingWave {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-18deg); }
            }
            @keyframes babyJayBob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            .animate-jay-blink {
              transform-origin: 50% 48%;
              animation: babyJayBlink 3.6s infinite ease-in-out;
            }
            .animate-jay-wing {
              transform-origin: 75px 60px;
              animation: babyJayWingWave 1.4s infinite ease-in-out;
            }
            .animate-jay-bob {
              animation: babyJayBob 2.2s infinite ease-in-out;
            }
          `}
        </style>

        <g className="animate-jay-bob">
          {/* Ambient Glow */}
          <circle cx="50" cy="52" r="38" fill="#68ACE5" opacity="0.12" />

          {/* Tail Feathers */}
          <path d="M 24 70 C 12 78 8 88 6 92 C 12 90 22 84 30 76 Z" fill="#002D72" />
          <path d="M 20 74 C 10 82 8 90 6 94 C 12 92 20 86 26 80 Z" fill="#68ACE5" />

          {/* Plump Body */}
          <ellipse cx="50" cy="62" rx="28" ry="24" fill="#002D72" />
          <ellipse cx="50" cy="68" rx="18" ry="14" fill="#FFFFFF" opacity="0.95" />

          {/* Round Head */}
          <circle cx="50" cy="40" r="24" fill="#4A90E2" />

          {/* White Cheek Patches */}
          <path d="M 32 40 C 30 50 38 56 48 55 C 42 48 38 43 32 40 Z" fill="#FFFFFF" />
          <path d="M 68 40 C 70 50 62 56 52 55 C 58 48 62 43 68 40 Z" fill="#FFFFFF" />

          {/* Rosy Kawaii Cheeks */}
          <circle cx="34" cy="46" r="4.5" fill="#FB7185" opacity="0.75" />
          <circle cx="66" cy="46" r="4.5" fill="#FB7185" opacity="0.75" />

          {/* Blinking Kawaii Eyes */}
          <g className="animate-jay-blink">
            <circle cx="40" cy="38" r="5" fill="#0F172A" />
            <circle cx="38.5" cy="36.5" r="2.2" fill="#FFFFFF" />
            <circle cx="41.5" cy="39.5" r="0.9" fill="#FFFFFF" />

            <circle cx="60" cy="38" r="5" fill="#0F172A" />
            <circle cx="58.5" cy="36.5" r="2.2" fill="#FFFFFF" />
            <circle cx="61.5" cy="39.5" r="0.9" fill="#FFFFFF" />
          </g>

          {/* Yellow Beak */}
          <path d="M 46 41 Q 50 39 54 41 Q 50 48 46 41 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="0.8" />

          {/* Explorer Safari Hat */}
          <g transform="translate(34, 6)">
            <ellipse cx="16" cy="14" rx="18" ry="4.5" fill="#FDE68A" stroke="#B45309" strokeWidth="1" />
            <path d="M 6 14 Q 6 4 16 4 Q 26 4 26 14 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            <path d="M 6 12 Q 16 15 26 12 L 26 14 Q 16 17 6 14 Z" fill="#002D72" />
          </g>

          {/* Left Wing (Resting) */}
          <path d="M 32 56 Q 22 64 26 74 Q 34 72 36 62 Z" fill="#002D72" />

          {/* Right Wing (Waving Animated Wing) */}
          <g className="animate-jay-wing">
            <path d="M 68 56 Q 84 46 86 36 Q 80 34 72 48 Z" fill="#4A90E2" stroke="#002D72" strokeWidth="1.2" />
          </g>

          {/* Little Yellow Feet */}
          <path d="M 40 86 L 37 92 M 40 86 L 40 93 M 40 86 L 43 92" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <path d="M 60 86 L 57 92 M 60 86 L 60 93 M 60 86 L 63 92" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

// ================= 2. ANIMATED BALTIMORE CRAB STICKER =================
export const MarylandCrabSticker: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`} title="Charm City Blue Crab">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <style>
          {`
            @keyframes clawLeftWave {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-14deg); }
            }
            @keyframes clawRightWave {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(14deg); }
            }
            @keyframes crabBlink {
              0%, 88%, 100% { transform: scaleY(1); }
              94% { transform: scaleY(0.15); }
            }
            .animate-claw-left {
              transform-origin: 26px 45px;
              animation: clawLeftWave 1.6s infinite ease-in-out;
            }
            .animate-claw-right {
              transform-origin: 74px 45px;
              animation: clawRightWave 1.6s infinite ease-in-out;
            }
            .animate-crab-eyes {
              transform-origin: 50% 32px;
              animation: crabBlink 3.2s infinite ease-in-out;
            }
          `}
        </style>

        {/* Legs Behind Body */}
        <g stroke="#E11D48" strokeWidth="3" strokeLinecap="round">
          {/* Left Legs */}
          <path d="M 30 55 L 14 52 L 8 62" />
          <path d="M 30 63 L 15 65 L 10 76" />
          <path d="M 32 71 L 18 78 L 14 88" />
          {/* Right Legs */}
          <path d="M 70 55 L 86 52 L 92 62" />
          <path d="M 70 63 L 85 65 L 90 76" />
          <path d="M 68 71 L 82 78 L 86 88" />
        </g>

        {/* Animated Big Left Pincer Claw */}
        <g className="animate-claw-left">
          <path d="M 34 48 C 22 36 12 28 8 20 C 14 18 24 24 30 36 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1.2" />
          {/* Pincer Thumb */}
          <path d="M 12 18 C 16 12 22 14 26 22" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Animated Big Right Pincer Claw */}
        <g className="animate-claw-right">
          <path d="M 66 48 C 78 36 88 28 92 20 C 86 18 76 24 70 36 Z" fill="#E11D48" stroke="#9F1239" strokeWidth="1.2" />
          {/* Pincer Thumb */}
          <path d="M 88 18 C 84 12 78 14 74 22" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Crab Shell Carapace with Maryland Heritage Pattern */}
        <ellipse cx="50" cy="60" rx="26" ry="20" fill="#E11D48" stroke="#9F1239" strokeWidth="1.5" />
        
        {/* Subtle Maryland Heraldic Shield Inlay on Back */}
        <path d="M 40 50 H 60 V 68 C 60 72 50 76 50 76 C 50 76 40 72 40 68 Z" fill="#F59E0B" opacity="0.8" />
        <path d="M 50 50 V 76 M 40 63 H 60" stroke="#000000" strokeWidth="1.2" opacity="0.6" />

        {/* Eyestalks & Cute Blinking Eyes */}
        <g className="animate-crab-eyes">
          <line x1="42" y1="46" x2="42" y2="34" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="42" cy="32" r="5.5" fill="#FFFFFF" stroke="#9F1239" strokeWidth="1" />
          <circle cx="43" cy="31" r="2.8" fill="#0F172A" />
          <circle cx="42" cy="30" r="1.2" fill="#FFFFFF" />

          <line x1="58" y1="46" x2="58" y2="34" stroke="#E11D48" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="58" cy="32" r="5.5" fill="#FFFFFF" stroke="#9F1239" strokeWidth="1" />
          <circle cx="57" cy="31" r="2.8" fill="#0F172A" />
          <circle cx="56" cy="30" r="1.2" fill="#FFFFFF" />
        </g>

        {/* Cute Smiling Mouth */}
        <path d="M 46 64 Q 50 68 54 64" stroke="#7F1D1D" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
};

// ================= 3. ANIMATED GILMAN CLOCK TOWER STICKER =================
export const GilmanClockSticker: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`} title="Gilman Hall Clock Tower">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <style>
          {`
            @keyframes clockHandMinute {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes bellChimeGlow {
              0%, 100% { opacity: 0.3; transform: scale(0.9); }
              50% { opacity: 0.9; transform: scale(1.1); }
            }
            .animate-clock-minute {
              transform-origin: 50px 62px;
              animation: clockHandMinute 12s linear infinite;
            }
            .animate-chime-glow {
              transform-origin: 50px 24px;
              animation: bellChimeGlow 2.5s infinite ease-in-out;
            }
          `}
        </style>

        {/* Chime Sparkles */}
        <circle cx="50" cy="24" r="18" fill="#FDE047" className="animate-chime-glow" />

        {/* Gilman Tower Spire & Weathervane */}
        <path d="M 50 4 L 50 14" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="50" cy="8" r="2.5" fill="#F59E0B" />
        <path d="M 46 8 L 54 8" stroke="#F59E0B" strokeWidth="1.2" />

        {/* Domed Cupola */}
        <path d="M 38 24 Q 50 12 62 24 Z" fill="#FDE68A" stroke="#B45309" strokeWidth="1.2" />

        {/* Colonnaded Bell Lantern */}
        <rect x="40" y="24" width="20" height="14" fill="#FEF3C7" stroke="#B45309" strokeWidth="1" />
        <line x1="44" y1="24" x2="44" y2="38" stroke="#92400E" strokeWidth="1.5" />
        <line x1="50" y1="24" x2="50" y2="38" stroke="#92400E" strokeWidth="1.5" />
        <line x1="56" y1="24" x2="56" y2="38" stroke="#92400E" strokeWidth="1.5" />

        {/* Georgian Brick Base */}
        <rect x="34" y="38" width="32" height="56" rx="2" fill="#991B1B" stroke="#7F1D1D" strokeWidth="1.5" />

        {/* White Trim Cornice */}
        <rect x="32" y="38" width="36" height="5" rx="1" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <rect x="30" y="90" width="40" height="6" rx="1" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

        {/* Clock Face Housing */}
        <circle cx="50" cy="62" r="14" fill="#FFFFFF" stroke="#002D72" strokeWidth="2.2" />
        <circle cx="50" cy="62" r="12" fill="#FAF5FF" />

        {/* Hour Markings */}
        <line x1="50" y1="50" x2="50" y2="52" stroke="#002D72" strokeWidth="1.5" />
        <line x1="50" y1="72" x2="50" y2="74" stroke="#002D72" strokeWidth="1.5" />
        <line x1="38" y1="62" x2="40" y2="62" stroke="#002D72" strokeWidth="1.5" />
        <line x1="60" y1="62" x2="62" y2="62" stroke="#002D72" strokeWidth="1.5" />

        {/* Hour Hand (Static 10:10) */}
        <line x1="50" y1="62" x2="44" y2="58" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" />

        {/* Animated Minute Hand */}
        <line
          x1="50"
          y1="62"
          x2="50"
          y2="53"
          stroke="#002D72"
          strokeWidth="1.4"
          strokeLinecap="round"
          className="animate-clock-minute"
        />

        {/* Center Pivot Pin */}
        <circle cx="50" cy="62" r="2" fill="#D97706" />
      </svg>
    </div>
  );
};

// ================= 4. ANIMATED ROTATING COMPASS ROSE STICKER =================
export const CompassRoseSticker: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`} title="Vintage Brass Compass">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <style>
          {`
            @keyframes needleWobble {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-12deg); }
              75% { transform: rotate(8deg); }
            }
            .animate-compass-needle {
              transform-origin: 50px 50px;
              animation: needleWobble 4s ease-in-out infinite;
            }
          `}
        </style>

        {/* Brass Outer Bezel */}
        <circle cx="50" cy="50" r="44" fill="#FEF3C7" stroke="#B45309" strokeWidth="3" />
        <circle cx="50" cy="50" r="40" stroke="#D97706" strokeWidth="1" strokeDasharray="2 2" />

        {/* Cardinal Markers */}
        <text x="50" y="20" fontSize="8" fontWeight="900" fill="#DC2626" textAnchor="middle">N</text>
        <text x="82" y="53" fontSize="8" fontWeight="900" fill="#002D72" textAnchor="middle">E</text>
        <text x="50" y="85" fontSize="8" fontWeight="900" fill="#002D72" textAnchor="middle">S</text>
        <text x="18" y="53" fontSize="8" fontWeight="900" fill="#002D72" textAnchor="middle">W</text>

        {/* 8-Point Compass Star Underlay */}
        <path d="M 50 24 L 54 46 L 76 50 L 54 54 L 50 76 L 46 54 L 24 50 L 46 46 Z" fill="#FDE68A" opacity="0.6" />

        {/* Animated Magnetic Needle */}
        <g className="animate-compass-needle">
          {/* North Point (Red) */}
          <polygon points="50,16 55,50 45,50" fill="#DC2626" stroke="#991B1B" strokeWidth="0.8" />
          <polygon points="50,16 50,50 45,50" fill="#EF4444" />

          {/* South Point (Navy Blue) */}
          <polygon points="50,84 55,50 45,50" fill="#002D72" stroke="#001845" strokeWidth="0.8" />
          <polygon points="50,84 50,50 45,50" fill="#1D4ED8" />

          {/* Center Brass Gem */}
          <circle cx="50" cy="50" r="5" fill="#D97706" stroke="#78350F" strokeWidth="1" />
          <circle cx="50" cy="50" r="2.2" fill="#FEF3C7" />
        </g>
      </svg>
    </div>
  );
};

// ================= 5. ANIMATED STEAMING COFFEE STICKER =================
export const SteamingCoffeeSticker: React.FC<{ size?: number; className?: string }> = ({
  size = 44,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`} title="Warm Cafe Coffee">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <style>
          {`
            @keyframes steamFloat1 {
              0% { opacity: 0; transform: translateY(0) scaleX(0.8); }
              50% { opacity: 0.8; transform: translateY(-8px) scaleX(1.1); }
              100% { opacity: 0; transform: translateY(-16px) scaleX(0.9); }
            }
            @keyframes steamFloat2 {
              0% { opacity: 0; transform: translateY(0) scaleX(0.8); }
              50% { opacity: 0.8; transform: translateY(-10px) scaleX(1.2); }
              100% { opacity: 0; transform: translateY(-20px) scaleX(1); }
            }
            .animate-steam-1 {
              animation: steamFloat1 2.2s infinite ease-out;
            }
            .animate-steam-2 {
              animation: steamFloat2 2.6s 0.6s infinite ease-out;
            }
          `}
        </style>

        {/* Rising Steam Ribbons */}
        <g stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" fill="none">
          <path d="M 42 34 Q 38 24 44 14" className="animate-steam-1" />
          <path d="M 52 32 Q 58 20 52 10" className="animate-steam-2" />
        </g>

        {/* Saucer */}
        <ellipse cx="48" cy="84" rx="34" ry="6" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* Ceramic Mug Body */}
        <path d="M 26 44 L 30 76 Q 30 82 48 82 Q 66 82 66 76 L 70 44 Z" fill="#002D72" stroke="#001845" strokeWidth="1.8" />
        
        {/* Mug Rim */}
        <ellipse cx="48" cy="44" rx="22" ry="6" fill="#68ACE5" stroke="#001845" strokeWidth="1.5" />
        <ellipse cx="48" cy="45" rx="19" ry="4.5" fill="#78350F" />

        {/* Mug Handle */}
        <path d="M 68 50 Q 84 50 82 66 Q 80 74 65 72" stroke="#002D72" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <path d="M 68 50 Q 84 50 82 66 Q 80 74 65 72" stroke="#68ACE5" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Heart Deco on Mug */}
        <path d="M 48 64 L 44 60 Q 42 56 46 56 Q 48 56 48 58 Q 48 56 50 56 Q 54 56 52 60 Z" fill="#F1C400" />
      </svg>
    </div>
  );
};

// ================= 6. ANIMATED AIRMAIL ENVELOPE STICKER =================
export const LuggageAirmailSticker: React.FC<{ size?: number; className?: string }> = ({
  size = 46,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`} title="Hopkins Airmail Dispatch">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-sm"
      >
        <style>
          {`
            @keyframes wingFlapLeft {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-24deg); }
            }
            @keyframes wingFlapRight {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(24deg); }
            }
            .animate-wing-left {
              transform-origin: 22px 50px;
              animation: wingFlapLeft 1.2s infinite ease-in-out;
            }
            .animate-wing-right {
              transform-origin: 78px 50px;
              animation: wingFlapRight 1.2s infinite ease-in-out;
            }
          `}
        </style>

        {/* Left Aviator Wing */}
        <g className="animate-wing-left">
          <path d="M 22 50 C 6 42 2 28 8 22 C 16 22 22 34 24 44 Z" fill="#68ACE5" stroke="#002D72" strokeWidth="1.2" />
        </g>

        {/* Right Aviator Wing */}
        <g className="animate-wing-right">
          <path d="M 78 50 C 94 42 98 28 92 22 C 84 22 78 34 76 44 Z" fill="#68ACE5" stroke="#002D72" strokeWidth="1.2" />
        </g>

        {/* Envelope Body */}
        <rect x="22" y="34" width="56" height="38" rx="4" fill="#FAF7EE" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* Airmail Red & Blue Border Strips */}
        <g strokeWidth="2">
          <line x1="24" y1="36" x2="30" y2="36" stroke="#DC2626" />
          <line x1="32" y1="36" x2="38" y2="36" stroke="#002D72" />
          <line x1="40" y1="36" x2="46" y2="36" stroke="#DC2626" />
          <line x1="48" y1="36" x2="54" y2="36" stroke="#002D72" />
          <line x1="56" y1="36" x2="62" y2="36" stroke="#DC2626" />
          <line x1="64" y1="36" x2="70" y2="36" stroke="#002D72" />
          <line x1="72" y1="36" x2="76" y2="36" stroke="#DC2626" />
        </g>

        {/* Envelope Flap Lines */}
        <path d="M 23 35 L 50 56 L 77 35" stroke="#94A3B8" strokeWidth="1.2" fill="none" />

        {/* Mini Gold Postage Stamp */}
        <rect x="58" y="42" width="14" height="12" fill="#FDE68A" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="65" cy="48" r="3" fill="#002D72" />
      </svg>
    </div>
  );
};

// ================= 7. ANIMATED SPARKLE STARS =================
export const SparkleStarsSticker: React.FC<{ size?: number; className?: string }> = ({
  size = 32,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`
            @keyframes starGlint {
              0%, 100% { transform: scale(0.85) rotate(0deg); opacity: 0.8; }
              50% { transform: scale(1.15) rotate(180deg); opacity: 1; }
            }
            .animate-star-glint {
              transform-origin: 25px 25px;
              animation: starGlint 2.8s infinite ease-in-out;
            }
          `}
        </style>
        <g className="animate-star-glint">
          <path
            d="M 25 5 L 29 19 L 43 25 L 29 31 L 25 45 L 21 31 L 7 25 L 21 19 Z"
            fill="url(#starGold)"
          />
        </g>
        <defs>
          <linearGradient id="starGold" x1="5" y1="5" x2="45" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
