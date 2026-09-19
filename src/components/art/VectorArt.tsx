import React from 'react';

// ==========================================
// 1. SUBRANK INSIGNIA VECTOR ART (15 LEVELS)
// ==========================================

export const RankInsigniaArt: React.FC<{
  insignia?: string;
  id?: string;
  size?: number;
  className?: string;
}> = ({ insignia = '', id = '', size = 32, className = '' }) => {
  // Match by id or semantic insignia name or legacy emoji
  const key = (insignia + ' ' + id).toLowerCase();

  // Helper render for 15 subrank SVGs
  const renderSvg = () => {
    // Level 1: Nestling Hatchling (Homewood Twig Cradle, Porcelain Egg, Aviator Baby Jay & Diploma Scroll)
    if (key.includes('subrank-1') || key.includes('fledgling') || key.includes('🐣') || key.includes('nestling-hatch')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub1-bg" cx="50%" cy="38%" r="55%">
              <stop offset="0%" stopColor="#F0F9FF" />
              <stop offset="70%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </radialGradient>
            <linearGradient id="sub1-gold-rim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="35%" stopColor="#FEF08A" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="sub1-egg" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#FFFBEB" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="sub1-jay" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="45%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#002D72" />
            </linearGradient>
            <linearGradient id="sub1-twig" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <linearGradient id="sub1-goggle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Medallion Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub1-bg)" stroke="url(#sub1-gold-rim)" strokeWidth="1.6" />
          <circle cx="24" cy="24" r="20" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="1.5 1.5" fill="none" opacity="0.8" />

          {/* Ambient Inner Glow */}
          <circle cx="24" cy="22" r="15" fill="#38BDF8" opacity="0.15" />

          {/* Homewood Woven Birch Nest Twig Cradle */}
          <g>
            <path d="M10 37 Q24 45 38 37" stroke="url(#sub1-twig)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M12 40 Q24 47 36 40" stroke="#78350F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <line x1="14" y1="37" x2="22" y2="43" stroke="#92400E" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="34" y1="37" x2="26" y2="43" stroke="#92400E" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="20" y1="38" x2="28" y2="43" stroke="#78350F" strokeWidth="1" strokeLinecap="round" />
            {/* Green Maryland Ivy Leaves */}
            <ellipse cx="14" cy="37" rx="1.2" ry="2.2" transform="rotate(-40 14 37)" fill="#059669" />
            <ellipse cx="34" cy="37" rx="1.2" ry="2.2" transform="rotate(40 34 37)" fill="#059669" />
          </g>

          {/* Cracked Egg Shell Base */}
          <path
            d="M13 28 C13 38 18 41 24 41 C30 41 35 38 35 28 L31 30.5 L28 27.5 L24 31.5 L20 27.5 L16 30.5 Z"
            fill="url(#sub1-egg)"
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
          {/* Shell Inner Shadow */}
          <path d="M14 29 L17 31 L20 28 L24 32 L28 28 L31 31 L34 29 C34 31 33 33 31 35 C28 34 20 34 17 35 C15 33 14 31 14 29 Z" fill="#CBD5E1" opacity="0.4" />
          {/* Hopkins Navy Chevron on Egg */}
          <path d="M15 33.5 L20 36.5 L24 34.5 L28 36.5 L33 33.5 L32.5 35.5 L28 38.5 L24 36.5 L20 38.5 L15.5 35.5 Z" fill="#002D72" stroke="url(#sub1-gold-rim)" strokeWidth="0.4" />
          <circle cx="24" cy="35.5" r="0.8" fill="#FEF08A" />

          {/* Baby Blue Jay Peeking Out */}
          {/* Jay Torso & Head */}
          <ellipse cx="24" cy="22" rx="9" ry="8.5" fill="url(#sub1-jay)" />

          {/* Blue Jay Head Crest Feathers */}
          <path d="M22 13 Q24 9 26 11 Q25 14 24 16 Z" fill="#0284C7" />
          <path d="M20 14 Q22 10 24 12 Q23 15 22 16 Z" fill="#002D72" />
          <path d="M24 13 Q26 10 28 12 Q26 15 25 16 Z" fill="#38BDF8" />

          {/* White Facial Mask & Chin Bib */}
          <path d="M17 21 Q24 26 31 21 Q24 18 17 21 Z" fill="#FFFFFF" />
          <path d="M20 23 Q24 28 28 23 Q24 26 20 23 Z" fill="#F8FAFC" />
          {/* Black Collar Line */}
          <path d="M18 22 C18 25 21 27 24 27 C27 27 30 25 30 22" stroke="#001438" strokeWidth="0.8" fill="none" />

          {/* Rosy Blushing Cheeks */}
          <ellipse cx="19" cy="22.5" rx="1.8" ry="1.2" fill="#FDA4AF" opacity="0.75" />
          <ellipse cx="29" cy="22.5" rx="1.8" ry="1.2" fill="#FDA4AF" opacity="0.75" />

          {/* Sparkling Big Traveler Eyes */}
          <circle cx="20.5" cy="19.5" r="1.8" fill="#0F172A" />
          <circle cx="20" cy="19" r="0.6" fill="#FFFFFF" />
          <circle cx="21" cy="20.2" r="0.3" fill="#FFFFFF" />
          <circle cx="27.5" cy="19.5" r="1.8" fill="#0F172A" />
          <circle cx="27" cy="19" r="0.6" fill="#FFFFFF" />
          <circle cx="28" cy="20.2" r="0.3" fill="#FFFFFF" />

          {/* Cute Orange Beak */}
          <polygon points="22,20.5 26,20.5 24,23.5" fill="#F59E0B" stroke="#D97706" strokeWidth="0.5" />

          {/* Polished Brass Aviator Goggles on Forehead */}
          <g>
            <rect x="17" y="14.8" width="14" height="2" rx="1" fill="#451A03" />
            <rect x="17.5" y="13.2" width="5.5" height="5.2" rx="2.5" fill="url(#sub1-goggle)" stroke="#78350F" strokeWidth="0.6" />
            <rect x="18.5" y="14.2" width="3.5" height="3.2" rx="1.6" fill="#38BDF8" />
            <line x1="19" y1="14.5" x2="21" y2="16.5" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" />

            <rect x="25" y="13.2" width="5.5" height="5.2" rx="2.5" fill="url(#sub1-goggle)" stroke="#78350F" strokeWidth="0.6" />
            <rect x="26" y="14.2" width="3.5" height="3.2" rx="1.6" fill="#38BDF8" />
            <line x1="26.5" y1="14.5" x2="28.5" y2="16.5" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" />

            {/* Bridge */}
            <rect x="23" y="15" width="2" height="1.5" rx="0.5" fill="url(#sub1-goggle)" />

            {/* Little Blue Explorer Feather tucked in goggle */}
            <path d="M30 14 C33 11 34 7 33 5 C31 8 30 11 29 14 Z" fill="#38BDF8" stroke="#002D72" strokeWidth="0.4" />
          </g>

          {/* Miniature Hopkins Parchment Diploma Scroll in Wing */}
          <g transform="rotate(-15 15 30)">
            <rect x="12" y="27" width="10" height="4" rx="1" fill="#FFFBEB" stroke="#B45309" strokeWidth="0.6" />
            <circle cx="17" cy="29" r="1.2" fill="#DC2626" />
            <line x1="17" y1="29" x2="19" y2="31" stroke="#DC2626" strokeWidth="0.6" strokeLinecap="round" />
            <line x1="13" y1="28.5" x2="16" y2="28.5" stroke="#D97706" strokeWidth="0.4" />
          </g>

          {/* Sparkle Gold Stars */}
          <polygon points="38,9 39,11.5 41.5,12 39,12.5 38,15 37,12.5 34.5,12 37,11.5" fill="#FBBF24" />
          <circle cx="9" cy="15" r="1.2" fill="#FDE047" />
        </svg>
      );
    }

    // Level 2: Brody Stalker (Scholarly Book Stack with Reading Glasses)
    if (key.includes('subrank-2') || key.includes('brody') || key.includes('📚') || key.includes('brody-books')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub2-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#EEF2FF" />
              <stop offset="100%" stopColor="#C7D2FE" />
            </radialGradient>
            <linearGradient id="sub2-navy" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#001845" />
              <stop offset="30%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="sub2-green" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#064E3B" />
              <stop offset="30%" stopColor="#0F766E" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="sub2-red" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7F1D1D" />
              <stop offset="30%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#DC2626" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub2-bg)" stroke="#818CF8" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="20" stroke="#FFFFFF" strokeWidth="0.8" fill="none" opacity="0.6" />

          {/* Book 1 (Bottom): Johns Hopkins Heritage Navy */}
          <rect x="8" y="32" width="32" height="7" rx="2" fill="url(#sub2-navy)" stroke="#001845" strokeWidth="0.8" />
          <rect x="11" y="33.5" width="26" height="4" rx="0.5" fill="#F8FAFC" />
          {/* Gold Embossed Spine Ribs */}
          <line x1="12" y1="32" x2="12" y2="39" stroke="#F59E0B" strokeWidth="1.5" />
          <line x1="15" y1="32" x2="15" y2="39" stroke="#F59E0B" strokeWidth="1.5" />

          {/* Book 2 (Middle): Ivy Gilman Green */}
          <rect x="11" y="24" width="27" height="6.5" rx="1.8" fill="url(#sub2-green)" stroke="#064E3B" strokeWidth="0.8" />
          <rect x="13.5" y="25.5" width="22" height="3.5" rx="0.5" fill="#FFFBEB" />
          <line x1="14" y1="24" x2="14" y2="30.5" stroke="#FBBF24" strokeWidth="1.2" />
          <line x1="17" y1="24" x2="17" y2="30.5" stroke="#FBBF24" strokeWidth="1.2" />

          {/* Book 3 (Top): Homewood Crimson (Angled) */}
          <g transform="rotate(-4 24 19)">
            <rect x="13" y="16" width="23" height="6" rx="1.5" fill="url(#sub2-red)" stroke="#7F1D1D" strokeWidth="0.8" />
            <rect x="15" y="17.5" width="18" height="3" rx="0.5" fill="#F8FAFC" />
            <line x1="16" y1="16" x2="16" y2="22" stroke="#FDE047" strokeWidth="1.2" />
            {/* Satin Gold Ribbon Bookmark */}
            <path d="M29 22 L29 30 L31 28.5 L33 30 L33 22 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="0.5" />
          </g>

          {/* Academic Gold Wireframe Spectacles */}
          <circle cx="19" cy="11" r="4.2" stroke="#D97706" strokeWidth="1.4" fill="#FFFFFF" fillOpacity="0.85" />
          <circle cx="29" cy="11" r="4.2" stroke="#D97706" strokeWidth="1.4" fill="#FFFFFF" fillOpacity="0.85" />
          {/* Bridge */}
          <path d="M23.2 11 Q24 9.5 24.8 11" stroke="#D97706" strokeWidth="1.4" fill="none" />
          {/* Lens Glass Gleams */}
          <line x1="17" y1="9" x2="20" y2="12" stroke="#60A5FA" strokeWidth="0.8" opacity="0.8" />
          <line x1="27" y1="9" x2="30" y2="12" stroke="#60A5FA" strokeWidth="0.8" opacity="0.8" />
        </svg>
      );
    }

    // Level 3: Charles Street Sprinter (Winged Blue Jay Runner)
    if (key.includes('subrank-3') || key.includes('charles') || key.includes('🏃') || key.includes('charles-runner')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub3-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </radialGradient>
            <linearGradient id="sub3-shoe" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </linearGradient>
            <linearGradient id="sub3-wing" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#68ACE5" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#002D72" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub3-bg)" stroke="#0284C7" strokeWidth="1.5" />

          {/* Speed Motion Lines */}
          <line x1="5" y1="28" x2="15" y2="28" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
          <line x1="3" y1="33" x2="17" y2="33" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          <line x1="7" y1="23" x2="14" y2="23" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" />

          {/* Cushioned Sole */}
          <path
            d="M12 35 C17 35 23 37 29 37 C35 37 39 35 42 34 C43 33 41 31 39 31 L15 31 C12 31 10 33 12 35 Z"
            fill="#FFFFFF"
            stroke="#64748B"
            strokeWidth="1.2"
          />
          <path d="M18 35 L38 35" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 1" />

          {/* Shoe Body */}
          <path d="M15 31 L19 21 C21 17 26 17 29 21 L34 26 L39 31 Z" fill="url(#sub3-shoe)" />
          {/* Gold Laces */}
          <line x1="22" y1="22" x2="26" y2="26" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="25" y1="20" x2="29" y2="24" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />

          {/* Hermes-Style Blue Jay Feathered Wing */}
          <g>
            {/* Base Feathers */}
            <path d="M18 20 C18 12 28 11 36 8 C33 13 31 16 28 18 C33 17 36 15 38 13 C35 18 30 22 24 23 Z" fill="url(#sub3-wing)" />
            {/* Highlight Feather */}
            <path d="M22 17 C26 13 32 11 35 9 C32 13 29 16 26 18 Z" fill="#BAE6FD" />
            {/* White Wing Tip */}
            <polygon points="36,8 38,13 35,13" fill="#FFFFFF" />
          </g>

          {/* Star Sparkle */}
          <polygon points="40,16 41,18 43,19 41,20 40,22 39,20 37,19 39,18" fill="#F59E0B" />
        </svg>
      );
    }

    // Level 4: Wyman Park Wanderer (Oak Leaf & Dell Acorn)
    if (key.includes('subrank-4') || key.includes('wyman') || key.includes('🌿') || key.includes('wyman-dell')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub4-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#ECFDF5" />
              <stop offset="100%" stopColor="#A7F3D0" />
            </radialGradient>
            <linearGradient id="sub4-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34D399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="sub4-acorn" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="60%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub4-bg)" stroke="#059669" strokeWidth="1.5" />

          {/* Maryland White Oak Leaf */}
          <path
            d="M23 8 C27 13 36 14 33 22 C37 26 33 32 29 34 C25 36 23 40 23 40 C23 40 21 36 17 34 C13 32 9 26 13 22 C10 14 19 13 23 8 Z"
            fill="url(#sub4-leaf)"
            stroke="#047857"
            strokeWidth="1.2"
          />
          {/* Main Leaf Stem & Veins */}
          <path d="M23 8 L23 40" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M23 16 Q28 19 31 21" stroke="#A7F3D0" strokeWidth="1" />
          <path d="M23 24 Q28 27 30 29" stroke="#A7F3D0" strokeWidth="1" />
          <path d="M23 16 Q18 19 15 21" stroke="#A7F3D0" strokeWidth="1" />
          <path d="M23 24 Q18 27 16 29" stroke="#A7F3D0" strokeWidth="1" />

          {/* Glossy Forest Dell Acorn */}
          {/* Acorn Nut */}
          <ellipse cx="33" cy="33" rx="5.5" ry="6.5" fill="url(#sub4-acorn)" />
          {/* Specular curved gleam */}
          <path d="M35 30 Q37 33 36 36" stroke="#FEF3C7" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          {/* Textured Woody Cap */}
          <path d="M27.5 30 C27.5 26 38.5 26 38.5 30 Z" fill="#451A03" stroke="#78350F" strokeWidth="1" />
          <line x1="30" y1="28" x2="36" y2="28" stroke="#D97706" strokeWidth="0.8" strokeDasharray="1 1" />
          {/* Stem */}
          <path d="M33 26 Q35 23 34 22" stroke="#451A03" strokeWidth="1.8" strokeLinecap="round" />

          {/* Firefly dew sparkles */}
          <circle cx="14" cy="14" r="2" fill="#FDE047" />
          <circle cx="14" cy="14" r="0.8" fill="#FFFFFF" />
        </svg>
      );
    }

    // Level 5: JHMI Shuttle Veteran (Hopkins Shuttle Bus)
    if (key.includes('subrank-5') || key.includes('shuttle') || key.includes('🚌') || key.includes('jhmi-shuttle')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub5-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#93C5FD" />
            </radialGradient>
            <linearGradient id="sub5-bus" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002D72" />
              <stop offset="50%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#001845" />
            </linearGradient>
            <linearGradient id="sub5-glass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub5-bg)" stroke="#1D4ED8" strokeWidth="1.5" />

          {/* Road baseline */}
          <line x1="8" y1="38" x2="40" y2="38" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="14" y1="38" x2="34" y2="38" stroke="#FDE047" strokeWidth="1" strokeDasharray="3 2" />

          {/* Blue Jay Shuttle Bus Body */}
          <rect x="9" y="13" width="30" height="21" rx="4.5" fill="url(#sub5-bus)" stroke="#001845" strokeWidth="1.2" />

          {/* University Gold Swoosh */}
          <path d="M9 25 C16 25 24 28 39 26 L39 29 C24 31 16 28 9 28 Z" fill="#F59E0B" />

          {/* Windshield & Windows */}
          <rect x="12" y="16" width="10" height="7.5" rx="1.5" fill="url(#sub5-glass)" />
          <rect x="24" y="16" width="6" height="7.5" rx="1" fill="url(#sub5-glass)" />
          <rect x="32" y="16" width="5" height="7.5" rx="1" fill="url(#sub5-glass)" />
          {/* Glass reflection slash */}
          <line x1="14" y1="17" x2="19" y2="22" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

          {/* Illuminated Green LED Destination Sign */}
          <rect x="13" y="14" width="22" height="2" rx="0.5" fill="#047857" />
          <text x="24" y="15.8" textAnchor="middle" fontSize="1.8" fontWeight="bold" fill="#34D399" fontFamily="monospace">JHMI EXPRESS</text>

          {/* Chrome Headlights */}
          <circle cx="11.5" cy="28" r="1.8" fill="#FBBF24" stroke="#D97706" strokeWidth="0.6" />
          <circle cx="36.5" cy="28" r="1.8" fill="#FBBF24" stroke="#D97706" strokeWidth="0.6" />

          {/* Dual Transit Wheels */}
          <circle cx="16" cy="34" r="4.2" fill="#0F172A" />
          <circle cx="16" cy="34" r="2" fill="#94A3B8" />
          <circle cx="16" cy="34" r="0.8" fill="#F1F5F9" />
          <circle cx="32" cy="34" r="4.2" fill="#0F172A" />
          <circle cx="32" cy="34" r="2" fill="#94A3B8" />
          <circle cx="32" cy="34" r="0.8" fill="#F1F5F9" />
        </svg>
      );
    }

    // Level 6: Peabody Harmonizer (Classical Violin & Gold Clef)
    if (key.includes('subrank-6') || key.includes('peabody') || key.includes('🎻') || key.includes('peabody-violin')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub6-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </radialGradient>
            <linearGradient id="sub6-wood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#B45309" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="sub6-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub6-bg)" stroke="#D97706" strokeWidth="1.5" />

          {/* Rotated Peabody Conservatory Violin */}
          <g transform="rotate(32 24 24)">
            {/* Lower Bout */}
            <ellipse cx="24" cy="28" rx="8.5" ry="10" fill="url(#sub6-wood)" stroke="#451A03" strokeWidth="0.8" />
            {/* Upper Bout */}
            <ellipse cx="24" cy="18" rx="6.5" ry="7.5" fill="url(#sub6-wood)" stroke="#451A03" strokeWidth="0.8" />
            {/* C-Bout Waist Insets */}
            <circle cx="16.5" cy="23" r="3.2" fill="#FEF3C7" />
            <circle cx="31.5" cy="23" r="3.2" fill="#FEF3C7" />
            {/* Ebony Fingerboard & Pegbox */}
            <rect x="22" y="6" width="4" height="13" fill="#1E293B" rx="0.8" />
            <circle cx="24" cy="5" r="2.5" fill="#78350F" stroke="#451A03" strokeWidth="0.8" />
            {/* F-Holes */}
            <path d="M21 21 Q20 23 21 25" stroke="#451A03" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M27 21 Q28 23 27 25" stroke="#451A03" strokeWidth="1.2" strokeLinecap="round" />
            {/* Strings */}
            <line x1="23" y1="8" x2="23" y2="34" stroke="#FEF3C7" strokeWidth="0.6" />
            <line x1="25" y1="8" x2="25" y2="34" stroke="#FEF3C7" strokeWidth="0.6" />
          </g>

          {/* Floating Gold Treble Clef & Musical Note */}
          <path
            d="M38 12 C36 10 33 12 33 15 C33 19 38 21 38 25 C38 28 35 29 33 28 M35 9 L35 31 C35 34 32 35 30 33"
            stroke="url(#sub6-gold)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="30" cy="33" r="2.2" fill="#D97706" />
          {/* Sparkle */}
          <polygon points="12,12 13,14 15,15 13,16 12,18 11,16 9,15 11,14" fill="#F59E0B" />
        </svg>
      );
    }

    // Level 7: Hampden "Hon" Hunter (Retro Cat-Eye Sunglasses)
    if (key.includes('subrank-7') || key.includes('hampden') || key.includes('hon') || key.includes('🕶️') || key.includes('hampden-shades')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub7-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FDF2F8" />
              <stop offset="100%" stopColor="#FBCFE8" />
            </radialGradient>
            <linearGradient id="sub7-frame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F472B6" />
              <stop offset="50%" stopColor="#DB2777" />
              <stop offset="100%" stopColor="#9D174D" />
            </linearGradient>
            <linearGradient id="sub7-lens" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub7-bg)" stroke="#DB2777" strokeWidth="1.5" />

          {/* Pink Flamingo Feather in Hair Accent */}
          <path d="M22 6 C20 10 20 14 23 18 C26 14 26 10 22 6 Z" fill="#F472B6" />
          <line x1="22.5" y1="6" x2="23" y2="18" stroke="#FFFFFF" strokeWidth="0.8" />

          {/* Left Cat-Eye Wing */}
          <path d="M7 21 C8 13 20 14 22 22 C22 28 14 30 9 26 C7 24 6 23 7 21 Z" fill="url(#sub7-frame)" stroke="#831843" strokeWidth="0.8" />
          {/* Left Polarized Lens */}
          <path d="M9 21 C10 16 19 16 20 22 C20 26 15 28 11 25 Z" fill="url(#sub7-lens)" />
          <line x1="12" y1="18" x2="15" y2="24" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />

          {/* Right Cat-Eye Wing */}
          <path d="M41 21 C40 13 28 14 26 22 C26 28 34 30 39 26 C41 24 42 23 41 21 Z" fill="url(#sub7-frame)" stroke="#831843" strokeWidth="0.8" />
          {/* Right Polarized Lens */}
          <path d="M39 21 C38 16 29 16 28 22 C28 26 33 28 37 25 Z" fill="url(#sub7-lens)" />
          <line x1="33" y1="18" x2="36" y2="24" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" strokeLinecap="round" />

          {/* Golden Center Bridge */}
          <path d="M22 21 Q24 19 26 21" stroke="#F59E0B" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Brilliant Rhinestone Studs */}
          <circle cx="8" cy="17" r="1.8" fill="#FFFFFF" stroke="#FDE047" strokeWidth="0.6" />
          <circle cx="40" cy="17" r="1.8" fill="#FFFFFF" stroke="#FDE047" strokeWidth="0.6" />
          <circle cx="10" cy="19.5" r="1" fill="#FDE047" />
          <circle cx="38" cy="19.5" r="1" fill="#FDE047" />
        </svg>
      );
    }

    // Level 8: Inner Harbor Helmsman (Naval Brass Anchor & Cord)
    if (key.includes('subrank-8') || key.includes('harbor') || key.includes('helmsman') || key.includes('⚓') || key.includes('harbor-anchor')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub8-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </radialGradient>
            <linearGradient id="sub8-brass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub8-bg)" stroke="#0284C7" strokeWidth="1.5" />

          {/* Patapsco Harbor Rippling Waves */}
          <path d="M8 38 Q16 35 24 38 Q32 41 40 38 L40 42 L8 42 Z" fill="#0284C7" opacity="0.3" />
          <path d="M6 40 Q14 38 24 40 Q34 42 42 40 L42 43 L6 43 Z" fill="#002D72" opacity="0.5" />

          {/* Top Anchor Ring & Shackle */}
          <circle cx="24" cy="10" r="4.5" stroke="url(#sub8-brass)" strokeWidth="2.2" fill="none" />
          <circle cx="24" cy="10" r="2.2" fill="url(#sub8-bg)" />

          {/* Stock Crossbar */}
          <line x1="13" y1="17" x2="35" y2="17" stroke="url(#sub8-brass)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="13" cy="17" r="2" fill="#78350F" />
          <circle cx="35" cy="17" r="2" fill="#78350F" />

          {/* Anchor Vertical Shank */}
          <line x1="24" y1="12" x2="24" y2="39" stroke="url(#sub8-brass)" strokeWidth="3.8" strokeLinecap="round" />

          {/* Curved Lower Arms */}
          <path d="M11 27 C11 39 37 39 37 27" stroke="url(#sub8-brass)" strokeWidth="3.2" fill="none" strokeLinecap="round" />

          {/* Triangular Flukes */}
          <polygon points="8,27 13,28 10,33" fill="#B45309" stroke="#78350F" strokeWidth="0.8" />
          <polygon points="40,27 35,28 38,33" fill="#B45309" stroke="#78350F" strokeWidth="0.8" />

          {/* Helical Twisted Manila Hemp Rope */}
          <path
            d="M21 12 Q27 15 24 19 Q20 23 26 27 Q22 31 25 35 Q20 38 23 40"
            stroke="#FEF3C7"
            strokeWidth="2.2"
            fill="none"
          />
          <path
            d="M21 12 Q27 15 24 19 Q20 23 26 27 Q22 31 25 35 Q20 38 23 40"
            stroke="#D97706"
            strokeWidth="1.8"
            strokeDasharray="2 1.5"
            fill="none"
          />
        </svg>
      );
    }

    // Level 9: Fells Point Pathologist (Twin-Masted Cobblestone Schooner)
    if (key.includes('subrank-9') || key.includes('fells') || key.includes('⛵') || key.includes('fells-sailboat')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub9-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#EEF2FF" />
              <stop offset="100%" stopColor="#C7D2FE" />
            </radialGradient>
            <linearGradient id="sub9-hull" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#78350F" />
              <stop offset="60%" stopColor="#451A03" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="sub9-sail" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub9-bg)" stroke="#4F46E5" strokeWidth="1.5" />

          {/* Foaming Chesapeake Ocean Waves */}
          <path d="M6 36 Q13 33 20 36 Q27 39 34 36 Q41 33 44 36 L44 42 L6 42 Z" fill="#0284C7" />
          <path d="M6 38 Q13 36 20 38 Q27 40 34 38 Q41 36 44 38 L44 42 L6 42 Z" fill="#002D72" />

          {/* Baltimore Clipper Wood Hull */}
          <path d="M9 34 L13 37 L35 37 L40 31 L11 31 Z" fill="url(#sub9-hull)" stroke="#1E293B" strokeWidth="1" />
          {/* Gold Sheerline */}
          <path d="M11 32 L39 32" stroke="#F59E0B" strokeWidth="0.8" />

          {/* Main Mast & Fore Mast */}
          <line x1="21" y1="10" x2="21" y2="32" stroke="#451A03" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="32" y1="14" x2="32" y2="32" stroke="#451A03" strokeWidth="1.8" strokeLinecap="round" />

          {/* Standing Rigging Shrouds */}
          <line x1="21" y1="12" x2="10" y2="31" stroke="#94A3B8" strokeWidth="0.6" />
          <line x1="32" y1="16" x2="39" y2="31" stroke="#94A3B8" strokeWidth="0.6" />

          {/* Billowing Main Canvas Sail */}
          <path d="M20 11 L10 28 L20 28 Z" fill="url(#sub9-sail)" stroke="#94A3B8" strokeWidth="0.8" />
          <line x1="15" y1="20" x2="20" y2="28" stroke="#CBD5E1" strokeWidth="0.5" />

          {/* Billowing Fore Canvas Sail */}
          <path d="M22 13 L31 29 L22 29 Z" fill="url(#sub9-sail)" stroke="#94A3B8" strokeWidth="0.8" />

          {/* Crimson Maritime Pennant */}
          <polygon points="21,10 16,8 21,7" fill="#DC2626" />
        </svg>
      );
    }

    // Level 10: Old Bay Connoisseur (Maryland Blue Crab Emblem)
    if (key.includes('subrank-10') || key.includes('old bay') || key.includes('🦀') || key.includes('old-bay-crab')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub10-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FEF2F2" />
              <stop offset="100%" stopColor="#FEE2E2" />
            </radialGradient>
            <linearGradient id="sub10-shell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0E7490" />
              <stop offset="40%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064E3B" />
            </linearGradient>
            <linearGradient id="sub10-claw" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub10-bg)" stroke="#DC2626" strokeWidth="1.5" />

          {/* Chesapeake Cerulean Blue Walking Legs */}
          <path d="M12 24 L5 27 M13 28 L7 33 M15 32 L10 38" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M36 24 L43 27 M35 28 L41 33 M33 32 L38 38" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" />

          {/* Swimming Back Flippers */}
          <ellipse cx="9" cy="38" rx="2.5" ry="1.5" transform="rotate(-30 9 38)" fill="#38BDF8" />
          <ellipse cx="39" cy="38" rx="2.5" ry="1.5" transform="rotate(30 39 38)" fill="#38BDF8" />

          {/* Textured Carapace Shell */}
          <ellipse cx="24" cy="27" rx="13" ry="8.5" fill="url(#sub10-shell)" stroke="#042F2E" strokeWidth="1" />
          {/* Lateral Spine Points */}
          <polygon points="10,27 7,27 12,25" fill="#064E3B" />
          <polygon points="38,27 41,27 36,25" fill="#064E3B" />

          {/* Large Pincer Arms */}
          <path d="M16 23 Q11 17 9 13" stroke="#0284C7" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <path d="M32 23 Q37 17 39 13" stroke="#0284C7" strokeWidth="3.2" strokeLinecap="round" fill="none" />

          {/* Scarlet Red Claw Tips (Signature Chesapeake Blue Crab) */}
          <path d="M9 13 C6 10 7 6 11 7 C13 9 11 12 9 13 Z" fill="url(#sub10-claw)" />
          <path d="M9 13 C5 15 5 19 8 19 C10 17 10 14 9 13 Z" fill="#0284C7" />
          <path d="M39 13 C42 10 41 6 37 7 C35 9 37 12 39 13 Z" fill="url(#sub10-claw)" />
          <path d="M39 13 C43 15 43 19 40 19 C38 17 38 14 39 13 Z" fill="#0284C7" />

          {/* Eyestalks */}
          <circle cx="21" cy="18.5" r="2" fill="#FFFFFF" />
          <circle cx="21" cy="18.5" r="1.1" fill="#0F172A" />
          <circle cx="27" cy="18.5" r="2" fill="#FFFFFF" />
          <circle cx="27" cy="18.5" r="1.1" fill="#0F172A" />

          {/* Old Bay Yellow/Red Tin Badge Accent */}
          <rect x="20" y="24" width="8" height="6" rx="1" fill="#FBBF24" stroke="#D97706" strokeWidth="0.6" />
          <rect x="20" y="24" width="8" height="2" fill="#002D72" />
          <rect x="20" y="28" width="8" height="2" fill="#DC2626" />
        </svg>
      );
    }

    // Level 11: Fort McHenry Defender (Historic Star-Fort Citadel)
    if (key.includes('subrank-11') || key.includes('mchenry') || key.includes('fort') || key.includes('🏰') || key.includes('fort-mchenry')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub11-bg" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="60%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FDBA74" />
            </radialGradient>
            <linearGradient id="sub11-brick" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B45309" />
              <stop offset="60%" stopColor="#991B1B" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub11-bg)" stroke="#B45309" strokeWidth="1.5" />

          {/* Star-Spangled Sunrise Rays */}
          {Array.from({ length: 7 }).map((_, i) => (
            <line
              key={i}
              x1="24"
              y1="10"
              x2={24 + 16 * Math.cos(((i * 25 - 150) * Math.PI) / 180)}
              y2={10 + 16 * Math.sin(((i * 25 - 150) * Math.PI) / 180)}
              stroke="#FEF08A"
              strokeWidth="0.8"
              opacity="0.8"
            />
          ))}

          {/* Historic Star-Fort Brick Ramparts */}
          <path
            d="M9 37 L13 26 L17 26 L17 30 L21 30 L21 26 L27 26 L27 30 L31 30 L31 26 L35 26 L39 37 Z"
            fill="url(#sub11-brick)"
            stroke="#451A03"
            strokeWidth="1.5"
          />
          {/* Mortar Brick Pattern */}
          <line x1="12" y1="32" x2="36" y2="32" stroke="#FEF3C7" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />

          {/* Center Bastion Apex */}
          <polygon points="24,19 28,26 20,26" fill="#78350F" stroke="#451A03" strokeWidth="1" />

          {/* Cast Bronze Harbor Defense Cannon */}
          <line x1="17" y1="23" x2="10" y2="20" stroke="#1E293B" strokeWidth="3.2" strokeLinecap="round" />
          <circle cx="17" cy="23" r="2.2" fill="#64748B" stroke="#0F172A" strokeWidth="0.8" />

          {/* Star-Spangled Banner 15-Star Flag */}
          <line x1="24" y1="7" x2="24" y2="20" stroke="#451A03" strokeWidth="1.6" />
          {/* Stripes */}
          <rect x="24" y="7" width="12" height="7" fill="#DC2626" stroke="#991B1B" strokeWidth="0.5" />
          <line x1="24" y1="8.4" x2="36" y2="8.4" stroke="#FFFFFF" strokeWidth="0.9" />
          <line x1="24" y1="10.5" x2="36" y2="10.5" stroke="#FFFFFF" strokeWidth="0.9" />
          <line x1="24" y1="12.6" x2="36" y2="12.6" stroke="#FFFFFF" strokeWidth="0.9" />
          {/* Blue Canton & Star */}
          <rect x="24" y="7" width="5.5" height="4" fill="#1E3A8A" />
          <circle cx="26.8" cy="9" r="1" fill="#FFFFFF" />
        </svg>
      );
    }

    // Level 12: Crab Feast Champion (Crossed Mallet & Seafood Knife)
    if (key.includes('subrank-12') || key.includes('feast') || key.includes('mallet') || key.includes('🔨') || key.includes('crab-mallet')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            <radialGradient id="sub12-bg" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#FFEDD5" />
              <stop offset="100%" stopColor="#FED7AA" />
            </radialGradient>
            <linearGradient id="sub12-wood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="60%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#92400E" />
            </linearGradient>
            <linearGradient id="sub12-steel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>

          {/* Disc */}
          <circle cx="24" cy="24" r="22" fill="url(#sub12-bg)" stroke="#EA580C" strokeWidth="1.5" />

          {/* Old Bay Seasoning Dust Flecks */}
          <circle cx="24" cy="10" r="1.5" fill="#EF4444" />
          <circle cx="14" cy="36" r="1.8" fill="#F59E0B" />
          <circle cx="34" cy="34" r="1.8" fill="#DC2626" />
          <circle cx="38" cy="18" r="1.2" fill="#F59E0B" />
          <circle cx="10" cy="20" r="1.2" fill="#EF4444" />

          {/* Wooden Mallet (Turned Birch Head & Handle) */}
          <g transform="rotate(45 24 24)">
            <rect x="22" y="7" width="4.5" height="30" rx="2.2" fill="url(#sub12-wood)" stroke="#78350F" strokeWidth="0.8" />
            <rect x="15" y="7" width="18.5" height="9" rx="2.5" fill="url(#sub12-wood)" stroke="#78350F" strokeWidth="1" />
            <line x1="17" y1="11.5" x2="31.5" y2="11.5" stroke="#78350F" strokeWidth="0.8" />
          </g>

          {/* Stainless Steel Seafood Crab Knife & Pick */}
          <g transform="rotate(-45 24 24)">
            <rect x="22" y="9" width="4.5" height="28" rx="1.5" fill="url(#sub12-steel)" stroke="#64748B" strokeWidth="0.8" />
            <polygon points="22,9 26.5,9 24.2,4.5" fill="#FFFFFF" stroke="#64748B" strokeWidth="0.8" />
            {/* Red Grip */}
            <rect x="21" y="27" width="6.5" height="10" rx="1.5" fill="#DC2626" stroke="#991B1B" strokeWidth="0.8" />
          </g>

          {/* Butter Ramekin Accent */}
          <ellipse cx="24" cy="24" r="4" fill="#FEF08A" stroke="#F59E0B" strokeWidth="1.2" />
          <circle cx="24" cy="24" r="2" fill="#FBBF24" />
        </svg>
      );
    }

    // Level 13: Poe's Raven Disciple (Pointed Gothic Cathedral Arch, Full Moon Halo & Spread-Wing Raven on Marble Pallas Bust)
    if (key.includes('subrank-13') || key.includes('poe') || key.includes('raven') || key.includes('🪶') || key.includes('poe-raven')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            {/* Gothic Night Sky Gradient */}
            <linearGradient id="sub13-gothic-sky" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#090514" />
              <stop offset="40%" stopColor="#120D24" />
              <stop offset="80%" stopColor="#1E1B4B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            {/* Full Moon Glow */}
            <radialGradient id="sub13-moon-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#EDE9FE" />
              <stop offset="80%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
            </radialGradient>
            {/* Carved Gothic Stone Rim */}
            <linearGradient id="sub13-stone-border" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="30%" stopColor="#475569" />
              <stop offset="70%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
            {/* Iridescent Obsidian Raven Feathers */}
            <linearGradient id="sub13-raven-plumage" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#312E81" />
              <stop offset="35%" stopColor="#1E1B4B" />
              <stop offset="70%" stopColor="#0B0F19" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            {/* Carved Marble Bust */}
            <linearGradient id="sub13-marble" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            {/* Aged Parchment Scroll */}
            <linearGradient id="sub13-parchment" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="50%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </linearGradient>
            {/* Golden Beak / Claw */}
            <linearGradient id="sub13-gold-acc" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            {/* Gothic Arch Clip Path */}
            <clipPath id="sub13-arch-clip">
              <path d="M8 44 L8 19 C8 10 16 3 24 3 C32 3 40 10 40 19 L40 44 Z" />
            </clipPath>
          </defs>

          {/* Gothic Cathedral Mausoleum Stele / Pointed Arch Outer Frame */}
          {/* Shadow / Base */}
          <path
            d="M6 45 L6 19 C6 8 15 1 24 1 C33 1 42 8 42 19 L42 45 Z"
            fill="#0F172A"
          />
          {/* Stone Bevel Outer Border */}
          <path
            d="M7 44.5 L7 19 C7 9 15.5 2 24 2 C32.5 2 41 9 41 19 L41 44.5 Z"
            fill="url(#sub13-stone-border)"
            stroke="#1E293B"
            strokeWidth="0.8"
          />
          {/* Inner Inset Arch Border */}
          <path
            d="M8.5 43.5 L8.5 19 C8.5 10.5 16 3.5 24 3.5 C32 3.5 39.5 10.5 39.5 19 L39.5 43.5 Z"
            fill="#000000"
          />

          {/* Clipped Gothic Interior Window */}
          <g clipPath="url(#sub13-arch-clip)">
            {/* Midnight Sky */}
            <rect x="6" y="1" width="36" height="44" fill="url(#sub13-gothic-sky)" />

            {/* Gothic Pointed Trefoil Tracery at Apex */}
            <path
              d="M14 18 C14 12 18 8 24 8 C30 8 34 12 34 18"
              stroke="#475569"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <circle cx="24" cy="7.5" r="2.2" stroke="#64748B" strokeWidth="0.7" fill="none" opacity="0.6" />
            <circle cx="19" cy="11.5" r="1.4" stroke="#64748B" strokeWidth="0.6" fill="none" opacity="0.5" />
            <circle cx="29" cy="11.5" r="1.4" stroke="#64748B" strokeWidth="0.6" fill="none" opacity="0.5" />

            {/* Radiant Full Moon Halo */}
            <circle cx="24" cy="17" r="13" fill="url(#sub13-moon-glow)" opacity="0.4" />
            <circle cx="24" cy="17" r="9" fill="#FFFFFF" opacity="0.9" />
            {/* Moon craters / textures */}
            <ellipse cx="22" cy="14" rx="2.5" ry="1.8" fill="#E2E8F0" opacity="0.7" />
            <circle cx="27" cy="18" r="1.5" fill="#E2E8F0" opacity="0.6" />
            <circle cx="21" cy="20" r="1.2" fill="#E2E8F0" opacity="0.6" />

            {/* Night Fog / Mist Streaks Across Moon */}
            <path d="M12 15 Q20 13 28 16 Q36 19 40 17" stroke="#818CF8" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" />
            <path d="M8 21 Q18 19 28 22 Q38 25 42 22" stroke="#6366F1" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

            {/* Classical Carved Marble Bust of Pallas Athena Pedestal */}
            {/* Pedestal Base */}
            <rect x="15" y="34" width="18" height="4" rx="1" fill="url(#sub13-marble)" stroke="#334155" strokeWidth="0.6" />
            <line x1="16" y1="36" x2="32" y2="36" stroke="#94A3B8" strokeWidth="0.5" />
            {/* Bust Shoulders & Robe */}
            <path d="M16 34 C16 30 20 28 24 28 C28 28 32 30 32 34 Z" fill="url(#sub13-marble)" stroke="#475569" strokeWidth="0.6" />
            {/* Draped folds */}
            <path d="M21 29 Q24 33 27 29" stroke="#94A3B8" strokeWidth="0.7" fill="none" />
            <path d="M19 32 Q24 36 29 32" stroke="#94A3B8" strokeWidth="0.7" fill="none" />

            {/* The Imposing Spread-Winged Obsidian Raven Perched atop Pallas */}
            {/* Raven Perched Talons */}
            <ellipse cx="21.5" cy="28.5" rx="1.5" ry="1" fill="url(#sub13-gold-acc)" />
            <ellipse cx="26.5" cy="28.5" rx="1.5" ry="1" fill="url(#sub13-gold-acc)" />

            {/* Left Outstretched Wing with Layered Feather Tufts */}
            <path
              d="M20 24 C14 20 10 14 9 10 C9 12 11 16 13 20 C10 17 9 21 12 24 C10 23 11 26 14 27 C16 28 19 27 20 25 Z"
              fill="url(#sub13-raven-plumage)"
              stroke="#020617"
              strokeWidth="0.7"
            />
            {/* Left Wing Primary Feather Highlights */}
            <path d="M11 14 C12 17 14 21 18 24" stroke="#6366F1" strokeWidth="0.6" fill="none" opacity="0.7" />
            <path d="M13 18 C14 21 16 23 19 25" stroke="#818CF8" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* Right Outstretched Wing with Layered Feather Tufts */}
            <path
              d="M28 24 C34 20 38 14 39 10 C39 12 37 16 35 20 C38 17 39 21 36 24 C38 23 37 26 34 27 C32 28 29 27 28 25 Z"
              fill="url(#sub13-raven-plumage)"
              stroke="#020617"
              strokeWidth="0.7"
            />
            {/* Right Wing Primary Feather Highlights */}
            <path d="M37 14 C36 17 34 21 30 24" stroke="#6366F1" strokeWidth="0.6" fill="none" opacity="0.7" />
            <path d="M35 18 C34 21 32 23 29 25" stroke="#818CF8" strokeWidth="0.5" fill="none" opacity="0.6" />

            {/* Raven Torso and Throat Hackles */}
            <ellipse cx="24" cy="23" rx="5" ry="6.5" fill="url(#sub13-raven-plumage)" />
            {/* Layered Ruffled Neck Feathers */}
            <path d="M22 18 L23 22 L24 18 L25 22 L26 18" stroke="#4338CA" strokeWidth="0.6" fill="none" />

            {/* Raven Head with Raised Crown Hackles */}
            <circle cx="24" cy="16.5" r="4.5" fill="url(#sub13-raven-plumage)" />
            <path d="M22 13 Q24 10.5 25 12 Q24 14 23 15 Z" fill="#312E81" />

            {/* Wicked Sharp Beak */}
            <polygon points="25.5,15 32,16.5 25.5,18.5" fill="url(#sub13-gold-acc)" stroke="#B45309" strokeWidth="0.5" />
            <line x1="25.5" y1="16.5" x2="31" y2="16.5" stroke="#78350F" strokeWidth="0.5" />

            {/* Piercing Amber Eye with Glint */}
            <circle cx="23.5" cy="15.8" r="1.5" fill="#F59E0B" />
            <circle cx="23.5" cy="15.8" r="0.8" fill="#020617" />
            <circle cx="23.1" cy="15.4" r="0.35" fill="#FFFFFF" />

            {/* Antique Feather Quill Writing Pen Crossing Foreground */}
            <g transform="rotate(-30 18 36)">
              {/* Purple/Violet Raven Feather Vane */}
              <path d="M12 28 C15 22 20 18 24 15 C21 21 18 26 15 31 Z" fill="#8B5CF6" stroke="#581C87" strokeWidth="0.5" />
              <path d="M15 31 C18 26 21 21 24 15 C22 22 20 27 17 33 Z" fill="#6D28D9" />
              {/* Quill Shaft / Shaft Spine */}
              <line x1="12" y1="36" x2="25" y2="14" stroke="#EDE9FE" strokeWidth="0.7" />
              {/* Brass Nib */}
              <polygon points="12,36 10.5,39 13,38" fill="url(#sub13-gold-acc)" stroke="#78350F" strokeWidth="0.4" />
              {/* Crimson Ink Droplet */}
              <circle cx="10" cy="40.5" r="0.9" fill="#DC2626" />
              <path d="M10 39.5 L10.5 40.5 L9.5 40.5 Z" fill="#DC2626" />
            </g>
          </g>

          {/* Aged Gothic "NEVERMORE" Banner draped across base */}
          <g>
            {/* Banner Fold Drop Shadows */}
            <polygon points="10,38 12,41 10,43" fill="#78350F" />
            <polygon points="38,38 36,41 38,43" fill="#78350F" />
            {/* Main Center Parchment Banner */}
            <path
              d="M9 39 L24 37 L39 39 L37 44 L24 42.5 L11 44 Z"
              fill="url(#sub13-parchment)"
              stroke="#B45309"
              strokeWidth="0.8"
            />
            {/* Banner Gold Piping */}
            <path d="M11 40 L24 38.5 L37 40" stroke="#F59E0B" strokeWidth="0.5" fill="none" />
            {/* "NEVERMORE" Typography */}
            <text
              x="24"
              y="42"
              textAnchor="middle"
              fontSize="4.2"
              fontWeight="900"
              fill="#451A03"
              fontFamily="serif"
              letterSpacing="0.8"
            >
              NEVERMORE
            </text>
          </g>

          {/* Gothic Wrought-Iron Arch Corner Rosettes */}
          <circle cx="8" cy="44" r="1.5" fill="#475569" stroke="#1E293B" strokeWidth="0.5" />
          <circle cx="40" cy="44" r="1.5" fill="#475569" stroke="#1E293B" strokeWidth="0.5" />
          <circle cx="24" cy="2.5" r="1.5" fill="url(#sub13-gold-acc)" stroke="#78350F" strokeWidth="0.5" />
        </svg>
      );
    }

    // Level 14: Charm City Legend (Baroque Shield Cartouche, Imperial Sovereign Crown with Ermine Fur, Sapphires & Rubies)
    if (key.includes('subrank-14') || key.includes('legend') || key.includes('crown') || key.includes('👑') || key.includes('charm-crown')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <defs>
            {/* 24K Royal Gold Gradient */}
            <linearGradient id="sub14-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="25%" stopColor="#FEF08A" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            {/* Brilliant Gold Highlight */}
            <linearGradient id="sub14-gold-bright" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            {/* Imperial Crimson Velvet Damask */}
            <radialGradient id="sub14-velvet-damask" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="45%" stopColor="#B91C1C" />
              <stop offset="80%" stopColor="#7F1D1D" />
              <stop offset="100%" stopColor="#450A0A" />
            </radialGradient>
            {/* Hopkins Sapphire Jewel */}
            <radialGradient id="sub14-sapphire" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="35%" stopColor="#2563EB" />
              <stop offset="80%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#002D72" />
            </radialGradient>
            {/* Maryland Ruby Jewel */}
            <radialGradient id="sub14-ruby" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FCA5A5" />
              <stop offset="40%" stopColor="#EF4444" />
              <stop offset="85%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#500724" />
            </radialGradient>
            {/* Cartouche Shield Clip Path */}
            <clipPath id="sub14-cartouche-clip">
              <path d="M24 3 C36 3 43 8 43 21 C43 33 34 41 24 45.5 C14 41 5 33 5 21 C5 8 12 3 24 3 Z" />
            </clipPath>
          </defs>

          {/* Baroque Cartouche Shield Outer Frame */}
          {/* Drop Shadow Base */}
          <path
            d="M24 2 C38 2 46 7.5 46 21 C46 34.5 36 43 24 47.5 C12 43 2 34.5 2 21 C2 7.5 10 2 24 2 Z"
            fill="#450A0A"
          />
          {/* Heavy 24K Sculpted Gold Cartouche Rim with Acanthus Flanges */}
          <path
            d="M24 2 C37.5 2 45 7.5 45 21 C45 34 35 42 24 46.5 C13 42 3 34 3 21 C3 7.5 10.5 2 24 2 Z"
            fill="url(#sub14-gold)"
            stroke="#78350F"
            strokeWidth="1.2"
          />
          {/* Rococo Acanthus Side Scallops & Scrollwork */}
          <path d="M4 14 C1 18 1 24 4 28 C6 25 6 17 4 14 Z" fill="url(#sub14-gold-bright)" stroke="#78350F" strokeWidth="0.6" />
          <path d="M44 14 C47 18 47 24 44 28 C42 25 42 17 44 14 Z" fill="url(#sub14-gold-bright)" stroke="#78350F" strokeWidth="0.6" />

          {/* Inner Inset Rim */}
          <path
            d="M24 4 C35 4 42 9 42 21 C42 32 33 40 24 44.5 C15 40 6 32 6 21 C6 9 13 4 24 4 Z"
            fill="#78350F"
          />

          {/* Clipped Velvet Field */}
          <g clipPath="url(#sub14-cartouche-clip)">
            {/* Deep Royal Crimson Velvet Ground */}
            <rect x="2" y="2" width="44" height="46" fill="url(#sub14-velvet-damask)" />

            {/* Subtle Damask Diamond Quilting Lines */}
            <path
              d="M12 12 L24 24 L36 12 M12 24 L24 36 L36 24 M24 12 L36 24 M12 24 L24 12"
              stroke="#FEF2F2"
              strokeWidth="0.6"
              strokeDasharray="1.5 2"
              opacity="0.15"
            />

            {/* Radiant Golden Sunburst Beams Emanating Behind Crown */}
            {[-45, -30, -15, 0, 15, 30, 45].map((deg, i) => (
              <line
                key={i}
                x1="24"
                y1="16"
                x2={24 + 20 * Math.sin((deg * Math.PI) / 180)}
                y2={16 - 20 * Math.cos((deg * Math.PI) / 180)}
                stroke="#FEF08A"
                strokeWidth="0.8"
                opacity="0.35"
              />
            ))}

            {/* Flanking Golden Victory Laurel Boughs Framing Crown */}
            {/* Left Laurel Sprig */}
            <path d="M12 18 C11 25 15 31 20 34" stroke="#D97706" strokeWidth="1" fill="none" />
            <ellipse cx="12" cy="20" rx="1.5" ry="2.6" transform="rotate(-35 12 20)" fill="url(#sub14-gold)" />
            <ellipse cx="12.5" cy="25" rx="1.5" ry="2.6" transform="rotate(-15 12.5 25)" fill="url(#sub14-gold)" />
            <ellipse cx="15" cy="30" rx="1.5" ry="2.6" transform="rotate(20 15 30)" fill="url(#sub14-gold)" />
            <circle cx="14" cy="23" r="0.9" fill="#DC2626" />
            <circle cx="16" cy="28" r="0.9" fill="#DC2626" />

            {/* Right Laurel Sprig */}
            <path d="M36 18 C37 25 33 31 28 34" stroke="#D97706" strokeWidth="1" fill="none" />
            <ellipse cx="36" cy="20" rx="1.5" ry="2.6" transform="rotate(35 36 20)" fill="url(#sub14-gold)" />
            <ellipse cx="35.5" cy="25" rx="1.5" ry="2.6" transform="rotate(15 35.5 25)" fill="url(#sub14-gold)" />
            <ellipse cx="33" cy="30" rx="1.5" ry="2.6" transform="rotate(-20 33 30)" fill="url(#sub14-gold)" />
            <circle cx="34" cy="23" r="0.9" fill="#DC2626" />
            <circle cx="32" cy="28" r="0.9" fill="#DC2626" />

            {/* The Grand 3D Imperial Sovereign Crown */}
            <g>
              {/* Inner Crimson Velvet Cap rising in the crown interior */}
              <path
                d="M14 26 C14 16 34 16 34 26 Z"
                fill="url(#sub14-velvet-damask)"
                stroke="#78350F"
                strokeWidth="0.6"
              />
              {/* Crown Cap Velvet Highlight */}
              <ellipse cx="24" cy="20" rx="6" ry="4" fill="#EF4444" opacity="0.3" />

              {/* Imperial Globus Cruciger (Orb and Cross) Atop Crown */}
              <circle cx="24" cy="11.5" r="1.6" fill="url(#sub14-gold)" stroke="#78350F" strokeWidth="0.5" />
              <line x1="24" y1="8.5" x2="24" y2="11" stroke="url(#sub14-gold)" strokeWidth="1" strokeLinecap="round" />
              <line x1="22.5" y1="9.5" x2="25.5" y2="9.5" stroke="url(#sub14-gold)" strokeWidth="1" strokeLinecap="round" />

              {/* Chiseled 24K Gold 5-Peak Imperial Crown Framework */}
              <path
                d="M12 26 L11 18 L16 23 L18 14 L21 21 L24 13 L27 21 L30 14 L32 23 L37 18 L36 26 Z"
                fill="url(#sub14-gold)"
                stroke="#78350F"
                strokeWidth="0.9"
              />

              {/* Crown Jewels on 5 Peaks */}
              {/* Center Cross Pattée Jewel */}
              <circle cx="24" cy="13" r="2.2" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="23.3" cy="12.3" r="0.6" fill="#FFFFFF" />

              {/* Mid Peaks: Fleur-de-lis Sapphires */}
              <circle cx="18" cy="14.5" r="1.8" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="17.5" cy="14" r="0.5" fill="#FFFFFF" />
              <circle cx="30" cy="14.5" r="1.8" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="29.5" cy="14" r="0.5" fill="#FFFFFF" />

              {/* Outer Finial Pearls */}
              <circle cx="11" cy="18" r="1.5" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />
              <circle cx="37" cy="18" r="1.5" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.5" />

              {/* Golden Crown Diadem Base Band */}
              <rect x="11" y="25" width="26" height="5" rx="1.5" fill="url(#sub14-gold)" stroke="#78350F" strokeWidth="0.8" />

              {/* Alternating Oval Sapphires & Rubies on Diadem Band */}
              <ellipse cx="14" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="19" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="24" cy="27.5" rx="1.8" ry="1.4" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="29" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-sapphire)" stroke="#FFFFFF" strokeWidth="0.4" />
              <ellipse cx="34" cy="27.5" rx="1.5" ry="1.2" fill="url(#sub14-ruby)" stroke="#FFFFFF" strokeWidth="0.4" />

              {/* Ermine Fur Trim Band Beneath Gold Diadem */}
              <rect x="11.5" y="29.8" width="25" height="3" rx="1" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="0.5" />
              {/* Black Ermine Tufts */}
              <polygon points="14.5,30.5 15.5,30.5 15,32" fill="#002D72" />
              <polygon points="19.5,30.5 20.5,30.5 20,32" fill="#002D72" />
              <polygon points="24,30.5 25,30.5 24.5,32" fill="#002D72" />
              <polygon points="28.5,30.5 29.5,30.5 29,32" fill="#002D72" />
              <polygon points="33.5,30.5 34.5,30.5 34,32" fill="#002D72" />
            </g>
          </g>

          {/* Lower 3D Folded Ribbon Banner: CHARM CITY • LEGEND */}
          <g>
            {/* Swallowtail Ribbon Ends */}
            <path d="M7 40 L4 37 L7 34 L10 38 Z" fill="#78350F" stroke="url(#sub14-gold)" strokeWidth="0.6" />
            <path d="M41 40 L44 37 L41 34 L38 38 Z" fill="#78350F" stroke="url(#sub14-gold)" strokeWidth="0.6" />
            {/* Ribbon Underside Folds */}
            <polygon points="9,38 12,38 10,41" fill="#451A03" />
            <polygon points="39,38 36,38 38,41" fill="#451A03" />

            {/* Main Center Banner Front */}
            <path
              d="M8 38 L24 35.5 L40 38 L38 43.5 L24 41.5 L10 43.5 Z"
              fill="url(#sub14-gold)"
              stroke="#78350F"
              strokeWidth="0.9"
            />
            {/* Inner Gold Inset Line */}
            <path d="M10 39 L24 37 L38 39" stroke="#FFFBEB" strokeWidth="0.5" fill="none" />

            {/* Embossed Typography */}
            <text
              x="24"
              y="40.8"
              textAnchor="middle"
              fontSize="3.8"
              fontWeight="900"
              fill="#451A03"
              fontFamily="sans-serif"
              letterSpacing="0.6"
            >
              CHARM CITY {"\u2022"} LEGEND
            </text>
          </g>

          {/* Faceted Hopkins Sapphire Drop Jewel Pendant at Cartouche Tip */}
          <polygon points="24,44.5 26.5,46.5 24,48 21.5,46.5" fill="url(#sub14-sapphire)" stroke="url(#sub14-gold)" strokeWidth="0.6" />
          <polygon points="24,45 25.5,46.5 24,47.5 22.5,46.5" fill="#93C5FD" opacity="0.6" />
        </svg>
      );
    }

    // Level 15: Grand Blue Jay Laureate (16-Point Maltese Celestial Order Star, Purple Watered-Silk Sash & Soaring Blue Jay with Blazing Veritas Torch)
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <defs>
          {/* Royal Amethyst Watered-Silk Sash Gradient */}
          <linearGradient id="sub15-silk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E22CE" />
            <stop offset="35%" stopColor="#581C87" />
            <stop offset="70%" stopColor="#3B0764" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          {/* 24K Mirror Gold Gradient */}
          <linearGradient id="sub15-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="25%" stopColor="#FEF08A" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          {/* Chiseled Facet Light Gold */}
          <linearGradient id="sub15-facet-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
          {/* Chiseled Facet Dark Gold */}
          <linearGradient id="sub15-facet-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="60%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          {/* Johns Hopkins Midnight Navy Enamel */}
          <radialGradient id="sub15-navy-enamel" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#003D99" />
            <stop offset="60%" stopColor="#002D72" />
            <stop offset="100%" stopColor="#001438" />
          </radialGradient>
          {/* Blazing Torch Flame */}
          <linearGradient id="sub15-torch-flame" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="40%" stopColor="#F59E0B" />
            <stop offset="80%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          {/* Jay Cobalt Body */}
          <linearGradient id="sub15-jay-wing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#002D72" />
          </linearGradient>
        </defs>

        {/* Imperial Purple Watered-Silk Neck Sash Drapery Behind Star */}
        <path d="M15 1 L24 13 L33 1 L39 1 L28 17 L20 17 L9 1 Z" fill="url(#sub15-silk)" stroke="url(#sub15-gold)" strokeWidth="0.7" />
        <line x1="17" y1="1" x2="25" y2="13" stroke="#FDE047" strokeWidth="0.6" opacity="0.8" />
        <line x1="31" y1="1" x2="23" y2="13" stroke="#FDE047" strokeWidth="0.6" opacity="0.8" />

        {/* 16-Point Radiant Maltese Celestial Order Starburst */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 360) / 16;
          const isLong = i % 2 === 0;
          const rOuter = isLong ? 23 : 19;
          const rInner = 14.5;
          const aRad = (angle * Math.PI) / 180;
          const aLeft = ((angle - 11.25) * Math.PI) / 180;
          const aRight = ((angle + 11.25) * Math.PI) / 180;

          const tipX = 24 + rOuter * Math.cos(aRad);
          const tipY = 24 + rOuter * Math.sin(aRad);
          const leftX = 24 + rInner * Math.cos(aLeft);
          const leftY = 24 + rInner * Math.sin(aLeft);
          const rightX = 24 + rInner * Math.cos(aRight);
          const rightY = 24 + rInner * Math.sin(aRight);

          return (
            <g key={i}>
              {/* Left Light Facet */}
              <polygon
                points={`24,24 ${tipX},${tipY} ${leftX},${leftY}`}
                fill="url(#sub15-facet-light)"
                stroke="#78350F"
                strokeWidth="0.3"
              />
              {/* Right Shadow Facet */}
              <polygon
                points={`24,24 ${tipX},${tipY} ${rightX},${rightY}`}
                fill="url(#sub15-facet-dark)"
                stroke="#78350F"
                strokeWidth="0.3"
              />
            </g>
          );
        })}

        {/* Outer Beaded Gemstone Collar (Alternating Diamonds & Sapphires) */}
        <circle cx="24" cy="24" r="14.8" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.8" />
        <circle cx="24" cy="24" r="13.2" fill="#001845" stroke="url(#sub15-gold)" strokeWidth="0.6" />

        {/* 12 Concentric Brilliant Jewels */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x = 24 + 14 * Math.cos(rad);
          const y = 24 + 14 * Math.sin(rad);
          const isSapphire = i % 2 === 0;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="0.9"
              fill={isSapphire ? '#38BDF8' : '#FFFFFF'}
              stroke="#78350F"
              strokeWidth="0.25"
            />
          );
        })}

        {/* Sculpted Roman Laurel Wreath of Victory */}
        <circle cx="24" cy="24" r="12" fill="url(#sub15-navy-enamel)" stroke="url(#sub15-gold)" strokeWidth="0.9" />
        <path d="M14 24 C14 29.5 18.5 34 24 34 C29.5 34 34 29.5 34 24 C34 18.5 29.5 14 24 14" stroke="url(#sub15-gold)" strokeWidth="0.8" fill="none" opacity="0.6" />

        {/* Golden Laurel Leaves */}
        {[-50, -25, 0, 25, 50].map((deg, i) => (
          <g key={i} transform={`rotate(${deg} 24 24)`}>
            <ellipse cx="13.5" cy="24" rx="1.1" ry="2.2" transform="rotate(-30 13.5 24)" fill="url(#sub15-facet-light)" stroke="#78350F" strokeWidth="0.3" />
            <ellipse cx="34.5" cy="24" rx="1.1" ry="2.2" transform="rotate(30 34.5 24)" fill="url(#sub15-facet-light)" stroke="#78350F" strokeWidth="0.3" />
            <circle cx="14" cy="24" r="0.6" fill="#DC2626" />
            <circle cx="34" cy="24" r="0.6" fill="#DC2626" />
          </g>
        ))}

        {/* Central Masterpiece: Soaring Blue Jay in Full Flight clutching the Veritas Torch */}
        <g>
          {/* Radiating Veritas Light Core */}
          <circle cx="24" cy="22" r="7.5" fill="#002D72" opacity="0.7" />
          <circle cx="24" cy="22" r="5" fill="#0284C7" opacity="0.35" />

          {/* Broad Outstretched Wings */}
          {/* Left Wing Layered Feathers */}
          <path
            d="M23 21 C18 17 14 16 13 18 C14 20 17 21 20 22 C16 22 15 24 18 24.5 C20 25 22 24 23 23 Z"
            fill="url(#sub15-jay-wing)"
            stroke="#001438"
            strokeWidth="0.5"
          />
          <path d="M14 18 C16 19 19 20 22 21" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />

          {/* Right Wing Layered Feathers (Holding High) */}
          <path
            d="M25 21 C30 17 34 16 35 18 C34 20 31 21 28 22 C32 22 33 24 30 24.5 C28 25 26 24 25 23 Z"
            fill="url(#sub15-jay-wing)"
            stroke="#001438"
            strokeWidth="0.5"
          />
          <path d="M34 18 C32 19 29 20 26 21" stroke="#FFFFFF" strokeWidth="0.5" fill="none" />

          {/* Blue Jay Body in Soaring Posture */}
          <ellipse cx="24" cy="22.5" rx="3" ry="4" fill="url(#sub15-jay-wing)" stroke="#001438" strokeWidth="0.4" />
          {/* White Chest Feathers */}
          <ellipse cx="24" cy="23" rx="1.8" ry="2.2" fill="#FFFFFF" />

          {/* Blue Jay Head with Crest */}
          <circle cx="24" cy="18.5" r="2.4" fill="url(#sub15-jay-wing)" />
          {/* Regal Crest Spike */}
          <path d="M23 17 Q24 14 25 15.5 Q24.5 17 24 18 Z" fill="#38BDF8" />
          {/* White Face Mark */}
          <path d="M22.5 18.5 Q24 20 25.5 18.5 Q24 17.5 22.5 18.5 Z" fill="#FFFFFF" />
          {/* Golden Beak */}
          <polygon points="23.5,18.5 24.5,18.5 24,20" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.3" />
          <circle cx="24" cy="18" r="0.5" fill="#001438" />

          {/* Fan Tail Feathers with Navy & White Barring */}
          <path d="M22.5 25.5 L21 29.5 L24 28 L27 29.5 L25.5 25.5 Z" fill="url(#sub15-jay-wing)" stroke="#001438" strokeWidth="0.4" />
          <line x1="22" y1="28" x2="26" y2="28" stroke="#FFFFFF" strokeWidth="0.6" />

          {/* Golden Talons clutching the Blazing Veritas Torch */}
          <ellipse cx="23.2" cy="24.8" rx="0.8" ry="0.6" fill="url(#sub15-gold)" />
          <ellipse cx="24.8" cy="24.8" rx="0.8" ry="0.6" fill="url(#sub15-gold)" />

          {/* The Blazing Veritas Golden Torch */}
          {/* Burnished Brass Torch Handle & Fluted Cup */}
          <path d="M23 25 L25 25 L24.5 29 L23.5 29 Z" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.4" />
          <path d="M22 25 Q24 26 26 25 L25.5 24 L22.5 24 Z" fill="url(#sub15-gold)" stroke="#78350F" strokeWidth="0.4" />
          {/* Multi-layered Luminous Blazing Flame */}
          <path
            d="M24 17 C22 20 22 23 24 24 C26 23 26 20 24 17 Z"
            fill="url(#sub15-torch-flame)"
          />
          <path
            d="M24 19 C23 21 23 23 24 23.5 C25 23 25 21 24 19 Z"
            fill="#FEF08A"
          />
          <circle cx="24" cy="22" r="0.9" fill="#FFFFFF" />
        </g>

        {/* Lower Imperial Golden Banner: SUPREME LAUREATE • XV */}
        <g>
          {/* Ribbon Tail Drop Shadow Behind */}
          <path d="M7 41 L4 38 L7 35 L10 39 Z" fill="#3B0764" stroke="url(#sub15-gold)" strokeWidth="0.5" />
          <path d="M41 41 L44 38 L41 35 L38 39 Z" fill="#3B0764" stroke="url(#sub15-gold)" strokeWidth="0.5" />
          {/* Underfolds */}
          <polygon points="9,39 12,39 10,42" fill="#1E1B4B" />
          <polygon points="39,39 36,39 38,42" fill="#1E1B4B" />

          {/* Curved Heraldic Front Banner */}
          <path
            d="M8 39 L24 36.5 L40 39 L38 44.5 L24 42.5 L10 44.5 Z"
            fill="url(#sub15-gold)"
            stroke="#78350F"
            strokeWidth="0.8"
          />
          <path d="M10 40 L24 38 L38 40" stroke="#FFFDF0" strokeWidth="0.5" fill="none" />

          {/* Embossed Typography */}
          <text
            x="24"
            y="41.8"
            textAnchor="middle"
            fontSize="3.6"
            fontWeight="900"
            fill="#451A03"
            fontFamily="sans-serif"
            letterSpacing="0.6"
          >
            SUPREME LAUREATE {"\u2022"} XV
          </text>
        </g>

        {/* Faceted Ruby Jewel Drop at Lowest Apex */}
        <polygon points="24,44.5 25.8,46.5 24,48 22.2,46.5" fill="#DC2626" stroke="url(#sub15-gold)" strokeWidth="0.5" />
        <circle cx="24" cy="46.3" r="0.5" fill="#FEF2F2" />
      </svg>
    );
  };

  return <span className="inline-flex items-center justify-center flex-shrink-0">{renderSvg()}</span>;
};

