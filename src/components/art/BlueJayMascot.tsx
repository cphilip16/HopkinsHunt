import React from 'react';

export type MascotPose = 'explorer' | 'scholar' | 'cheer' | 'flight';

interface BlueJayMascotProps {
  pose?: MascotPose;
  className?: string;
  size?: number;
}

export const BlueJayMascot: React.FC<BlueJayMascotProps> = ({
  pose = 'explorer',
  className = '',
  size = 120,
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md"
      >
        <defs>
          <linearGradient id="jayPrimary" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#68ACE5" />
            <stop offset="40%" stopColor="#0056B3" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
          <linearGradient id="jayCrest" x1="60" y1="10" x2="110" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#82C2F8" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
          <linearGradient id="jayBeak" x1="100" y1="45" x2="145" y2="65" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <linearGradient id="jaySweater" x1="40" y1="80" x2="120" y2="150" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#002D72" />
            <stop offset="100%" stopColor="#001845" />
          </linearGradient>
          <linearGradient id="goldTrim" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="100%" stopColor="#F1C400" />
          </linearGradient>
        </defs>

        {/* ================= POSE: EXPLORER ================= */}
        {pose === 'explorer' && (
          <g id="pose-explorer">
            {/* Tail Feathers */}
            <path
              d="M 40 120 L 15 145 L 30 148 L 45 128 Z"
              fill="#002D72"
              stroke="#68ACE5"
              strokeWidth="2"
            />
            <path
              d="M 35 125 L 10 155 L 25 156 L 40 132 Z"
              fill="#68ACE5"
            />

            {/* Blue Jay Head Crest (Feather Crown) */}
            <path
              d="M 50 48 C 45 28 55 12 75 14 C 68 22 72 32 78 40 Z"
              fill="url(#jayCrest)"
              stroke="#001D4A"
              strokeWidth="1.5"
            />
            <path
              d="M 62 42 C 58 22 70 8 92 10 C 85 18 88 28 92 36 Z"
              fill="url(#jayCrest)"
              stroke="#001D4A"
              strokeWidth="1.5"
            />

            {/* Head Base */}
            <circle cx="85" cy="55" r="30" fill="url(#jayPrimary)" />

            {/* White Cheek / Face Patch */}
            <path
              d="M 72 52 C 70 68 82 78 98 76 C 90 62 86 52 72 52 Z"
              fill="#FFFFFF"
            />

            {/* Black Facial Mask / Eye Stripe */}
            <path
              d="M 68 46 C 78 44 94 48 108 52 C 104 56 90 54 75 52 Z"
              fill="#1E293B"
            />
            {/* Eye */}
            <circle cx="90" cy="50" r="5.5" fill="#FFFFFF" />
            <circle cx="91.5" cy="49.5" r="3.2" fill="#0F172A" />
            <circle cx="93" cy="48" r="1.2" fill="#FFFFFF" />

            {/* Strong Blue Jay Beak */}
            <path
              d="M 105 48 L 136 56 L 105 66 Z"
              fill="url(#jayBeak)"
              stroke="#111827"
              strokeWidth="1"
            />
            <line x1="105" y1="56" x2="132" y2="56" stroke="#4B5563" strokeWidth="1" />

            {/* Body: Hopkins Heritage Varsity Sweater */}
            <path
              d="M 52 82 C 45 100 48 130 65 138 C 90 142 118 136 122 105 C 124 92 115 82 98 80 Z"
              fill="url(#jaySweater)"
              stroke="#001845"
              strokeWidth="2"
            />

            {/* Sweater Collar (Spirit Blue & Gold Stripe) */}
            <path
              d="M 70 80 Q 86 92 102 80"
              stroke="#68ACE5"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M 74 84 Q 86 94 98 84"
              stroke="#F1C400"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Gold "JHU" Crest on Sweater Chest */}
            <g transform="translate(80, 96)">
              <rect x="-14" y="-2" width="28" height="22" rx="6" fill="#001845" stroke="#F1C400" strokeWidth="1.5" />
              <text
                x="0"
                y="14"
                fill="#F1C400"
                fontSize="13"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                JHU
              </text>
            </g>

            {/* Explorer Binoculars draped around neck */}
            <g transform="translate(68, 118)">
              {/* Strap */}
              <path d="M 0 -36 Q 16 -20 32 -36" fill="none" stroke="#D97706" strokeWidth="2.5" />
              {/* Binocular Barrels */}
              <rect x="2" y="-6" width="12" height="18" rx="4" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="18" y="-6" width="12" height="18" rx="4" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
              <rect x="12" y="-1" width="8" height="8" rx="2" fill="#64748B" />
              {/* Glass Lenses */}
              <circle cx="8" cy="11" r="5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.2" />
              <circle cx="24" cy="11" r="5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.2" />
            </g>

            {/* Left & Right Varsity Wings */}
            <path
              d="M 50 86 Q 32 105 45 125 Q 56 120 58 98 Z"
              fill="url(#jayPrimary)"
              stroke="#001845"
              strokeWidth="2"
            />
            {/* Wing Feather Accents */}
            <path d="M 38 108 L 48 106 M 40 116 L 50 114" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* ================= POSE: SCHOLAR ================= */}
        {pose === 'scholar' && (
          <g id="pose-scholar">
            {/* Tail */}
            <path d="M 40 120 L 12 145 L 35 148 Z" fill="#002D72" stroke="#68ACE5" strokeWidth="1.5" />

            {/* Head Crest */}
            <path d="M 52 48 C 45 28 55 12 75 14 C 68 22 72 32 78 40 Z" fill="url(#jayCrest)" />

            {/* Head */}
            <circle cx="85" cy="55" r="30" fill="url(#jayPrimary)" />
            <path d="M 72 52 C 70 68 82 78 98 76 C 90 62 86 52 72 52 Z" fill="#FFFFFF" />
            <path d="M 68 46 C 78 44 94 48 108 52 C 104 56 90 54 75 52 Z" fill="#1E293B" />
            <circle cx="90" cy="50" r="5" fill="#FFFFFF" />
            <circle cx="91.5" cy="49.5" r="3" fill="#0F172A" />
            <path d="M 105 48 L 134 56 L 105 64 Z" fill="url(#jayBeak)" />

            {/* Graduation Mortarboard Cap */}
            <g transform="translate(48, 8)">
              {/* Diamond Cap Top */}
              <polygon points="40,2 78,14 40,26 2,14" fill="#001845" stroke="#F1C400" strokeWidth="1.8" />
              {/* Skull cap band */}
              <path d="M 22 20 Q 40 28 58 20 L 58 26 Q 40 34 22 26 Z" fill="#002D72" />
              {/* Gold Tassel button & cord */}
              <circle cx="40" cy="14" r="2.5" fill="#F1C400" />
              <path d="M 40 14 Q 56 18 64 34" fill="none" stroke="#F1C400" strokeWidth="2" strokeLinecap="round" />
              <rect x="61" y="32" width="6" height="10" rx="2" fill="#F1C400" />
            </g>

            {/* Academic Gown */}
            <path
              d="M 52 82 C 45 100 48 135 65 142 C 90 146 118 138 122 105 C 124 92 115 82 98 80 Z"
              fill="#001845"
            />
            {/* Academic Gold Stole / Ribbon */}
            <path d="M 74 80 L 80 125 L 88 125 L 84 80 Z" fill="#F1C400" />
            <path d="M 96 80 L 92 125 L 100 125 L 104 80 Z" fill="#68ACE5" />

            {/* Diploma Scroll in Wing */}
            <g transform="translate(94, 100)">
              <rect x="0" y="0" width="30" height="12" rx="3" fill="#FFFDF0" stroke="#CBD5E1" strokeWidth="1" transform="rotate(-15)" />
              <rect x="12" y="-1" width="5" height="14" rx="1" fill="#DC2626" transform="rotate(-15)" />
            </g>
          </g>
        )}

        {/* ================= POSE: CHEER ================= */}
        {pose === 'cheer' && (
          <g id="pose-cheer">
            {/* Radiating Sparkles */}
            <path d="M 25 35 L 35 35 M 30 30 L 30 40" stroke="#F1C400" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 135 25 L 145 25 M 140 20 L 140 30" stroke="#F1C400" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 80 5 L 80 15 M 75 10 L 85 10" stroke="#68ACE5" strokeWidth="2.5" strokeLinecap="round" />

            {/* Outspread Wings (Celebration / Jumping) */}
            {/* Left Wing */}
            <path
              d="M 60 75 C 30 50 10 55 12 78 C 22 92 45 95 62 88 Z"
              fill="url(#jayPrimary)"
              stroke="#001845"
              strokeWidth="2"
            />
            <path d="M 16 70 L 32 75 M 18 80 L 36 82" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

            {/* Right Wing */}
            <path
              d="M 100 75 C 130 50 150 55 148 78 C 138 92 115 95 98 88 Z"
              fill="url(#jayPrimary)"
              stroke="#001845"
              strokeWidth="2"
            />
            <path d="M 144 70 L 128 75 M 142 80 L 124 82" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

            {/* Head Crest */}
            <path d="M 68 40 C 60 18 78 8 96 14 C 88 22 90 32 94 40 Z" fill="url(#jayCrest)" />

            {/* Head */}
            <circle cx="80" cy="50" r="28" fill="url(#jayPrimary)" />
            <path d="M 68 48 C 66 64 78 74 92 72 C 84 58 80 48 68 48 Z" fill="#FFFFFF" />
            <path d="M 64 42 C 74 40 88 44 100 48 C 96 52 84 50 72 48 Z" fill="#1E293B" />
            {/* Joyful wink/eye */}
            <circle cx="84" cy="46" r="4.5" fill="#FFFFFF" />
            <circle cx="85.5" cy="45.5" r="2.8" fill="#0F172A" />

            {/* Open Happy Beak */}
            <path d="M 98 44 L 126 50 L 98 58 Z" fill="url(#jayBeak)" />
            <path d="M 98 54 L 118 60 L 98 64 Z" fill="#EF4444" />

            {/* Jumping Body */}
            <path
              d="M 58 74 C 54 95 56 122 80 126 C 104 122 106 95 102 74 Z"
              fill="url(#jaySweater)"
              stroke="#001845"
              strokeWidth="2"
            />
            {/* Big "J" Trophy/Crest on Body */}
            <circle cx="80" cy="98" r="14" fill="#F1C400" stroke="#FFFFFF" strokeWidth="2" />
            <text x="80" y="104" fill="#002D72" fontSize="16" fontWeight="900" textAnchor="middle">
              J
            </text>

            {/* Pom-Poms in wings */}
            <g transform="translate(14, 52)">
              <circle cx="0" cy="0" r="10" fill="#68ACE5" opacity="0.9" />
              <circle cx="4" cy="4" r="8" fill="#F1C400" opacity="0.9" />
            </g>
            <g transform="translate(146, 52)">
              <circle cx="0" cy="0" r="10" fill="#68ACE5" opacity="0.9" />
              <circle cx="-4" cy="4" r="8" fill="#F1C400" opacity="0.9" />
            </g>
          </g>
        )}

        {/* ================= POSE: FLIGHT ================= */}
        {pose === 'flight' && (
          <g id="pose-flight">
            {/* Sleek Aerodynamic Flying Blue Jay */}
            {/* Tail Wind Streamers */}
            <path d="M 20 80 Q 5 80 0 85" stroke="#68ACE5" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
            <path d="M 25 90 Q 10 95 4 102" stroke="#F1C400" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />

            {/* Tail Feathers */}
            <polygon points="18,72 38,82 12,96" fill="#002D72" />
            <polygon points="26,78 44,84 20,102" fill="#68ACE5" />

            {/* Swept-Back Top Wing */}
            <path
              d="M 64 74 C 70 40 95 14 128 10 C 114 36 100 62 82 76 Z"
              fill="url(#jayPrimary)"
              stroke="#001845"
              strokeWidth="2"
            />
            <path d="M 116 24 L 98 48 M 108 34 L 92 56" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

            {/* Torpedo Body */}
            <path
              d="M 36 82 C 45 74 88 64 120 74 C 110 94 72 100 45 92 Z"
              fill="url(#jayPrimary)"
              stroke="#001845"
              strokeWidth="2"
            />

            {/* White Underbelly */}
            <path d="M 52 86 C 72 84 96 82 110 80 C 102 92 78 96 52 92 Z" fill="#FFFFFF" />

            {/* Head & Beak Facing Forward */}
            <polygon points="120,70 152,75 122,82" fill="url(#jayBeak)" />
            <circle cx="114" cy="74" r="3.5" fill="#FFFFFF" />
            <circle cx="115" cy="73.5" r="2" fill="#001845" />

            {/* Swept-Back Lower Wing */}
            <path
              d="M 68 84 C 62 106 50 128 32 144 C 48 126 68 104 80 88 Z"
              fill="url(#jayCrest)"
              stroke="#001845"
              strokeWidth="1.5"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
