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
    // Level 1: Fledgling Fencer (Hatching Chick in Egg)
    if (key.includes('subrank-1') || key.includes('fledgling') || key.includes('🐣') || key.includes('nestling-hatch')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
          {/* Cracked Egg Bottom */}
          <path d="M12 28 C12 37 17 42 24 42 C31 42 36 37 36 28 L32 30 L28 27 L24 31 L20 27 L16 30 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Baby Blue Jay Head Peeking */}
          <ellipse cx="24" cy="24" rx="10" ry="9" fill="#002D72" />
          <ellipse cx="24" cy="21" rx="8" ry="7" fill="#4A90E2" />
          {/* Beak */}
          <path d="M22 23 L26 23 L24 27 Z" fill="#F59E0B" />
          {/* Eyes */}
          <circle cx="21" cy="20" r="1.5" fill="#FFFFFF" />
          <circle cx="21" cy="20" r="0.8" fill="#0F172A" />
          <circle cx="27" cy="20" r="1.5" fill="#FFFFFF" />
          <circle cx="27" cy="20" r="0.8" fill="#0F172A" />
          {/* Egg Shell Top Hat */}
          <path d="M18 16 L22 19 L25 15 L28 19 L31 16 C30 11 20 11 18 16 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.2" />
          {/* Sparkle */}
          <polygon points="36,12 37.5,15.5 41,17 37.5,18.5 36,22 34.5,18.5 31,17 34.5,15.5" fill="#FBBF24" />
        </svg>
      );
    }

    // Level 2: Brody Stalker (Scholarly Book Stack with Bookmark)
    if (key.includes('subrank-2') || key.includes('brody') || key.includes('📚') || key.includes('brody-books')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#EEF2FF" />
          {/* Bottom Book */}
          <rect x="10" y="32" width="28" height="6" rx="1.5" fill="#002D72" />
          <rect x="12" y="33" width="23" height="4" rx="1" fill="#F1F5F9" />
          <path d="M10 32 L10 38" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          {/* Middle Book */}
          <rect x="12" y="24" width="24" height="6" rx="1.5" fill="#007788" />
          <rect x="14" y="25" width="20" height="4" rx="1" fill="#F8FAFC" />
          <path d="M12 24 L12 30" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          {/* Top Book (Angled slightly) */}
          <g transform="rotate(-3 24 19)">
            <rect x="14" y="16" width="21" height="6" rx="1.5" fill="#C8102E" />
            <rect x="15.5" y="17" width="18" height="4" rx="1" fill="#F8FAFC" />
            <path d="M14 16 L14 22" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
            {/* Gold Ribbon Bookmark hanging */}
            <path d="M30 22 L30 29 L32 27.5 L34 29 L34 22 Z" fill="#F59E0B" />
          </g>
          {/* Glowing Veritas Glasses on Top */}
          <circle cx="20" cy="12" r="3.5" stroke="#D97706" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.8" />
          <circle cx="28" cy="12" r="3.5" stroke="#D97706" strokeWidth="1.5" fill="#FFFFFF" fillOpacity="0.8" />
          <line x1="23.5" y1="12" x2="24.5" y2="12" stroke="#D97706" strokeWidth="1.5" />
        </svg>
      );
    }

    // Level 3: Charles Street Sprinter (Winged Running Sneaker)
    if (key.includes('subrank-3') || key.includes('charles') || key.includes('🏃') || key.includes('charles-runner')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
          {/* Speed Streaks */}
          <line x1="6" y1="28" x2="14" y2="28" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
          <line x1="4" y1="33" x2="16" y2="33" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
          {/* Running Shoe Sole */}
          <path d="M12 34 C16 34 22 36 28 36 C34 36 38 34 41 33 C42 32 40 30 38 30 L16 30 C13 30 11 32 12 34 Z" fill="#F8FAFC" stroke="#002D72" strokeWidth="1.5" />
          {/* Shoe Body */}
          <path d="M16 30 L20 22 C22 18 26 18 28 22 L33 26 L38 30 Z" fill="#002D72" />
          <path d="M22 23 L26 27" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" />
          {/* Blue Jay Wing on Shoe */}
          <path d="M18 20 C18 14 26 13 32 10 C30 14 28 17 26 18 C30 17 33 16 35 14 C32 19 28 22 23 23 Z" fill="#68ACE5" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      );
    }

    // Level 4: Wyman Park Wanderer (Oak Leaf & Forest Dell Acorn)
    if (key.includes('subrank-4') || key.includes('wyman') || key.includes('🌿') || key.includes('wyman-dell')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#ECFDF5" />
          {/* Oak Leaves */}
          <path d="M24 10 C27 15 35 16 33 24 C31 29 27 31 24 38 C21 31 17 29 15 24 C13 16 21 15 24 10 Z" fill="#10B981" />
          <path d="M24 10 L24 38" stroke="#047857" strokeWidth="1.5" />
          <path d="M24 18 Q29 21 31 23" stroke="#047857" strokeWidth="1.2" />
          <path d="M24 26 Q28 28 30 30" stroke="#047857" strokeWidth="1.2" />
          <path d="M24 18 Q19 21 17 23" stroke="#047857" strokeWidth="1.2" />
          <path d="M24 26 Q20 28 18 30" stroke="#047857" strokeWidth="1.2" />
          {/* Little Acorn */}
          <ellipse cx="32" cy="33" rx="4" ry="5" fill="#B45309" />
          <path d="M28 31 C28 28 36 28 36 31 Z" fill="#78350F" />
          <line x1="32" y1="28" x2="33" y2="26" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }

    // Level 5: JHMI Shuttle Veteran (Hopkins Shuttle Bus)
    if (key.includes('subrank-5') || key.includes('shuttle') || key.includes('🚌') || key.includes('jhmi-shuttle')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
          {/* Shuttle Body */}
          <rect x="10" y="14" width="28" height="20" rx="4" fill="#002D72" />
          {/* Gold Wave Stripe */}
          <path d="M10 26 C16 26 22 28 38 27 L38 30 C22 31 16 29 10 29 Z" fill="#F59E0B" />
          {/* Front Windshield */}
          <rect x="12" y="17" width="10" height="7" rx="1.5" fill="#BAE6FD" />
          {/* Passenger Windows */}
          <rect x="24" y="17" width="5" height="7" rx="1" fill="#BAE6FD" />
          <rect x="31" y="17" width="5" height="7" rx="1" fill="#BAE6FD" />
          {/* Destination Board */}
          <rect x="14" y="15" width="20" height="2" rx="0.5" fill="#10B981" />
          {/* Headlights */}
          <circle cx="12" cy="28" r="1.5" fill="#FBBF24" />
          {/* Wheels */}
          <circle cx="16" cy="34" r="4" fill="#1E293B" />
          <circle cx="16" cy="34" r="1.5" fill="#94A3B8" />
          <circle cx="32" cy="34" r="4" fill="#1E293B" />
          <circle cx="32" cy="34" r="1.5" fill="#94A3B8" />
        </svg>
      );
    }

    // Level 6: Peabody Harmonizer (Classical Violin & Gold Clef)
    if (key.includes('subrank-6') || key.includes('peabody') || key.includes('🎻') || key.includes('peabody-violin')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
          {/* Violin Body */}
          <g transform="rotate(35 24 24)">
            <ellipse cx="24" cy="28" rx="8" ry="10" fill="#B45309" />
            <ellipse cx="24" cy="18" rx="6" ry="7" fill="#92400E" />
            <rect x="21.5" y="6" width="5" height="12" fill="#1E293B" rx="1" />
            <circle cx="24" cy="5" r="2.5" fill="#78350F" />
            {/* Waist indents */}
            <circle cx="17" cy="23" r="3" fill="#FEF3C7" />
            <circle cx="31" cy="23" r="3" fill="#FEF3C7" />
            {/* Strings */}
            <line x1="24" y1="8" x2="24" y2="34" stroke="#FDE68A" strokeWidth="1" />
            {/* F-holes */}
            <path d="M21 21 C20 23 20 25 21 27" stroke="#451A03" strokeWidth="1" strokeLinecap="round" />
            <path d="M27 21 C28 23 28 25 27 27" stroke="#451A03" strokeWidth="1" strokeLinecap="round" />
          </g>
          {/* Musical Note */}
          <circle cx="36" cy="14" r="2.5" fill="#D97706" />
          <path d="M38.5 14 L38.5 8 L43 10 L43 13" stroke="#D97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      );
    }

    // Level 7: Hampden "Hon" Hunter (Retro Cat-Eye Sunglasses)
    if (key.includes('subrank-7') || key.includes('hampden') || key.includes('hon') || key.includes('🕶️') || key.includes('hampden-shades')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#FDF2F8" />
          {/* Left Cat-Eye Rim */}
          <path d="M8 22 C9 15 20 16 22 23 C22 28 14 30 10 27 C8 25 7 24 8 22 Z" fill="#DB2777" />
          {/* Left Lens */}
          <path d="M10 22 C11 17 19 17 20 23 C20 26 15 28 12 26 Z" fill="#1E1B4B" />
          {/* Right Cat-Eye Rim */}
          <path d="M40 22 C39 15 28 16 26 23 C26 28 34 30 38 27 C40 25 41 24 40 22 Z" fill="#DB2777" />
          {/* Right Lens */}
          <path d="M38 22 C37 17 29 17 28 23 C28 26 33 28 36 26 Z" fill="#1E1B4B" />
          {/* Bridge */}
          <path d="M22 22 Q24 20 26 22" stroke="#DB2777" strokeWidth="2.5" fill="none" />
          {/* Rhinestone sparkles on tips */}
          <circle cx="8" cy="18" r="1.5" fill="#FDE047" />
          <circle cx="40" cy="18" r="1.5" fill="#FDE047" />
          {/* Cute pink flamingos feather accent */}
          <path d="M24 10 C22 13 22 15 24 18 C26 15 26 13 24 10 Z" fill="#F472B6" />
        </svg>
      );
    }

    // Level 8: Inner Harbor Helmsman (Naval Brass Anchor & Hemp Rope)
    if (key.includes('subrank-8') || key.includes('harbor') || key.includes('helmsman') || key.includes('⚓') || key.includes('harbor-anchor')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
          {/* Top Ring */}
          <circle cx="24" cy="11" r="4.5" stroke="#D97706" strokeWidth="2" fill="none" />
          {/* Stock Crossbar */}
          <line x1="14" y1="18" x2="34" y2="18" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          <circle cx="14" cy="18" r="2" fill="#92400E" />
          <circle cx="34" cy="18" r="2" fill="#92400E" />
          {/* Shank (Vertical bar) */}
          <line x1="24" y1="13" x2="24" y2="38" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
          {/* Curved Arms */}
          <path d="M12 28 C12 38 36 38 36 28" stroke="#D97706" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Left Fluke */}
          <polygon points="9,28 14,29 11,33" fill="#B45309" />
          {/* Right Fluke */}
          <polygon points="39,28 34,29 37,33" fill="#B45309" />
          {/* Coiled Rope */}
          <path d="M22 13 Q27 16 24 20 Q20 24 26 27 Q22 31 24 35" stroke="#F59E0B" strokeWidth="1.8" fill="none" strokeDasharray="3 2" />
        </svg>
      );
    }

    // Level 9: Fells Point Pathologist (Twin-Masted Cobblestone Schooner)
    if (key.includes('subrank-9') || key.includes('fells') || key.includes('⛵') || key.includes('fells-sailboat')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#EEF2FF" />
          {/* Chesapeake Blue Water Waves */}
          <path d="M6 36 Q12 34 18 36 Q24 38 30 36 Q36 34 42 36 L42 40 L6 40 Z" fill="#38BDF8" opacity="0.8" />
          {/* Ship Wooden Hull */}
          <path d="M10 34 L14 36 L34 36 L39 31 L12 31 Z" fill="#78350F" stroke="#451A03" strokeWidth="1" />
          {/* Main Mast */}
          <line x1="22" y1="12" x2="22" y2="32" stroke="#451A03" strokeWidth="2" />
          {/* Fore Mast */}
          <line x1="32" y1="16" x2="32" y2="32" stroke="#451A03" strokeWidth="1.5" />
          {/* Main White Canvas Sail */}
          <path d="M21 13 L12 28 L21 28 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="0.8" />
          {/* Jib Triangle Sail */}
          <path d="M23 15 L31 29 L23 29 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="0.8" />
          {/* Flying Pennant */}
          <path d="M22 12 L18 10 L22 9 Z" fill="#EF4444" />
        </svg>
      );
    }

    // Level 10: Old Bay Connoisseur (Maryland Blue Crab Emblem)
    if (key.includes('subrank-10') || key.includes('old bay') || key.includes('🦀') || key.includes('old-bay-crab')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#FEE2E2" />
          {/* Walking Legs */}
          <path d="M12 24 L6 27 M13 28 L8 32 M15 32 L11 37" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          <path d="M36 24 L42 27 M35 28 L40 32 M33 32 L37 37" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          {/* Crab Shell */}
          <ellipse cx="24" cy="27" rx="12" ry="8" fill="#DC2626" />
          {/* Shell Heraldic Center */}
          <ellipse cx="24" cy="27" rx="8" ry="5" fill="#B91C1C" />
          <polygon points="24,24 26,27 24,30 22,27" fill="#FBBF24" />
          {/* Large Pincer Arms */}
          <path d="M16 23 Q12 18 10 14" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M32 23 Q36 18 38 14" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Claws */}
          <path d="M10 14 C7 11 8 7 12 8 C14 10 12 13 10 14 Z" fill="#EF4444" />
          <path d="M10 14 C6 16 6 20 9 20 C11 18 11 15 10 14 Z" fill="#3B82F6" />
          <path d="M38 14 C41 11 40 7 36 8 C34 10 36 13 38 14 Z" fill="#EF4444" />
          <path d="M38 14 C42 16 42 20 39 20 C37 18 37 15 38 14 Z" fill="#3B82F6" />
          {/* Eyestalks */}
          <circle cx="21" cy="19" r="2" fill="#FFFFFF" />
          <circle cx="21" cy="19" r="1" fill="#0F172A" />
          <circle cx="27" cy="19" r="2" fill="#FFFFFF" />
          <circle cx="27" cy="19" r="1" fill="#0F172A" />
        </svg>
      );
    }

    // Level 11: Fort McHenry Defender (Historic Star-Fort Citadel)
    if (key.includes('subrank-11') || key.includes('mchenry') || key.includes('fort') || key.includes('🏰') || key.includes('fort-mchenry')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
          {/* Brick Ramparts */}
          <path d="M10 36 L14 26 L18 26 L18 30 L22 30 L22 26 L26 26 L26 30 L30 30 L30 26 L34 26 L38 36 Z" fill="#B45309" stroke="#78350F" strokeWidth="1.5" />
          {/* Brick lines */}
          <line x1="14" y1="32" x2="34" y2="32" stroke="#78350F" strokeWidth="1" strokeDasharray="3 2" />
          {/* Star Point Bastion Center */}
          <polygon points="24,18 28,24 20,24" fill="#92400E" />
          {/* Brass Cannon */}
          <line x1="17" y1="23" x2="11" y2="20" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          <circle cx="17" cy="23" r="2" fill="#64748B" />
          {/* 15-Star Flag Flying */}
          <line x1="24" y1="8" x2="24" y2="20" stroke="#451A03" strokeWidth="1.5" />
          <rect x="24" y="8" width="10" height="6" fill="#DC2626" />
          <rect x="24" y="8" width="4" height="3" fill="#1E3A8A" />
          <circle cx="26" cy="9.5" r="0.8" fill="#FFFFFF" />
        </svg>
      );
    }

    // Level 12: Crab Feast Champion (Crossed Wooden Mallet & Seafood Pick)
    if (key.includes('subrank-12') || key.includes('feast') || key.includes('mallet') || key.includes('🔨') || key.includes('crab-mallet')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#FFEDD5" />
          {/* Wooden Mallet Head & Handle */}
          <g transform="rotate(45 24 24)">
            <rect x="22" y="8" width="4" height="28" rx="2" fill="#D97706" />
            <rect x="16" y="8" width="16" height="8" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />
          </g>
          {/* Crossed Stainless Seafood Knife / Pick */}
          <g transform="rotate(-45 24 24)">
            <rect x="22" y="10" width="4" height="26" rx="1.5" fill="#94A3B8" />
            <polygon points="22,10 26,10 24,6" fill="#CBD5E1" />
            <rect x="21" y="26" width="6" height="10" rx="1" fill="#DC2626" />
          </g>
          {/* Golden Crab Spice Sparkles */}
          <circle cx="24" cy="14" r="1.5" fill="#EF4444" />
          <circle cx="16" cy="34" r="1.5" fill="#F59E0B" />
          <circle cx="34" cy="32" r="1.5" fill="#DC2626" />
        </svg>
      );
    }

    // Level 13: Poe's Raven Disciple (Gothic Raven Profile & Quill)
    if (key.includes('subrank-13') || key.includes('poe') || key.includes('raven') || key.includes('🪶') || key.includes('poe-raven')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#F1F5F9" />
          {/* Raven Silhouette */}
          <path d="M14 36 C16 32 18 28 20 24 C19 18 24 10 32 10 C34 10 38 12 37 15 C33 16 30 18 29 21 C33 22 36 25 35 30 C34 35 28 38 20 38 L14 36 Z" fill="#0F172A" />
          {/* Sharp Beak */}
          <polygon points="32,10 42,12 34,14" fill="#F59E0B" />
          {/* Raven Piercing Eye */}
          <circle cx="30" cy="14" r="1.8" fill="#FBBF24" />
          <circle cx="30" cy="14" r="0.9" fill="#0F172A" />
          {/* Gothic Quill Feather Accent */}
          <path d="M12 28 C16 22 22 18 26 14 C23 20 18 25 14 30 Z" fill="#6366F1" opacity="0.6" />
        </svg>
      );
    }

    // Level 14: Charm City Legend (Imperial Crown with Sapphires)
    if (key.includes('subrank-14') || key.includes('legend') || key.includes('crown') || key.includes('👑') || key.includes('charm-crown')) {
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#FEF3C7" />
          {/* Crown Base */}
          <path d="M10 34 L38 34 L36 30 L12 30 Z" fill="#B45309" />
          <rect x="11" y="32" width="26" height="3" rx="1.5" fill="#F59E0B" />
          {/* Crown Peaks */}
          <path d="M10 30 L10 18 L18 25 L24 14 L30 25 L38 18 L38 30 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
          {/* Hopkins Sapphire and Ruby Jewels */}
          <circle cx="10" cy="17" r="2.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="0.8" />
          <circle cx="24" cy="13" r="3.5" fill="#C8102E" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="38" cy="17" r="2.5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="0.8" />
          <circle cx="18" cy="33.5" r="1.5" fill="#3B82F6" />
          <circle cx="24" cy="33.5" r="1.5" fill="#FFFFFF" />
          <circle cx="30" cy="33.5" r="1.5" fill="#C8102E" />
        </svg>
      );
    }

    // Level 15: Grand Blue Jay Laureate (8-Point Star with Golden Laurel)
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <circle cx="24" cy="24" r="22" fill="#FEF9C3" />
        {/* Golden Laurel Wreath Leaves */}
        <path d="M10 24 C10 32 16 38 24 38 C32 38 38 32 38 24" stroke="#D97706" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
        <ellipse cx="12" cy="28" rx="2" ry="4" transform="rotate(-30 12 28)" fill="#F59E0B" />
        <ellipse cx="16" cy="34" rx="2" ry="4" transform="rotate(-60 16 34)" fill="#F59E0B" />
        <ellipse cx="36" cy="28" rx="2" ry="4" transform="rotate(30 36 28)" fill="#F59E0B" />
        <ellipse cx="32" cy="34" rx="2" ry="4" transform="rotate(60 32 34)" fill="#F59E0B" />
        {/* 8-Point Radiating Star */}
        <polygon points="24,8 27,18 37,15 30,22 36,30 26,27 24,37 21,27 12,30 17,22 11,15 21,18" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
        <polygon points="24,12 26,19 32,17 28,22 31,27 25,25 24,32 22,25 17,27 20,22 16,17 22,19" fill="#FEF08A" />
        {/* Center Hopkins Crest Dot */}
        <circle cx="24" cy="22" r="3" fill="#002D72" />
        <circle cx="24" cy="22" r="1.2" fill="#FFFFFF" />
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
}> = ({ rankId, size = 32, className = '' }) => {
  switch (rankId) {
    case 1:
      // Nestling: Hatching Blue Jay Chick
      return <RankInsigniaArt id="subrank-1" size={size} className={className} />;
    case 2:
      // Homewood Hopper: Blue Jay Wing Flight Feather
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#E0F2FE" />
          <path d="M14 36 C16 30 20 20 32 10 C34 16 32 24 28 28 C26 30 22 34 14 36 Z" fill="#007788" />
          <path d="M18 32 C21 26 24 18 32 10" stroke="#68ACE5" strokeWidth="1.5" />
          <path d="M22 24 Q26 26 28 28" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M20 28 Q23 30 25 31" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      );
    case 3:
      // Charm City Scout: Nautical Brass Compass Rose
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
          <circle cx="24" cy="24" r="22" fill="#DBEAFE" />
          <circle cx="24" cy="24" r="18" stroke="#002D72" strokeWidth="2" fill="none" />
          <polygon points="24,9 27,21 24,24 21,21" fill="#C8102E" />
          <polygon points="24,39 27,27 24,24 21,27" fill="#002D72" />
          <polygon points="39,24 27,27 24,24 27,21" fill="#F59E0B" />
          <polygon points="9,24 21,27 24,24 21,21" fill="#94A3B8" />
          <circle cx="24" cy="24" r="3" fill="#F8FAFC" stroke="#002D72" strokeWidth="1.5" />
        </svg>
      );
    case 4:
      // Bmore Blue Jay: Imperial Maryland Crab
      return <RankInsigniaArt id="subrank-10" size={size} className={className} />;
    case 5:
    default:
      // Charm City Laureate: Golden Laureate Star
      return <RankInsigniaArt id="subrank-15" size={size} className={className} />;
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