// ==========================================
// 2. MAJOR RANK BADGES (5 RANKS)
// ==========================================

export const RankBadgeArt: React.FC<{
  rankId: number;
  size?: number;
  className?: string;
}> = ({ rankId, size = 48, className = '' }) => {
  switch (rankId) {
    case 1:
      // Rank 1: Hopkins Nestling Crest (Collegiate Enamel & Golden Homewood Nest Medallion)
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="nest-gold-main" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFDF0" />
              <stop offset="20%" stopColor="#FEF08A" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="85%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="nest-gold-bright" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FEF08A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
            <radialGradient id="nest-navy-enamel" cx="50%" cy="38%" r="60%">
              <stop offset="0%" stopColor="#003D99" />
              <stop offset="50%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#001438" />
            </radialGradient>
            <linearGradient id="nest-porcelain" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#FFFBEB" />
              <stop offset="85%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>
            <linearGradient id="nest-jay-body" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="35%" stopColor="#0284C7" />
              <stop offset="75%" stopColor="#002D72" />
              <stop offset="100%" stopColor="#001845" />
            </linearGradient>
            <linearGradient id="nest-twig-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <linearGradient id="nest-goggle-brass" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <radialGradient id="nest-goggle-lens" cx="35%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#BAE6FD" />
              <stop offset="80%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#002D72" />
            </radialGradient>
            <linearGradient id="nest-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#002D72" />
              <stop offset="50%" stopColor="#001845" />
              <stop offset="100%" stopColor="#000E29" />
            </linearGradient>
            <radialGradient id="nest-ambient" cx="50%" cy="38%" r="55%">
              <stop offset="0%" stopColor="#F0F9FF" />
              <stop offset="70%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </radialGradient>
          </defs>

          {/* Top Heraldic Sunburst Rays */}
          {[-40, -20, 0, 20, 40].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 32 + 25 * Math.sin(rad);
            const y2 = 28 - 25 * Math.cos(rad);
            return (
              <line
                key={i}
                x1="32"
                y1="18"
                x2={x2}
                y2={y2}
                stroke="#FDE047"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />
            );
          })}

          {/* Top Collegiate Coronet Crest with Sapphire */}
          <g>
            <path
              d="M27 7 L32 2 L37 7 L35 10 L29 10 Z"
              fill="url(#nest-gold-main)"
              stroke="#78350F"
              strokeWidth="0.8"
            />
            <circle cx="32" cy="6" r="1.5" fill="#2563EB" stroke="#FFFFFF" strokeWidth="0.6" />
            <circle cx="28" cy="8" r="0.8" fill="#FFFFFF" />
            <circle cx="36" cy="8" r="0.8" fill="#FFFFFF" />
          </g>

          {/* Outer Heavy Coin-Edge Fluted 24K Gold Rim */}
          <circle cx="32" cy="30" r="28.5" fill="url(#nest-gold-main)" stroke="#78350F" strokeWidth="1" />
          <circle cx="32" cy="30" r="26.2" fill="url(#nest-navy-enamel)" stroke="url(#nest-gold-main)" strokeWidth="0.8" />

          {/* 20 Beaded Spherical Studs */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i * 360) / 20;
            const rad = (angle * Math.PI) / 180;
            const x = 32 + 27.2 * Math.cos(rad);
            const y = 30 + 27.2 * Math.sin(rad);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="1.1"
                fill="#FEF08A"
                stroke="#B45309"
                strokeWidth="0.3"
              />
            );
          })}

          {/* Concentric Double Braided Cable Rope */}
          <circle cx="32" cy="30" r="24.2" stroke="url(#nest-gold-main)" strokeWidth="1.2" strokeDasharray="2 1.5" fill="none" />
          <circle cx="32" cy="30" r="22.8" stroke="url(#nest-gold-bright)" strokeWidth="0.6" fill="none" opacity="0.7" />

          {/* Inner Ambient Glow Disc */}
          <circle cx="32" cy="30" r="21.5" fill="url(#nest-ambient)" />

          {/* Guilloché Subtle Radial Etching Lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            return (
              <line
                key={i}
                x1="32"
                y1="30"
                x2={32 + 20 * Math.cos(rad)}
                y2={30 + 20 * Math.sin(rad)}
                stroke="#38BDF8"
                strokeWidth="0.6"
                strokeDasharray="1.5 2"
                opacity="0.4"
              />
            );
          })}

          {/* Sculpted Golden Laurel Branches Flanking Sides */}
          {/* Left Laurel Sprig */}
          <path d="M14 26 C13 32 16 40 22 45" stroke="#D97706" strokeWidth="1.4" fill="none" />
          <ellipse cx="14" cy="27" rx="1.8" ry="3" transform="rotate(-40 14 27)" fill="url(#nest-gold-main)" />
          <ellipse cx="13" cy="32" rx="1.8" ry="3.2" transform="rotate(-20 13 32)" fill="url(#nest-gold-main)" />
          <ellipse cx="15" cy="38" rx="1.8" ry="3.2" transform="rotate(15 15 38)" fill="url(#nest-gold-main)" />
          <ellipse cx="19" cy="43" rx="1.8" ry="3.2" transform="rotate(45 19 43)" fill="url(#nest-gold-main)" />
          <circle cx="15.5" cy="35" r="1.1" fill="#DC2626" />
          <circle cx="17" cy="41" r="1.1" fill="#DC2626" />

          {/* Right Laurel Sprig */}
          <path d="M50 26 C51 32 48 40 42 45" stroke="#D97706" strokeWidth="1.4" fill="none" />
          <ellipse cx="50" cy="27" rx="1.8" ry="3" transform="rotate(40 50 27)" fill="url(#nest-gold-main)" />
          <ellipse cx="51" cy="32" rx="1.8" ry="3.2" transform="rotate(20 51 32)" fill="url(#nest-gold-main)" />
          <ellipse cx="49" cy="38" rx="1.8" ry="3.2" transform="rotate(-15 49 38)" fill="url(#nest-gold-main)" />
          <ellipse cx="45" cy="43" rx="1.8" ry="3.2" transform="rotate(-45 45 43)" fill="url(#nest-gold-main)" />
          <circle cx="48.5" cy="35" r="1.1" fill="#DC2626" />
          <circle cx="47" cy="41" r="1.1" fill="#DC2626" />

          {/* Woven Homewood Golden Twig & Oak Sprig Nest Cradle */}
          <g>
            {/* Base Twigs Arching Across */}
            <path d="M17 41 Q32 48 47 41" stroke="url(#nest-twig-grad)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M19 44 Q32 49 45 44" stroke="url(#nest-twig-grad)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M21 46 Q32 50 43 46" stroke="#451A03" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Interlaced Twigs */}
            <line x1="20" y1="41" x2="28" y2="46" stroke="#92400E" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="44" y1="41" x2="36" y2="46" stroke="#92400E" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="26" y1="42" x2="34" y2="47" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="38" y1="42" x2="30" y2="47" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
            {/* Maryland Ivy / Oak Leaves in Nest */}
            <ellipse cx="20" cy="40" rx="1.5" ry="3" transform="rotate(-50 20 40)" fill="#059669" />
            <ellipse cx="44" cy="40" rx="1.5" ry="3" transform="rotate(50 44 40)" fill="#059669" />
            <ellipse cx="32" cy="48" rx="2" ry="1.2" fill="#D97706" />
          </g>

          {/* Imperial Porcelain Cracked Eggshell */}
          <g>
            {/* Eggshell Body */}
            <path
              d="M19 33 C19 42 24 45 32 45 C40 45 45 42 45 33 L40 36 L36 32.5 L32 37 L28 32.5 L24 36 Z"
              fill="url(#nest-porcelain)"
              stroke="#94A3B8"
              strokeWidth="1.4"
            />
            {/* Inner Shell Shadow */}
            <path
              d="M20 34 L24 36 L28 33 L32 37 L36 33 L40 36 L44 34 C44 36 43 38 41 40 C38 38 26 38 23 40 C21 38 20 36 20 34 Z"
              fill="#CBD5E1"
              opacity="0.4"
            />
            {/* Hopkins Navy Chevron Band Across Shell */}
            <path
              d="M21 38.5 L27 41.5 L32 39.5 L37 41.5 L43 38.5 L42.5 40.5 L37 43.5 L32 41.5 L27 43.5 L21.5 40.5 Z"
              fill="#002D72"
              stroke="url(#nest-gold-main)"
              strokeWidth="0.5"
            />
            {/* 3 Gold Stars on Egg Band */}
            <polygon points="32,39.5 32.8,40.8 34.2,40.8 33.1,41.7 33.5,43 32,42.2 30.5,43 30.9,41.7 29.8,40.8 31.2,40.8" fill="#FEF08A" />
            <circle cx="26.5" cy="41.5" r="0.8" fill="#FEF08A" />
            <circle cx="37.5" cy="41.5" r="0.8" fill="#FEF08A" />
            {/* Realistic Shell Fractures */}
            <path d="M26 35 L28 39 L27 42" stroke="#94A3B8" strokeWidth="0.7" fill="none" opacity="0.7" />
          </g>

          {/* Heroic Baby Blue Jay Pioneer Peeking Out */}
          <g>
            {/* Wing Shoulders resting on Shell Edge */}
            <ellipse cx="21" cy="33" rx="3.5" ry="2.2" transform="rotate(-25 21 33)" fill="url(#nest-jay-body)" stroke="#001845" strokeWidth="0.6" />
            <ellipse cx="43" cy="33" rx="3.5" ry="2.2" transform="rotate(25 43 33)" fill="url(#nest-jay-body)" stroke="#001845" strokeWidth="0.6" />
            <line x1="19" y1="33" x2="23" y2="33" stroke="#93C5FD" strokeWidth="0.7" strokeLinecap="round" />
            <line x1="41" y1="33" x2="45" y2="33" stroke="#93C5FD" strokeWidth="0.7" strokeLinecap="round" />

            {/* Blue Jay Head */}
            <ellipse cx="32" cy="25" rx="11" ry="10" fill="url(#nest-jay-body)" />

            {/* Layered Crest Feathers on Head */}
            <path d="M30 14 Q32 10 35 12 Q33 15 32 17 Z" fill="#0284C7" />
            <path d="M28 15 Q30 11 32 13 Q31 16 30 17 Z" fill="#002D72" />
            <path d="M32 14 Q35 11 37 13 Q35 16 34 17 Z" fill="#38BDF8" />

            {/* White Facial Mask & Chin Bib */}
            <path d="M23 24 Q32 30 41 24 Q32 20 23 24 Z" fill="#FFFFFF" />
            <path d="M27 27 Q32 32 37 27 Q32 30 27 27 Z" fill="#F8FAFC" />
            {/* Jay Black Collar / Bridle Markings */}
            <path d="M23 25 C23 29 27 32 32 32 C37 32 41 29 41 25" stroke="#001438" strokeWidth="1.2" fill="none" />

            {/* Rosy Pink Blushing Cheeks */}
            <ellipse cx="25" cy="26" rx="2.5" ry="1.6" fill="#FDA4AF" opacity="0.65" />
            <ellipse cx="39" cy="26" rx="2.5" ry="1.6" fill="#FDA4AF" opacity="0.65" />

            {/* Big Expressive Sparkling Traveler Eyes */}
            {/* Left Eye */}
            <circle cx="27.5" cy="22.5" r="2.6" fill="#0F172A" />
            <circle cx="27.5" cy="22.5" r="2.2" fill="#002D72" />
            <circle cx="27.5" cy="22.5" r="1.6" fill="#0F172A" />
            <circle cx="26.6" cy="21.6" r="0.9" fill="#FFFFFF" />
            <circle cx="28.4" cy="23.3" r="0.4" fill="#FFFFFF" />

            {/* Right Eye */}
            <circle cx="36.5" cy="22.5" r="2.6" fill="#0F172A" />
            <circle cx="36.5" cy="22.5" r="2.2" fill="#002D72" />
            <circle cx="36.5" cy="22.5" r="1.6" fill="#0F172A" />
            <circle cx="35.6" cy="21.6" r="0.9" fill="#FFFFFF" />
            <circle cx="37.4" cy="23.3" r="0.4" fill="#FFFFFF" />

            {/* Cute Golden-Orange Beak */}
            <polygon points="29.5,24 34.5,24 32,28.5" fill="#F59E0B" stroke="#D97706" strokeWidth="0.6" />
            <line x1="29.5" y1="24" x2="34.5" y2="24" stroke="#B45309" strokeWidth="0.7" />

            {/* Illuminated Parchment Diploma Scroll Held in Beak */}
            <g transform="rotate(-12 32 27)">
              <rect x="27" y="26.5" width="13" height="4" rx="1.2" fill="#FFFBEB" stroke="#D97706" strokeWidth="0.8" />
              {/* Gold script lines on scroll */}
              <line x1="29" y1="28" x2="33" y2="28" stroke="#D97706" strokeWidth="0.6" />
              <line x1="29" y1="29.3" x2="32" y2="29.3" stroke="#D97706" strokeWidth="0.6" />
              {/* Crimson Ribbon & Wax Seal */}
              <rect x="34" y="26.2" width="2" height="4.6" fill="#DC2626" />
              <circle cx="35" cy="28.5" r="1.2" fill="#991B1B" />
              <circle cx="35" cy="28.5" r="0.6" fill="#F59E0B" />
              <path d="M35 30.5 L33.5 33 L35 32 L36.5 33 Z" fill="#DC2626" />
            </g>

            {/* Vintage Brass Aviator Goggles on Forehead */}
            <g>
              {/* Leather Strap */}
              <path d="M22 17 Q32 19 42 17" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Left Lens & Rim */}
              <circle cx="27" cy="16.5" r="4.2" fill="url(#nest-goggle-brass)" stroke="#451A03" strokeWidth="0.8" />
              <circle cx="27" cy="16.5" r="3.2" fill="url(#nest-goggle-lens)" />
              <line x1="25" y1="15" x2="28" y2="18" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity="0.9" />
              <circle cx="27" cy="13.2" r="0.5" fill="#FEF08A" />

              {/* Right Lens & Rim */}
              <circle cx="37" cy="16.5" r="4.2" fill="url(#nest-goggle-brass)" stroke="#451A03" strokeWidth="0.8" />
              <circle cx="37" cy="16.5" r="3.2" fill="url(#nest-goggle-lens)" />
              <line x1="35" y1="15" x2="38" y2="18" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" opacity="0.9" />
              <circle cx="37" cy="13.2" r="0.5" fill="#FEF08A" />

              {/* Center Bridge & Screw */}
              <rect x="30" y="15.5" width="4" height="2" rx="0.5" fill="url(#nest-goggle-brass)" stroke="#78350F" strokeWidth="0.6" />
              <circle cx="32" cy="16.5" r="0.6" fill="#451A03" />

              {/* Explorer Feather Tucked in Goggle */}
              <path d="M39 15 C42 11 44 6 43 3 C41 7 40 10 39 14 Z" fill="#38BDF8" stroke="#002D72" strokeWidth="0.6" />
              <line x1="42" y1="5" x2="39" y2="15" stroke="#FFFFFF" strokeWidth="0.5" />
            </g>
          </g>

          {/* Majestic 3D Folded Ribbon Banner: NESTLING • I */}
          <g>
            {/* Left & Right Swallowtail Ribbon Tails Behind */}
            <path d="M12 55 L7 52 L12 49 L16 53 Z" fill="#001845" stroke="url(#nest-gold-main)" strokeWidth="0.8" />
            <path d="M52 55 L57 52 L52 49 L48 53 Z" fill="#001845" stroke="url(#nest-gold-main)" strokeWidth="0.8" />
            {/* Ribbon Folds Shadow Under */}
            <polygon points="15,53 18,53 16,56" fill="#000E29" />
            <polygon points="49,53 46,53 48,56" fill="#000E29" />

            {/* Main Center Banner Front */}
            <path
              d="M14 53 L32 50.5 L50 53 L47 59.5 L32 57 L17 59.5 Z"
              fill="url(#nest-ribbon)"
              stroke="url(#nest-gold-main)"
              strokeWidth="1.2"
            />
            {/* Banner Inner Gold Piping */}
            <path
              d="M17 54 L32 52 L47 54"
              stroke="#FEF08A"
              strokeWidth="0.6"
              fill="none"
              opacity="0.7"
            />
            {/* Embossed Gold Typography: NESTLING • I */}
            <text
              x="32"
              y="56.3"
              textAnchor="middle"
              fontSize="6.2"
              fontWeight="900"
              fill="#FEF08A"
              fontFamily="sans-serif"
              letterSpacing="1.2"
            >
              NESTLING &bull; I
            </text>

            {/* Suspended Golden Medal Pendant Under Ribbon */}
            <polygon points="32,58 33.5,60 36,60 34,61.5 35,63.5 32,62 29,63.5 30,61.5 28,60 30.5,60" fill="url(#nest-gold-main)" stroke="#78350F" strokeWidth="0.4" />
            <circle cx="32" cy="61" r="0.8" fill="#2563EB" />
          </g>
        </svg>
      );

    case 2:
      // Rank 2: Charm City Explorer Crest (Octagonal Bronze Compass & Quills)
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="exp-bronze" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D97706" />
              <stop offset="50%" stopColor="#92400E" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <linearGradient id="exp-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="exp-crimson" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="100%" stopColor="#991B1B" />
            </linearGradient>
            <linearGradient id="exp-navy" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#001845" />
            </linearGradient>
          </defs>

          {/* Dual Crossed Vintage Telescopes Behind */}
          <g transform="rotate(45 32 30)">
            <rect x="30" y="6" width="4" height="48" rx="2" fill="url(#exp-gold)" stroke="#78350F" strokeWidth="0.8" />
            <rect x="29" y="16" width="6" height="12" rx="1" fill="#78350F" />
            <rect x="28.5" y="44" width="7" height="6" rx="1.5" fill="url(#exp-gold)" />
          </g>
          <g transform="rotate(-45 32 30)">
            <rect x="30" y="6" width="4" height="48" rx="2" fill="url(#exp-gold)" stroke="#78350F" strokeWidth="0.8" />
            <rect x="29" y="16" width="6" height="12" rx="1" fill="#78350F" />
            <rect x="28.5" y="44" width="7" height="6" rx="1.5" fill="url(#exp-gold)" />
          </g>

          {/* Octagonal Bronze Compass Casing */}
          <polygon
            points="21,4 43,4 58,19 58,41 43,56 21,56 6,41 6,19"
            fill="url(#exp-bronze)"
            stroke="url(#exp-gold)"
            strokeWidth="1.8"
          />

          {/* 8 Corner Rivets */}
          {[[21, 6], [43, 6], [56, 19], [56, 41], [43, 54], [21, 54], [8, 41], [8, 19]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.3" fill="#FEF08A" />
          ))}

          {/* Inner Circular Compass Dial */}
          <circle cx="32" cy="30" r="21" fill="#001845" stroke="url(#exp-gold)" strokeWidth="1.5" />
          
          {/* Compass Degrees Ring */}
          <circle cx="32" cy="30" r="18" stroke="#38BDF8" strokeWidth="0.8" strokeDasharray="1.5 2" fill="none" opacity="0.6" />

          {/* Cardinal Directions */}
          <text x="32" y="17" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#FEF08A" fontFamily="sans-serif">N</text>
          <text x="32" y="47" textAnchor="middle" fontSize="5" fontWeight="800" fill="#94A3B8" fontFamily="sans-serif">S</text>
          <text x="47" y="32" textAnchor="middle" fontSize="5" fontWeight="800" fill="#94A3B8" fontFamily="sans-serif">E</text>
          <text x="17" y="32" textAnchor="middle" fontSize="5" fontWeight="800" fill="#94A3B8" fontFamily="sans-serif">W</text>

          {/* 3D Faceted 8-Point Navigational Star */}
          {/* North Point */}
          <polygon points="32,18 35,27 32,30" fill="#DC2626" />
          <polygon points="32,18 29,27 32,30" fill="url(#exp-crimson)" />
          {/* South Point */}
          <polygon points="32,42 35,33 32,30" fill="#3B82F6" />
          <polygon points="32,42 29,33 32,30" fill="url(#exp-navy)" />
          {/* East Point */}
          <polygon points="44,30 35,27 32,30" fill="#FEF08A" />
          <polygon points="44,30 35,33 32,30" fill="#D97706" />
          {/* West Point */}
          <polygon points="20,30 29,27 32,30" fill="#FEF08A" />
          <polygon points="20,30 29,33 32,30" fill="#D97706" />

          {/* Corner points */}
          <polygon points="40,22 35,27 32,30 35,30" fill="#B45309" opacity="0.7" />
          <polygon points="24,22 29,27 32,30 29,30" fill="#B45309" opacity="0.7" />
          <polygon points="40,38 35,33 32,30 35,30" fill="#B45309" opacity="0.7" />
          <polygon points="24,38 29,33 32,30 29,30" fill="#B45309" opacity="0.7" />

          {/* Central Hopkins Veritas Shield Crest */}
          <path d="M28 26 L36 26 L36 32 C36 35 32 37 32 37 C32 37 28 35 28 32 Z" fill="#002D72" stroke="url(#exp-gold)" strokeWidth="1" />
          {/* Miniature Open Book */}
          <path d="M29.5 28 Q32 29 32 33 Q32 29 34.5 28" stroke="#FFFFFF" strokeWidth="0.8" fill="none" />
          <line x1="32" y1="29" x2="32" y2="33" stroke="url(#exp-gold)" strokeWidth="0.8" />

          {/* Lower Ribbon Banner: EXPLORER II */}
          <path d="M14 53 L32 50 L50 53 L47 59 L32 56 L17 59 Z" fill="#78350F" stroke="url(#exp-gold)" strokeWidth="1" />
          <text x="32" y="56" textAnchor="middle" fontSize="6" fontWeight="900" fill="#FEF08A" fontFamily="sans-serif" letterSpacing="1">
            EXPLORER &bull; II
          </text>
        </svg>
      );

    case 3:
      // Rank 3: Baltimore Navigator Crest (Teak Ships Helm & Patapsco Anchor)
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="nav-helm" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#92400E" />
              <stop offset="50%" stopColor="#78350F" />
              <stop offset="100%" stopColor="#451A03" />
            </linearGradient>
            <linearGradient id="nav-brass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="nav-sea" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#042F2E" />
            </linearGradient>
          </defs>

          {/* 8 Ship Helm Turned Spoke Handles */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * 45;
            return (
              <g key={i} transform={`rotate(${angle} 32 30)`}>
                <rect x="30.5" y="2" width="3" height="12" rx="1.5" fill="url(#nav-helm)" stroke="url(#nav-brass)" strokeWidth="0.6" />
                <circle cx="32" cy="3" r="2.2" fill="url(#nav-brass)" />
              </g>
            );
          })}

          {/* Outer Wheel Rim */}
          <circle cx="32" cy="30" r="21" fill="url(#nav-helm)" stroke="url(#nav-brass)" strokeWidth="2" />
          <circle cx="32" cy="30" r="17.5" fill="none" stroke="url(#nav-brass)" strokeWidth="1" strokeDasharray="1.5 1.5" />

          {/* Inner Teal Patapsco Enamel Ring */}
          <circle cx="32" cy="30" r="16" fill="url(#nav-sea)" />

          {/* 8 Gold Nautical Stars around inner ring */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = i * 45 + 22.5;
            const rad = (angle * Math.PI) / 180;
            const x = 32 + 13.5 * Math.cos(rad);
            const y = 30 + 13.5 * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="1" fill="#FEF08A" />;
          })}

          {/* Burnished Heavy Naval Anchor */}
          {/* Top Anchor Ring */}
          <circle cx="32" cy="20" r="3.5" stroke="url(#nav-brass)" strokeWidth="1.8" fill="none" />
          {/* Stock Crossbar */}
          <line x1="22" y1="24" x2="42" y2="24" stroke="url(#nav-brass)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="22" cy="24" r="1.5" fill="#451A03" />
          <circle cx="42" cy="24" r="1.5" fill="#451A03" />
          {/* Shank */}
          <line x1="32" y1="21" x2="32" y2="41" stroke="url(#nav-brass)" strokeWidth="3" strokeLinecap="round" />
          {/* Flukes Curve */}
          <path d="M21 33 C21 42 43 42 43 33" stroke="url(#nav-brass)" strokeWidth="2.8" fill="none" strokeLinecap="round" />
          <polygon points="18,33 22,34 20,38" fill="#D97706" />
          <polygon points="46,33 42,34 44,38" fill="#D97706" />

          {/* 3D Coiled Hemp Cord */}
          <path d="M30 22 Q35 25 32 28 Q28 31 34 34 Q30 37 32 40" stroke="#FBBF24" strokeWidth="1.4" fill="none" strokeDasharray="2.5 1.5" />

          {/* Soaring Blue Jay Sea Bird Perched on Top */}
          <path d="M26 12 C28 8 36 8 38 12 C35 14 34 16 32 18 C30 16 29 14 26 12 Z" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="0.8" />
          <polygon points="31,18 33,18 32,20" fill="#F59E0B" />

          {/* Lower Naval Banner: NAVIGATOR III */}
          <path d="M12 53 L32 50 L52 53 L49 59 L32 56 L15 59 Z" fill="#042F2E" stroke="url(#nav-brass)" strokeWidth="1" />
          <text x="32" y="56" textAnchor="middle" fontSize="5.8" fontWeight="900" fill="#FEF08A" fontFamily="sans-serif" letterSpacing="1">
            NAVIGATOR &bull; III
          </text>
        </svg>
      );

    case 4:
      // Rank 4: Monumental Connoisseur Crest (Royal Baroque Maryland Cartouche)
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="con-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <linearGradient id="con-ruby" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#450A0A" />
            </linearGradient>
          </defs>

          {/* Baroque Acanthus Scrollwork Auriole Frame */}
          <path
            d="M12 18 C8 12 18 6 26 10 C29 6 35 6 38 10 C46 6 56 12 52 18 C58 26 58 36 50 44 C46 48 38 52 32 54 C26 52 18 48 14 44 C6 36 6 26 12 18 Z"
            fill="url(#con-gold)"
            stroke="#78350F"
            strokeWidth="1.2"
          />

          {/* Radiating Sunburst Behind Washington Monument */}
          {Array.from({ length: 9 }).map((_, i) => {
            const angle = -60 + i * 15;
            return (
              <line
                key={i}
                x1="32"
                y1="16"
                x2={32 + 18 * Math.sin((angle * Math.PI) / 180)}
                y2={16 - 18 * Math.cos((angle * Math.PI) / 180)}
                stroke="#FEF08A"
                strokeWidth="1"
                opacity="0.8"
              />
            );
          })}

          {/* Washington Monument Marble Obelisk Crest */}
          <polygon points="32,4 34,7 34,16 30,16 30,7" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
          <polygon points="32,4 34,7 32,7" fill="#E2E8F0" />

          {/* Two Rampant Blue Jays Flanking */}
          <path d="M16 14 C18 10 24 11 26 15 C24 18 22 20 20 22 C18 20 15 17 16 14 Z" fill="#002D72" stroke="#FFFFFF" strokeWidth="0.6" />
          <path d="M48 14 C46 10 40 11 38 15 C40 18 42 20 44 22 C46 20 49 17 48 14 Z" fill="#002D72" stroke="#FFFFFF" strokeWidth="0.6" />

          {/* Authentic 4-Quartered Maryland Shield */}
          <g transform="translate(18, 16)">
            {/* Shield Outline */}
            <clipPath id="md-shield-clip">
              <path d="M0 0 L28 0 L28 18 C28 26 14 30 14 30 C14 30 0 26 0 18 Z" />
            </clipPath>
            
            <g clipPath="url(#md-shield-clip)">
              {/* Q1: Top Left - Calvert Chevrons (Gold & Black) */}
              <rect x="0" y="0" width="14" height="11" fill="#F59E0B" />
              <polygon points="0,0 4,0 0,6" fill="#18181B" />
              <polygon points="4,0 10,0 0,11" fill="#18181B" />
              <polygon points="10,0 14,0 5,11 1,11" fill="#18181B" />
              <polygon points="14,3 14,8 8,11 6,11" fill="#18181B" />

              {/* Q2: Top Right - Crossland Bottony Cross (Red & White) */}
              <rect x="14" y="0" width="14" height="11" fill="#FFFFFF" />
              <rect x="14" y="0" width="7" height="5.5" fill="#DC2626" />
              <rect x="21" y="5.5" width="7" height="5.5" fill="#DC2626" />
              <circle cx="21" cy="5.5" r="2" fill="#FFFFFF" />
              <circle cx="21" cy="5.5" r="1.2" fill="#DC2626" />
              <circle cx="21" cy="1.5" r="1" fill="#DC2626" />
              <circle cx="21" cy="9.5" r="1" fill="#FFFFFF" />

              {/* Q3: Bottom Left - Crossland Bottony Cross */}
              <rect x="0" y="11" width="14" height="19" fill="#DC2626" />
              <rect x="0" y="11" width="7" height="9.5" fill="#FFFFFF" />
              <rect x="7" y="20.5" width="7" height="9.5" fill="#FFFFFF" />
              <circle cx="7" cy="20.5" r="2" fill="#DC2626" />
              <circle cx="7" cy="20.5" r="1.2" fill="#FFFFFF" />

              {/* Q4: Bottom Right - Calvert Chevrons */}
              <rect x="14" y="11" width="14" height="19" fill="#F59E0B" />
              <polygon points="14,11 18,11 14,17" fill="#18181B" />
              <polygon points="18,11 24,11 14,24" fill="#18181B" />
              <polygon points="24,11 28,11 17,28 14,28" fill="#18181B" />
            </g>

            {/* Shield Border */}
            <path d="M0 0 L28 0 L28 18 C28 26 14 30 14 30 C14 30 0 26 0 18 Z" stroke="url(#con-gold)" strokeWidth="2" fill="none" />
          </g>

          {/* Faceted Ruby Gemstone Pendant at Shield Tip */}
          <polygon points="32,47 36,51 32,56 28,51" fill="url(#con-ruby)" stroke="url(#con-gold)" strokeWidth="1" />
          <polygon points="32,48 34,51 32,54 30,51" fill="#FEF2F2" opacity="0.4" />

          {/* Lower Crimson Banner: CONNOISSEUR IV */}
          <path d="M10 54 L32 51 L54 54 L50 60 L32 57 L14 60 Z" fill="url(#con-ruby)" stroke="url(#con-gold)" strokeWidth="1" />
          <text x="32" y="57" textAnchor="middle" fontSize="5.5" fontWeight="900" fill="#FEF08A" fontFamily="sans-serif" letterSpacing="0.8">
            CONNOISSEUR &bull; IV
          </text>
        </svg>
      );

    case 5:
    default:
      // Rank 5: Charm City Laureate Grand Sovereign Medal (16-Point Radiant Starburst)
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <defs>
            <linearGradient id="lau-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E22CE" />
              <stop offset="50%" stopColor="#581C87" />
              <stop offset="100%" stopColor="#2E1065" />
            </linearGradient>
            <linearGradient id="lau-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FEF08A" />
              <stop offset="35%" stopColor="#FBBF24" />
              <stop offset="70%" stopColor="#D97706" />
              <stop offset="100%" stopColor="#78350F" />
            </linearGradient>
            <radialGradient id="lau-center" cx="50%" cy="45%" r="50%">
              <stop offset="0%" stopColor="#FFFBEB" />
              <stop offset="60%" stopColor="#FEF3C7" />
              <stop offset="100%" stopColor="#FDE68A" />
            </radialGradient>
          </defs>

          {/* Royal Purple Watered-Silk Neck Sash Ribbon */}
          <path d="M22 2 L32 16 L42 2 L50 2 L36 20 L28 20 L14 2 Z" fill="url(#lau-purple)" stroke="url(#lau-gold)" strokeWidth="0.8" />
          <line x1="24" y1="2" x2="33" y2="16" stroke="#FDE047" strokeWidth="0.8" opacity="0.8" />
          <line x1="40" y1="2" x2="31" y2="16" stroke="#FDE047" strokeWidth="0.8" opacity="0.8" />

          {/* 16-Point Radiant Golden Sunburst Star */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const isLong = i % 2 === 0;
            const rOuter = isLong ? 30 : 25;
            const rInner = 19;
            const aRad = (angle * Math.PI) / 180;
            const aLeft = ((angle - 11.25) * Math.PI) / 180;
            const aRight = ((angle + 11.25) * Math.PI) / 180;

            const tipX = 32 + rOuter * Math.cos(aRad);
            const tipY = 32 + rOuter * Math.sin(aRad);
            const leftX = 32 + rInner * Math.cos(aLeft);
            const leftY = 32 + rInner * Math.sin(aLeft);
            const rightX = 32 + rInner * Math.cos(aRight);
            const rightY = 32 + rInner * Math.sin(aRight);

            return (
              <g key={i}>
                <polygon points={`32,32 ${tipX},${tipY} ${leftX},${leftY}`} fill={isLong ? '#FEF08A' : '#FBBF24'} />
                <polygon points={`32,32 ${tipX},${tipY} ${rightX},${rightY}`} fill={isLong ? '#D97706' : '#92400E'} />
              </g>
            );
          })}

          {/* Concentric Sapphire & Diamond Gem Ring */}
          <circle cx="32" cy="32" r="20" fill="url(#lau-purple)" stroke="url(#lau-gold)" strokeWidth="1.5" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x = 32 + 18.2 * Math.cos(rad);
            const y = 32 + 18.2 * Math.sin(rad);
            const isSapphire = i % 2 === 0;
            return <circle key={i} cx={x} cy={y} r="1.4" fill={isSapphire ? '#38BDF8' : '#FFFFFF'} stroke="#D97706" strokeWidth="0.4" />;
          })}

          {/* High-Relief 24K Gold Laurel Wreath */}
          <circle cx="32" cy="32" r="16" fill="url(#lau-center)" stroke="url(#lau-gold)" strokeWidth="1.5" />
          <path d="M19 32 C19 39 25 44 32 44 C39 44 45 39 45 32 C45 25 39 20 32 20 C25 20 19 25 19 32 Z" stroke="url(#lau-gold)" strokeWidth="1" fill="none" />
          
          {/* Detailed Golden Laurel Sprigs */}
          {[-60, -30, 0, 30, 60].map((deg, i) => (
            <g key={i} transform={`rotate(${deg} 32 32)`}>
              <ellipse cx="17.5" cy="32" rx="1.8" ry="3.5" transform="rotate(-30 17.5 32)" fill="#F59E0B" stroke="#78350F" strokeWidth="0.5" />
              <ellipse cx="46.5" cy="32" rx="1.8" ry="3.5" transform="rotate(30 46.5 32)" fill="#F59E0B" stroke="#78350F" strokeWidth="0.5" />
            </g>
          ))}

          {/* Central Sovereign Johns Hopkins Veritas Crest */}
          <path d="M26 25 L38 25 L38 34 C38 39 32 42 32 42 C32 42 26 39 26 34 Z" fill="#002D72" stroke="url(#lau-gold)" strokeWidth="1.2" />
          
          {/* Illuminated Veritas Open Book */}
          <path d="M28 28 Q32 29 32 34 Q32 29 36 28 L36 33 Q32 34 32 37 Q32 34 28 33 Z" fill="#FFFFFF" stroke="#D97706" strokeWidth="0.6" />
          <line x1="32" y1="29" x2="32" y2="37" stroke="#D97706" strokeWidth="0.8" />
          <line x1="29.5" y1="30.5" x2="31" y2="30.5" stroke="#002D72" strokeWidth="0.5" />
          <line x1="29.5" y1="32" x2="31" y2="32" stroke="#002D72" strokeWidth="0.5" />
          <line x1="33" y1="30.5" x2="34.5" y2="30.5" stroke="#002D72" strokeWidth="0.5" />
          <line x1="33" y1="32" x2="34.5" y2="32" stroke="#002D72" strokeWidth="0.5" />

          {/* Sovereign Diamond Crown atop shield */}
          <path d="M28 24 L29 20 L32 22 L35 20 L36 24 Z" fill="url(#lau-gold)" stroke="#78350F" strokeWidth="0.6" />
          <circle cx="29" cy="20" r="0.8" fill="#38BDF8" />
          <circle cx="32" cy="22" r="0.8" fill="#FFFFFF" />
          <circle cx="35" cy="20" r="0.8" fill="#38BDF8" />

          {/* Lower Imperial Golden Banner: GRAND LAUREATE */}
          <path d="M8 54 L32 51 L56 54 L52 61 L32 57 L12 61 Z" fill="#451A03" stroke="url(#lau-gold)" strokeWidth="1.2" />
          <text x="32" y="57.5" textAnchor="middle" fontSize="5.2" fontWeight="900" fill="#FEF08A" fontFamily="sans-serif" letterSpacing="0.8">
            GRAND LAUREATE &bull; V
          </text>
        </svg>
      );
  }
};

// ==========================================
// 3. ACHIEVEMENT BADGES (9 BADGES)
// ==========================================

export const BadgeIconArt: React.FC<{
  badgeId: string;
  isUnlocked?: boolean;
  size?: number;
  className?: string;
}> = ({ badgeId, isUnlocked = true, size = 36, className = '' }) => {
  const grayscaleClass = !isUnlocked ? 'filter grayscale opacity-60' : '';

  const renderContent = () => {
    switch (badgeId) {
      case 'first-step':
        // First Flight: Hatching Jay with Flight Wings
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
            <ellipse cx="24" cy="26" rx="9" ry="8" fill="#002D72" />
            <circle cx="24" cy="20" r="7" fill="#4A90E2" />
            <polygon points="22,22 26,22 24,26" fill="#F59E0B" />
            <circle cx="21" cy="18" r="1.2" fill="#FFFFFF" />
            <circle cx="27" cy="18" r="1.2" fill="#FFFFFF" />
            {/* Flapping Wings */}
            <path d="M16 22 C10 20 10 14 14 16 C16 18 17 21 16 22 Z" fill="#68ACE5" />
            <path d="M32 22 C38 20 38 14 34 16 C32 18 31 21 32 22 Z" fill="#68ACE5" />
          </svg>
        );

      case 'dorm-escapee':
        // Dorm Escapee: Running Explorer Sneaker with Broken Bricks
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
            <rect x="8" y="32" width="10" height="6" rx="1" fill="#B45309" />
            <rect x="20" y="32" width="10" height="6" rx="1" fill="#B45309" />
            {/* Flying Running Shoe */}
            <path d="M14 26 C18 26 22 28 28 28 C34 28 38 26 40 25 C41 24 39 22 37 22 L18 22 C15 22 13 24 14 26 Z" fill="#F8FAFC" stroke="#002D72" strokeWidth="1.5" />
            <path d="M18 22 L22 14 C24 11 28 11 30 14 L34 18 L37 22 Z" fill="#002D72" />
            <path d="M20 12 C24 7 30 8 34 6 C31 10 29 13 26 14 Z" fill="#F59E0B" />
          </svg>
        );

      case 'shuttle-navigator':
        // Shuttle Pro: Blue & Gold Coach Transit
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
            <rect x="8" y="14" width="32" height="20" rx="4" fill="#002D72" />
            <path d="M8 26 C16 26 24 28 40 27 L40 30 C24 31 16 29 8 29 Z" fill="#F59E0B" />
            <rect x="11" y="17" width="10" height="7" rx="1.5" fill="#BAE6FD" />
            <rect x="23" y="17" width="6" height="7" rx="1" fill="#BAE6FD" />
            <rect x="31" y="17" width="6" height="7" rx="1" fill="#BAE6FD" />
            <circle cx="15" cy="34" r="4" fill="#1E293B" />
            <circle cx="33" cy="34" r="4" fill="#1E293B" />
          </svg>
        );

      case 'thrifty-scholar':
        // Thrifty Blue Jay: Zero-Cost Gold Ribbon Medal
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#ECFDF5" />
            <circle cx="24" cy="22" r="14" fill="#10B981" stroke="#047857" strokeWidth="2" />
            <circle cx="24" cy="22" r="11" fill="#34D399" />
            {/* Clean Dollar / Free Tag */}
            <text x="24" y="27" textAnchor="middle" fontSize="14" fontWeight="900" fill="#064E3B" fontFamily="sans-serif">$0</text>
            {/* Hanging Ribbon Tails */}
            <path d="M18 34 L15 44 L21 41 L23 44 L23 34 Z" fill="#047857" />
            <path d="M30 34 L33 44 L27 41 L25 44 L25 34 Z" fill="#047857" />
          </svg>
        );

      case 'museum-connoisseur':
        // Museum Connoisseur: Classical Greek Pediment Temple
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#EEF2FF" />
            {/* Roof Triangular Pediment */}
            <polygon points="24,10 38,18 10,18" fill="#4338CA" />
            <polygon points="24,13 34,18 14,18" fill="#6366F1" />
            {/* 4 Classical Columns */}
            <rect x="13" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            <rect x="20" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            <rect x="25" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            <rect x="32" y="20" width="3.5" height="15" fill="#C7D2FE" rx="1" />
            {/* Foundation Steps */}
            <rect x="9" y="35" width="30" height="3" fill="#3730A3" rx="1" />
            <rect x="7" y="38" width="34" height="3" fill="#1E1B4B" rx="1" />
          </svg>
        );

      case 'old-bay-crustacean':
        // Old Bay Aficionado: Red & Yellow Seasoned Crab
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEE2E2" />
            <ellipse cx="24" cy="26" rx="12" ry="8" fill="#DC2626" />
            <polygon points="24,23 26,26 24,29 22,26" fill="#FBBF24" />
            <path d="M12 21 C8 15 11 9 15 11 C16 13 14 18 12 21 Z" fill="#EF4444" />
            <path d="M36 21 C40 15 37 9 33 11 C32 13 34 18 36 21 Z" fill="#EF4444" />
            <circle cx="21" cy="19" r="1.8" fill="#FFFFFF" />
            <circle cx="27" cy="19" r="1.8" fill="#FFFFFF" />
            <circle cx="21" cy="19" r="0.9" fill="#000000" />
            <circle cx="27" cy="19" r="0.9" fill="#000000" />
          </svg>
        );

      case 'point-club-500':
        // 500-Point High Flyer: Golden Star Medallion
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
            <polygon points="24,6 29,17 41,18 32,27 35,39 24,33 13,39 16,27 7,18 19,17" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <polygon points="24,10 28,19 37,20 30,27 32,36 24,31 16,36 18,27 11,20 20,19" fill="#FDE047" />
            <circle cx="24" cy="24" r="6" fill="#002D72" />
            <text x="24" y="27" textAnchor="middle" fontSize="7" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">500</text>
          </svg>
        );

      case 'quest-champion':
        // Quest Master: Golden Expedition Trophy Cup
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF9C3" />
            {/* Trophy Cup */}
            <path d="M16 12 L32 12 L30 24 C28 29 20 29 18 24 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="18" y="14" width="12" height="8" rx="1" fill="#FDE047" />
            {/* Handles */}
            <path d="M16 14 C11 14 11 22 17 22" stroke="#B45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M32 14 C37 14 37 22 31 22" stroke="#B45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Stem & Pedestal */}
            <rect x="22" y="27" width="4" height="6" fill="#B45309" />
            <rect x="15" y="33" width="18" height="6" rx="2" fill="#78350F" />
            <circle cx="24" cy="18" r="2" fill="#002D72" />
          </svg>
        );

      case 'baltimore-baron':
      default:
        // True Baltimorean: Grand Golden Coronet & Maryland Ribbon
        return (
          <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`${className} ${grayscaleClass}`}>
            <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
            <path d="M10 32 L38 32 L35 18 L29 25 L24 14 L19 25 L13 18 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <rect x="12" y="32" width="24" height="4" rx="1" fill="#78350F" />
            <circle cx="10" cy="17" r="2.5" fill="#3B82F6" />
            <circle cx="24" cy="13" r="3" fill="#DC2626" />
            <circle cx="38" cy="17" r="2.5" fill="#3B82F6" />
          </svg>
        );
    }
  };

  return <span className="inline-flex items-center justify-center flex-shrink-0">{renderContent()}</span>;
};

// ==========================================
// 4. QUEST ICON ART (6 EXPEDITIONS)
// ==========================================

export const QuestIconArt: React.FC<{
  questId?: string;
  icon?: string;
  size?: number;
  className?: string;
}> = ({ questId = '', icon = '', size = 36, className = '' }) => {
  const key = (questId + ' ' + icon).toLowerCase();

  if (key.includes('bubble')) {
    // Bubble-Burster: Iridescent Soap Bubble popping over campus spire
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
        <circle cx="23" cy="25" r="14" fill="url(#bubble-grad)" stroke="#38BDF8" strokeWidth="2" opacity="0.9" />
        <path d="M16 18 C17 15 21 14 24 15" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="15" cy="22" r="1.5" fill="#FFFFFF" />
        {/* Tiny pop bubbles */}
        <circle cx="34" cy="14" r="3.5" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1" />
        <circle cx="38" cy="26" r="2" fill="#BAE6FD" />
        <defs>
          <radialGradient id="bubble-grad" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#BAE6FD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    );
  }

  if (key.includes('peabody') || key.includes('culture')) {
    // Peabody Tour: Grand Column & Golden Lyre
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
        {/* Bookshelf Tiers */}
        <rect x="10" y="12" width="28" height="4" fill="#002D72" rx="1" />
        <rect x="10" y="20" width="28" height="4" fill="#B45309" rx="1" />
        <rect x="10" y="28" width="28" height="4" fill="#007788" rx="1" />
        {/* Ornate Gold Lyre / Harp */}
        <path d="M20 16 C18 24 18 32 24 35 C30 32 30 24 28 16 Z" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
        <line x1="22" y1="18" x2="22" y2="33" stroke="#B45309" strokeWidth="1" />
        <line x1="24" y1="17" x2="24" y2="34" stroke="#B45309" strokeWidth="1" />
        <line x1="26" y1="18" x2="26" y2="33" stroke="#B45309" strokeWidth="1" />
      </svg>
    );
  }

  if (key.includes('triangle') || key.includes('shuttle')) {
    // Shuttle Triangle: Hopkins 3-Campus Connecting Delta
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
        {/* Triangular Route Loop */}
        <polygon points="24,10 38,34 10,34" stroke="#002D72" strokeWidth="3" strokeLinejoin="round" fill="none" strokeDasharray="4 2" />
        {/* Node 1: Homewood */}
        <circle cx="24" cy="10" r="5" fill="#002D72" stroke="#FFFFFF" strokeWidth="2" />
        {/* Node 2: Peabody */}
        <circle cx="38" cy="34" r="5" fill="#C8102E" stroke="#FFFFFF" strokeWidth="2" />
        {/* Node 3: Med */}
        <circle cx="10" cy="34" r="5" fill="#007788" stroke="#FFFFFF" strokeWidth="2" />
        {/* Mini Shuttle in Center */}
        <rect x="18" y="21" width="12" height="7" rx="1.5" fill="#F59E0B" />
      </svg>
    );
  }

  if (key.includes('fells') || key.includes('flavor')) {
    // Fells Point: Maritime Sailboat on Cobblestones
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#EEF2FF" />
        <path d="M12 33 L16 35 L32 35 L36 31 L14 31 Z" fill="#78350F" />
        <line x1="22" y1="12" x2="22" y2="32" stroke="#451A03" strokeWidth="2" />
        <path d="M21 14 L12 28 L21 28 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
        <path d="M23 16 L31 29 L23 29 Z" fill="#68ACE5" stroke="#002D72" strokeWidth="0.8" />
      </svg>
    );
  }

  if (key.includes('star-spangled') || key.includes('star')) {
    // Star-Spangled: 15-Star Fort McHenry Shield
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#FEE2E2" />
        <path d="M12 12 L36 12 L36 24 C36 34 24 40 24 40 C24 40 12 34 12 24 Z" fill="#FFFFFF" stroke="#002D72" strokeWidth="2" />
        <path d="M12 12 L36 12 L36 20 L12 20 Z" fill="#002D72" />
        <rect x="12" y="24" width="24" height="4" fill="#C8102E" />
        <rect x="12" y="32" width="24" height="4" fill="#C8102E" />
        <polygon points="24,14 25.5,18 29.5,18 26.5,20.5 28,24.5 24,22 20,24.5 21.5,20.5 18.5,18 22.5,18" fill="#FBBF24" />
      </svg>
    );
  }

  // Visionary Rebel / Arts Circuit: Spray Can & Color Burst
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="22" fill="#F5F3FF" />
      {/* Aerosol Spray Can */}
      <rect x="18" y="18" width="12" height="18" rx="2" fill="#7C3AED" />
      <rect x="21" y="14" width="6" height="4" rx="1" fill="#94A3B8" />
      <circle cx="24" cy="12" r="1.5" fill="#EF4444" />
      {/* Graffiti Paint Swirls */}
      <path d="M26 12 Q34 8 38 14 Q32 18 36 24" stroke="#EC4899" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="38" cy="18" r="2" fill="#F59E0B" />
      <circle cx="34" cy="10" r="1.5" fill="#3B82F6" />
    </svg>
  );
};

// ==========================================
// 5. STUDENT AVATAR VECTOR ART (8 OPTIONS)
// ==========================================

export const AVATAR_OPTIONS: { id: string; label: string }[] = [
  { id: 'baby-jay', label: 'Baby Jay Explorer' },
  { id: 'scholar-jay', label: 'Scholar Jay' },
  { id: 'maryland-crab', label: 'Baltimore Blue Crab' },
  { id: 'peabody-violin', label: 'Peabody Virtuoso' },
  { id: 'med-microscope', label: 'East Baltimore Med' },
  { id: 'lacrosse-jay', label: 'JHU Lacrosse Athlete' },
  { id: 'astronomy-star', label: 'Hopkins Astrophysicist' },
  { id: 'vintage-camera', label: 'Charm City Chronicler' },
];

export const AvatarVectorArt: React.FC<{
  avatarId?: string;
  size?: number;
  className?: string;
}> = ({ avatarId = 'baby-jay', size = 48, className = '' }) => {
  // Normalize legacy emojis or string ids
  let id = avatarId.toLowerCase();
  if (id === '🐦' || id.includes('blue-jay') || id.includes('baby-jay')) id = 'baby-jay';
  if (id === '🎓' || id.includes('scholar')) id = 'scholar-jay';
  if (id === '🦀' || id.includes('crab')) id = 'maryland-crab';
  if (id === '🎻' || id.includes('violin') || id.includes('peabody')) id = 'peabody-violin';
  if (id === '🔬' || id.includes('microscope') || id.includes('med')) id = 'med-microscope';
  if (id === '🦉' || id.includes('lacrosse')) id = 'lacrosse-jay';
  if (id === '🚀' || id.includes('star') || id.includes('astronomy')) id = 'astronomy-star';
  if (id === '🎨' || id.includes('camera') || id.includes('vintage')) id = 'vintage-camera';

  switch (id) {
    case 'scholar-jay':
      // Baby Jay with Graduation Mortarboard & Glasses
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
          <ellipse cx="32" cy="40" rx="18" ry="14" fill="#002D72" />
          <circle cx="32" cy="28" r="14" fill="#4A90E2" />
          {/* Mortarboard Cap */}
          <polygon points="32,10 50,17 32,24 14,17" fill="#002D72" stroke="#1E293B" strokeWidth="1" />
          <polygon points="24,20 40,20 37,25 27,25" fill="#002D72" />
          <line x1="32" y1="17" x2="44" y2="21" stroke="#F59E0B" strokeWidth="1.5" />
          <circle cx="44" cy="23" r="2" fill="#F59E0B" />
          {/* Glasses */}
          <circle cx="27" cy="28" r="4.5" stroke="#D97706" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.85" />
          <circle cx="37" cy="28" r="4.5" stroke="#D97706" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.85" />
          <line x1="31.5" y1="28" x2="32.5" y2="28" stroke="#D97706" strokeWidth="1.5" />
          <circle cx="27" cy="28" r="1.5" fill="#0F172A" />
          <circle cx="37" cy="28" r="1.5" fill="#0F172A" />
          {/* Beak */}
          <polygon points="30,33 34,33 32,37" fill="#F59E0B" />
        </svg>
      );

    case 'maryland-crab':
      // Cartoon Baltimore Blue Crab with Waving Claws
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#FEE2E2" />
          {/* Walking Legs */}
          <path d="M16 34 L10 38 M18 40 L12 45 M22 46 L18 52" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 34 L54 38 M46 40 L52 45 M42 46 L46 52" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" />
          {/* Shell */}
          <ellipse cx="32" cy="38" rx="16" ry="11" fill="#DC2626" />
          <ellipse cx="32" cy="38" rx="10" ry="7" fill="#B91C1C" />
          {/* Pincer Arms */}
          <path d="M22 34 C16 26 14 20 18 16 C22 12 24 16 20 22 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
          <path d="M42 34 C48 26 50 20 46 16 C42 12 40 16 44 22 Z" fill="#EF4444" stroke="#DC2626" strokeWidth="1" />
          {/* Eyestalks */}
          <circle cx="28" cy="26" r="3" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1" />
          <circle cx="36" cy="26" r="3" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1" />
          <circle cx="28" cy="26" r="1.5" fill="#0F172A" />
          <circle cx="36" cy="26" r="1.5" fill="#0F172A" />
        </svg>
      );

    case 'peabody-violin':
      // Peabody Conservatory Violin & Golden Clef
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#FEF3C7" />
          <g transform="rotate(30 32 32)">
            <ellipse cx="32" cy="38" rx="11" ry="14" fill="#B45309" />
            <ellipse cx="32" cy="24" rx="8" ry="10" fill="#92400E" />
            <rect x="29" y="8" width="6" height="16" fill="#1E293B" rx="1" />
            <circle cx="32" cy="7" r="3.5" fill="#78350F" />
            <circle cx="22" cy="31" r="4" fill="#FEF3C7" />
            <circle cx="42" cy="31" r="4" fill="#FEF3C7" />
            <line x1="32" y1="10" x2="32" y2="46" stroke="#FDE68A" strokeWidth="1.5" />
          </g>
          <circle cx="48" cy="18" r="3" fill="#D97706" />
          <path d="M51 18 L51 10 L56 12" stroke="#D97706" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      );

    case 'med-microscope':
      // East Baltimore Medical Research Microscope
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#ECFDF5" />
          {/* Eyepiece / Barrel */}
          <g transform="rotate(-20 32 32)">
            <rect x="28" y="14" width="8" height="18" rx="2" fill="#047857" />
            <rect x="26" y="10" width="12" height="5" rx="1" fill="#065F46" />
            <polygon points="30,32 34,32 33,36 31,36" fill="#A7F3D0" />
          </g>
          {/* Curved Arm */}
          <path d="M38 24 C44 28 44 42 36 46" stroke="#065F46" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* Specimen Stage */}
          <rect x="22" y="38" width="18" height="3" fill="#1E293B" rx="1" />
          {/* Heavy Base */}
          <rect x="18" y="48" width="28" height="5" rx="2" fill="#065F46" />
        </svg>
      );

    case 'lacrosse-jay':
      // Hopkins Lacrosse Crossed Sticks & Blue Jay Crest
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
          {/* Crossed Lacrosse Stick Handles */}
          <line x1="14" y1="50" x2="48" y2="16" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="16" y2="16" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          {/* Net Head */}
          <path d="M44 14 C48 10 54 16 50 20 Z" fill="#002D72" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M20 14 C16 10 10 16 14 20 Z" fill="#002D72" stroke="#FFFFFF" strokeWidth="1" />
          {/* Hopkins JHU Lacrosse Ball */}
          <circle cx="32" cy="32" r="8" fill="#F59E0B" stroke="#002D72" strokeWidth="2" />
          <text x="32" y="35" textAnchor="middle" fontSize="8" fontWeight="900" fill="#002D72" fontFamily="sans-serif">JHU</text>
        </svg>
      );

    case 'astronomy-star':
      // Space Telescope & Ringed Celestial Planet
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#0F172A" />
          {/* Ringed Planet */}
          <ellipse cx="32" cy="32" rx="14" ry="14" fill="#6366F1" />
          <ellipse cx="32" cy="32" rx="24" ry="6" stroke="#F59E0B" strokeWidth="3" fill="none" transform="rotate(-25 32 32)" />
          {/* Star Sparkles */}
          <polygon points="18,14 19.5,17 22.5,18 19.5,19 18,22 16.5,19 13.5,18 16.5,17" fill="#FDE047" />
          <polygon points="46,44 47,46 49,47 47,48 46,50 45,48 43,47 45,46" fill="#FDE047" />
        </svg>
      );

    case 'vintage-camera':
      // Vintage Leather Traveler Camera
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#FEF3C7" />
          {/* Camera Body */}
          <rect x="14" y="24" width="36" height="24" rx="4" fill="#78350F" />
          <rect x="14" y="24" width="36" height="7" fill="#1E293B" rx="1" />
          {/* Shutter Button & Flash */}
          <rect x="18" y="20" width="6" height="4" rx="1" fill="#94A3B8" />
          <circle cx="42" cy="28" r="2.5" fill="#EF4444" />
          {/* Brass Optical Lens */}
          <circle cx="32" cy="36" r="8" fill="#1E293B" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="32" cy="36" r="4.5" fill="#38BDF8" />
          <circle cx="30" cy="34" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'baby-jay':
    default:
      // Baby Jay Explorer Mascot
      return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" className={className}>
          <circle cx="32" cy="32" r="30" fill="#E0F2FE" />
          <ellipse cx="32" cy="40" rx="18" ry="14" fill="#002D72" />
          <ellipse cx="32" cy="43" rx="11" ry="9" fill="#FFFFFF" />
          <circle cx="32" cy="27" r="14" fill="#4A90E2" />
          {/* Baby Jay Beak */}
          <polygon points="30,30 34,30 32,35" fill="#F59E0B" />
          {/* Eyes */}
          <circle cx="27" cy="25" r="2.5" fill="#FFFFFF" />
          <circle cx="27" cy="25" r="1.3" fill="#0F172A" />
          <circle cx="37" cy="25" r="2.5" fill="#FFFFFF" />
          <circle cx="37" cy="25" r="1.3" fill="#0F172A" />
          {/* Safari Explorer Hat */}
          <ellipse cx="32" cy="18" rx="16" ry="4" fill="#D97706" />
          <path d="M22 18 C22 12 42 12 42 18 Z" fill="#B45309" />
          <rect x="23" y="16" width="18" height="2" fill="#002D72" />
        </svg>
      );
  }
};
